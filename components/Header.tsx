'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='pt-5'>
      <div className='w-full mx-auto flex justify-between items-center border-b border-b-black pb-5 flex-col lg:flex-row'>
        <Link href='/'>
          <p className='text-2xl lg:text-4xl uppercase font-mono'>QUIZ APP</p>
        </Link>
        <p className='text-sm lg:text-xl rounded-md'>JavaScript Fundamentals</p>
      </div>
    </header>
  );
}
