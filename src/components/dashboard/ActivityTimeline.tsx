'use client';

interface Activity {
  id: string;
  type: 'project' | 'task' | 'comment' | 'user';
  title: string;
  description: string;
  time: string;
  user: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const activityIcons = {
    project: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
    task: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
    comment: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    ),
    user: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  };

  const activityColors = {
    project: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    task: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    comment: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    user: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-4">
            {/* Icon */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${activityColors[activity.type]} flex items-center justify-center`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {activityIcons[activity.type]}
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                  {activity.title}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-500 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                {activity.description}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                by {activity.user}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
}
