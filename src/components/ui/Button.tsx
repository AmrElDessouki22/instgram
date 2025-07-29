'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`py-2 px-4 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};
