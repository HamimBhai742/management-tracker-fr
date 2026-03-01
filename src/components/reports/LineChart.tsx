'use client';

interface LineChartProps {
  data: Array<{ label: string; value: number }>;
}

export default function LineChart({ data }: LineChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const getYPosition = (value: number) => {
    return 100 - ((value - minValue) / range) * 100;
  };

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="relative h-48 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-zinc-300 dark:text-zinc-700"
            />
          ))}

          {/* Line */}
          <polyline
            points={data
              .map((d, i) => `${(i / (data.length - 1)) * 100},${getYPosition(d.value)}`)
              .join(' ')}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="animate-draw-line"
          />

          {/* Area under line */}
          <polygon
            points={`0,100 ${data
              .map((d, i) => `${(i / (data.length - 1)) * 100},${getYPosition(d.value)}`)
              .join(' ')} 100,100`}
            fill="url(#areaGradient)"
            className="animate-fade-in"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Data points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i / (data.length - 1)) * 100}
              cy={getYPosition(d.value)}
              r="1.5"
              className="fill-blue-600 dark:fill-blue-400 animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
        {data.map((item, index) => (
          <span key={index} className="text-center">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
