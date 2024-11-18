import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-mono gap-10'>
      <h1 className='text-5xl'>Welcome to the Quiz App</h1>
      <Link
        href='/quiz'
        className='text-lg border-2 rounded-xl p-5 bg-yellow-400 text-black hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl'
      >
        Start the quiz
      </Link>
    </div>
  );
}
