import React from 'react';
import { clsx } from 'clsx';

// Simple Badge component for Storybook examples
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  size = 'md'
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800 border border-blue-200',
    secondary: 'bg-gray-100 text-gray-800 border border-gray-200',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    default: 'bg-gray-100 text-gray-700 border border-gray-200',
    outline: 'bg-white text-gray-700 border border-gray-300',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm',
  };
  
  return (
    <span className={clsx(baseClasses, variantClasses[variant], sizeClasses[size])}>
      {children}
    </span>
  );
};

// Simple Button component for Storybook examples
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  color?: 'blue' | 'red' | 'green' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  color = 'blue',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const colorClasses = {
    solid: {
      blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      green: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      gray: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    },
    outline: {
      blue: 'border border-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
      red: 'border border-red-300 text-red-700 hover:bg-red-50 focus:ring-red-500',
      green: 'border border-green-300 text-green-700 hover:bg-green-50 focus:ring-green-500',
      gray: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    },
    ghost: {
      blue: 'text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
      red: 'text-red-700 hover:bg-red-50 focus:ring-red-500',
      green: 'text-green-700 hover:bg-green-50 focus:ring-green-500',
      gray: 'text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    },
  };
  
  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        colorClasses[variant][color],
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};