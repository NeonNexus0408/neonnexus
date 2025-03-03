import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} relative overflow-hidden`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white opacity-25 transition-transform duration-300 group-hover:scale-100" />
    </button>
  );
};

export default Button;