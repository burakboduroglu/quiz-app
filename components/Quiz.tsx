'use client';
import { useState, useEffect } from 'react';
import Stats from './stats/Stats';
import { Timer } from 'lucide-react';
import { Button } from './ui/button';

interface QuizProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    correct: 0,
    wrong: 0,
    correctAnswers: [] as string[],
    userAnswers: [] as string[],
  });
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerRunning && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timerRunning, timeRemaining]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const startTimer = () => setTimerRunning(true);
  const stopTimer = () => setTimerRunning(false);
  const resetTimer = () => setTimeRemaining(30);

  const handleTimeUp = () => {
    stopTimer();
    resetTimer();
    nextQuestion();
  };

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer[0]);
  };

  const nextQuestion = () => {
    setResults((prev) => ({
      ...prev,
      score:
        selectedAnswer === questions[activeQuestion].correctAnswer ? prev.score + 10 : prev.score,
      correct:
        selectedAnswer === questions[activeQuestion].correctAnswer
          ? prev.correct + 1
          : prev.correct,
      wrong:
        selectedAnswer !== questions[activeQuestion].correctAnswer ? prev.wrong + 1 : prev.wrong,
      correctAnswers: [...prev.correctAnswers, questions[activeQuestion].correctAnswer],
      userAnswers: [...prev.userAnswers, selectedAnswer],
    }));
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      stopTimer();
    }

    setSelectedAnswer('');
    setSelectedAnswerIndex(null);
    setChecked(false);
    resetTimer();
    startTimer();
  };

  return (
    <div className='h-full w-full font-mono'>
      <div className='max-w-[1500px] mx-auto w-[90%] flex justify-center py-4 flex-col'>
        {!showResults ? (
          <>
            {/* Timer and Question Number */}
            <div className='flex lg:flex-row justify-between gap-3 mb-8 items-start'>
              <div className='bg-green-500 p-5 rounded-lg text-white font-semibold'>
                <h2 className='text-sm lg:text-base'>
                  Question: {activeQuestion + 1}/{questions.length}
                </h2>
              </div>
              <div className='flex gap-2 bg-green-500 p-5 rounded-lg text-white font-semibold'>
                <Timer size={20} />
                <p>Time: {timeRemaining}</p>
              </div>
            </div>

            {/* Question and Answers */}
            <div className='flex flex-col'>
              <div className='w-full border-2 border-green-500 p-5 bg-white rounded-xl'>
                <h3 className='text-lg lg:text-sm font-bold underline pb-2'>Question:</h3>
                <p className='text-base lg:text-xl font-semibold'>
                  {questions[activeQuestion].question}
                </p>
              </div>
              <ul className='pt-5'>
                {questions[activeQuestion].answers.map((answer, idx) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={`text-base mt-1 font-light border border-sky-200 lg:text-lg cursor-pointer mb-1 py-2 rounded-md hover:bg-green-500 hover:text-white px-3 ${
                      selectedAnswerIndex === idx && 'bg-green-500 text-white'
                    }`}
                  >
                    <span>{answer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next/Finish Button */}
            <div className='flex justify-end'>
              <Button
                onClick={nextQuestion}
                disabled={!checked || timeRemaining > 20}
                variant={checked && timeRemaining < 20 ? 'custom' : 'ghost'}
              >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next Question →'}
              </Button>
            </div>

            {/* Warning */}
            <div className='border border-gray-400 p-3 rounded-2xl mb-2 mt-8 text-[13.5px] pt-1'>
              <h4 className='font-semibold text-red-700'>Warning!</h4>
              <p>You cannot pass the questions before 10 seconds are up.</p>
              <p>You cannot pass without marking the questions</p>
            </div>
          </>
        ) : (
          <Stats results={results} questionsLength={questions.length.toString()} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
