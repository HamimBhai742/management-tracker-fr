'use client';

import { useState } from 'react';

export default function MiniCalendar() {
  const [currentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const today = new Date();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' });

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
        {monthName}
      </h3>

      <div className="grid grid-cols-7 gap-1">
        {/* Day Headers */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div
            key={index}
            className="text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 py-1"
          >
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {days.map((day, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
              day
                ? isToday(day)
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'
                : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
