'use client';
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Instagram Clone</a>
        </Link>
        <nav>
          <Link href="/profile">
            <a className="text-gray-700 ml-4">Profile</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
