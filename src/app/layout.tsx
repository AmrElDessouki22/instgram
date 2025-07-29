import React from 'react';
import '@/app/globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export const metadata = {
  title: 'Instagram Clone',
  description: 'A clone of Instagram built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
