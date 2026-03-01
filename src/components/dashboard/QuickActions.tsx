'use client';

export default function QuickActions() {
  const actions = [
    {
      name: 'New Project',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      ),
      color: 'from-blue-500 to-blue-600',
      href: '/dashboard/projects/new',
    },
    {
      name: 'Add Task',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      ),
      color: 'from-green-500 to-green-600',
      href: '/dashboard/tasks/new',
    },
    {
      name: 'Invite Team',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      ),
      color: 'from-purple-500 to-purple-600',
      href: '/dashboard/team/invite',
    },
    {
      name: 'Reports',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      color: 'from-orange-500 to-orange-600',
      href: '/dashboard/reports',
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <a
            key={action.name}
            href={action.href}
            className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-transparent hover:shadow-lg transition-all duration-200"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {action.icon}
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
              {action.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
