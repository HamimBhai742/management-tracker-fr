'use client';

interface BarChartProps {
  data: Array<{ label: string; value: number; color: string }>;
}

export default function BarChart({ data }: BarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {item.label}
            </span>
            <span className="font-bold text-zinc-900 dark:text-white">
              {item.value}
            </span>
          </div>
          <div className="h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
              style={{ 
                width: `${(item.value / maxValue) * 100}%`,
                animationDelay: `${index * 0.1}s`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
