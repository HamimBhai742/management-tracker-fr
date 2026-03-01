'use client';

interface PieChartProps {
  data: Array<{ label: string; value: number; color: string }>;
}

export default function PieChart({ data }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  let currentAngle = 0;
  const segments = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle: currentAngle,
    };
  });

  const getCoordinates = (angle: number, radius: number = 40) => {
    const radian = ((angle - 90) * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(radian),
      y: 50 + radius * Math.sin(radian),
    };
  };

  const createArc = (startAngle: number, endAngle: number) => {
    const start = getCoordinates(startAngle);
    const end = getCoordinates(endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M 50 50 L ${start.x} ${start.y} A 40 40 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Pie Chart */}
      <div className="relative w-48 h-48 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {segments.map((segment, index) => (
            <path
              key={index}
              d={createArc(segment.startAngle, segment.endAngle)}
              className={`${segment.color} hover:opacity-80 transition-opacity cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          {/* Center circle for donut effect */}
          <circle
            cx="50"
            cy="50"
            r="25"
            className="fill-white dark:fill-zinc-900"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-white">
              {total}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Total
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex-1 space-y-3">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded ${segment.color}`} />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {segment.label}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                {segment.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                {segment.percentage.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
