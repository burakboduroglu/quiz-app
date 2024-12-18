import Header from '@/components/Header';
import Quiz from '@/components/Quiz';
import fetchQuestions from '@/lib/data';

export default async function QuizPage() {
  const questions = await fetchQuestions();
  const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

  return (
    <div className='flex flex-col w-3/4 mx-auto font-mono'>
      <Header />
      <main className='flex flex-col shadow-2xl m-4 rounded-xl bg-white bg-opacity-80 p-1'>
        <div className='flex mx-auto items-center justify-center border rounded-lg w-full border-green-500'>
          <Quiz questions={randomQuestions} />
        </div>
      </main>
    </div>
  );
}
