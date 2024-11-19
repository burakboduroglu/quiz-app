import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Quiz App with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <body className='font-mono bg-gradient-to-br from-green-50 via-white to-purple-50 h-full'>
        {children}
      </body>
    </html>
  );
}
