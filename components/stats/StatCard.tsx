'use client';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number | undefined;
  className?: string;
}

const StatCard = ({ title, value, className }: StatCardProps) => {
  return (
    <div
      className={`flex flex-col justify-center p-8 rounded-xl text-center text-xl border-2 font-bold border-black ${className}`}
    >
      <h3 className='text-base'>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatCard;
