'use client';

interface ProjectStatsProps {
  stats: {
    total: number;
    planning: number;
    inProgress: number;
    onHold: number;
    completed: number;
    totalValue: number;
  };
}

export default function ProjectStats({ stats }: ProjectStatsProps) {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1 
    }).format(value);

  const statCards = [
    {
      label: 'Total Projects',
      value: stats.total,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Total Value',
      value: formatCurrency(stats.totalValue),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {stat.icon}
            </svg>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
