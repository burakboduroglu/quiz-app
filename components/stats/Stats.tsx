'use client';
import React from 'react';
import StatCard from '@/components/stats/StatCard';
import { ChartColumnIncreasing } from 'lucide-react';

interface StatsProps {
  results: {
    score: number;
    correct: number;
    wrong: number;
    correctAnswers: string[];
    userAnswers: string[];
  };
  questionsLength: string;
}

const Stats = ({ results, questionsLength }: StatsProps) => {
  return (
    <div className='flex flex-col items-center justify-center font-mono gap-3'>
      <div className='flex justify-center items-center gap-2 mb-3 border-b-2 border-black'>
        <ChartColumnIncreasing size={24} />
        <h2 className='text-3xl uppercase'>Results</h2>
      </div>

      <div className='grid grid-cols-2 gap-5 h-full w-full'>
        <div className='grid grid-cols-3 gap-4'>
          <StatCard title='Percentage' value={`${(results.score / 50) * 100}%`} />
          <StatCard title='Questions' value={questionsLength} />
          <StatCard title=' Score' value={results.score} />
          <StatCard title='Correct' value={results.correct} className='bg-green-400' />
          <StatCard title='Wrong' value={results.wrong} className='bg-red-400' />
        </div>
        <div className='grid grid-cols-2 ml-5 border border-black p-3 rounded-xl'>
          <div className='border-r-2 border-black'>
            <h3 className='text-center'>Correct Answer</h3>
            {results.correctAnswers.map((item: string, index: number) => (
              <div key={index}>
                <p className='text-lg text-center'>
                  {index + 1}: {item}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3 className='text-center'>User Answer</h3>
            {results.userAnswers.map((item: string, index: number) => (
              <div key={index}>
                <p className='text-lg text-center'>
                  {index + 1}: {item || 'Empty'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
