'use client';
import React from 'react';

interface ErrorBoundaryProps {
  error: Error;
}

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2">{error.message}</p>
    </div>
  );
}
