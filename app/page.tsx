import Link from 'next/link';
import { Origami } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex p-5 items-center px-4 lg:px-6'>
        <Link className='flex items-center justify-center' href='/'>
          <Origami size={32} />
          <span className='ml-2 text-xl font-bold'>Quiz App</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <div className='hidden md:flex items-center gap-6'>
            <Link className='text-sm font-medium hover:underline underline-offset-4' href='/quiz'>
              JavaScript Fundamentals Quiz
            </Link>
          </div>
        </nav>
      </header>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='flex flex-col justify-center items-center pb-5'>
          <h1 className='text-5xl font-bold pb-5'>Welcome to the Quiz App</h1>
          <p className='text-lg w-3/4 text-center'>
            Test your knowledge with our quiz. You will be presented with 10 multiple choice
            questions.
          </p>
        </div>
        <Link href='/quiz' className='text-base bg-green-700 text-white p-5 rounded-lg'>
          Start the quiz
        </Link>
      </div>
    </div>
  );
}
