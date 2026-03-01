'use client';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  delay?: string;
}

export default function ChartCard({ title, subtitle, children, delay = '0s' }: ChartCardProps) {
  return (
    <div
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
