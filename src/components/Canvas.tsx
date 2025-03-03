import React, { useEffect, useRef } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setCanvasSize();

    interface Star {
      x: number; // Current x position
      y: number; // Current y position
      size: number;
      speed: number;
      opacity: number;
      pulse: number;
      phase: 'left' | 'rotate' | 'right'; // Current phase of the star
      angle: number; // Angle for rotation around the photo
      rotations: number; // Number of completed rotations
      waveOffset: number; // Offset for wave-like motion
    }

    const stars: Star[] = [];
    const centerX = canvas.width / 2 -15; // Center of the screen (x-axis)
    const centerY = canvas.height / 2 - 70; // Center of the screen (y-axis) shifted 50px up
    const photoRadius = 160; // Radius of the circular path around the photo
    const flowSpeed = 5; // Speed of stars flowing in/out

    // Function to create a new star
    function createStar() {
      return {
        x: -100, // Start off-screen to the left
        y: centerY + (Math.random() - 0.5) * 100, // Randomize y position slightly
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.5, // Speed of movement
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * 0.02,
        phase: 'left', // Start in the "left" phase
        angle: 0, // Initial angle for rotation
        rotations: 0, // Number of completed rotations
        waveOffset: Math.random() * Math.PI * 2, // Random wave offset
      };
    }

    // Spawn stars at random intervals
    function spawnStars() {
      const star = createStar();
      stars.push(star);

      // Schedule the next star spawn at a random time
      const nextSpawnTime = Math.random() * 300 + 200; // Random time between 200ms and 1200ms
      setTimeout(spawnStars, nextSpawnTime);
    }

    // Start spawning stars
    spawnStars();

    function drawStar(star: Star) {
      // Draw star with a radial gradient
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.4, `rgba(70, 130, 240, ${star.opacity * 0.6})`);
      gradient.addColorStop(1, 'rgba(70, 130, 240, 0)');
      
      ctx.fillStyle = gradient;
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Add a center glow
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, ' + star.opacity + ')';
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawLightLines(time: number) {
      const lineCount = 6; // Number of light lines
      const amplitude = 50; // Amplitude of the wave
      const frequency = 0.005; // Frequency of the wave

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(70, 130, 240, ${0.2 + i * 0.1})`; // Vary opacity for depth
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            centerY +
            Math.sin(x * frequency + time * 0.001 + i * Math.PI) * amplitude; // Wave-like motion
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }

    function updateStar(star: Star, time: number) {
      // Update star position based on its phase
      if (star.phase === 'left') {
        // Move star from left to center with wave-like motion
        star.x += flowSpeed;
        star.y = centerY + Math.sin(star.x * 0.01 + star.waveOffset) * 50; // Wave-like motion
        if (star.x >= centerX - photoRadius) {
          star.phase = 'rotate'; // Transition to rotation phase
        }
      } else if (star.phase === 'rotate') {
        // Rotate star around the photo
        star.angle += star.speed * 0.02; // Adjust rotation speed
        if (star.angle >= Math.PI * 2) {
          star.angle = 0; // Reset angle after full rotation
          star.rotations += 1; // Increment rotation count
          if (star.rotations >= 1) {
            star.phase = 'right'; // Transition to right phase after 3 rotations
          }
        }
        star.x = centerX + Math.cos(star.angle) * photoRadius;
        star.y = centerY + Math.sin(star.angle) * photoRadius;
      } else if (star.phase === 'right') {
        // Move star from center to right with wave-like motion
        star.x += flowSpeed;
        star.y = centerY + Math.sin(star.x * 0.01 + star.waveOffset) * 50; // Wave-like motion
        if (star.x > canvas.width + 100) {
          // Remove star from the array when it goes off-screen
          const index = stars.indexOf(star);
          if (index !== -1) {
            stars.splice(index, 1);
          }
        }
      }

      // Update opacity for pulsing effect
      star.opacity += star.pulse;
      if (star.opacity >= 0.8 || star.opacity <= 0.3) {
        star.pulse = -star.pulse;
      }
    }

    let time = 0;
    function animate() {
      // Clear the canvas with a dark background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw light lines
      drawLightLines(time);

      // Update and draw stars
      stars.forEach(star => {
        updateStar(star, time);
        drawStar(star);
      });

      time++;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default Canvas;