'use client';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  delay?: string;
}

export default function StatCard({ title, value, change, changeType = 'neutral', icon, delay = '0s' }: StatCardProps) {
  const changeColors = {
    increase: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20',
    decrease: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20',
    neutral: 'text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/20',
  };

  return (
    <div
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
          {icon}
        </div>
        {change && (
          <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${changeColors[changeType]}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
        {title}
      </h3>
      <p className="text-3xl font-bold text-zinc-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
