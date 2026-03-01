import StatCard from '@/components/dashboard/StatCard';
import RecentProjects from '@/components/dashboard/RecentProjects';
import ActivityTimeline from '@/components/dashboard/ActivityTimeline';
import QuickActions from '@/components/dashboard/QuickActions';

export default function OverviewPage() {
  // Mock data - in real app, this would come from API/database
  const stats = [
    {
      title: 'Total Projects',
      value: 48,
      change: '+12%',
      changeType: 'increase' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      delay: '0s',
    },
    {
      title: 'Completed Projects',
      value: 32,
      change: '+8%',
      changeType: 'increase' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: '0.1s',
    },
    {
      title: 'In Progress',
      value: 12,
      change: '+3',
      changeType: 'increase' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      delay: '0.2s',
    },
    {
      title: 'On Hold',
      value: 4,
      change: '-2',
      changeType: 'decrease' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: '0.3s',
    },
    {
      title: 'Total Users',
      value: 156,
      change: '+24',
      changeType: 'increase' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      delay: '0.4s',
    },
    {
      title: 'Project Value',
      value: '$2.4M',
      change: '+18%',
      changeType: 'increase' as const,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: '0.5s',
    },
  ];

  const recentProjects = [
    {
      id: '1',
      name: 'Website Redesign',
      status: 'in-progress' as const,
      progress: 75,
      dueDate: 'Mar 15, 2026',
      team: 8,
    },
    {
      id: '2',
      name: 'Mobile App Development',
      status: 'in-progress' as const,
      progress: 45,
      dueDate: 'Apr 20, 2026',
      team: 12,
    },
    {
      id: '3',
      name: 'Marketing Campaign',
      status: 'completed' as const,
      progress: 100,
      dueDate: 'Feb 28, 2026',
      team: 5,
    },
    {
      id: '4',
      name: 'Database Migration',
      status: 'on-hold' as const,
      progress: 30,
      dueDate: 'May 10, 2026',
      team: 6,
    },
  ];

  const activities = [
    {
      id: '1',
      type: 'task' as const,
      title: 'Task Completed',
      description: 'Homepage design mockup approved',
      time: '2 hours ago',
      user: 'Sarah Johnson',
    },
    {
      id: '2',
      type: 'project' as const,
      title: 'New Project Created',
      description: 'E-commerce Platform Development',
      time: '5 hours ago',
      user: 'Michael Chen',
    },
    {
      id: '3',
      type: 'comment' as const,
      title: 'New Comment',
      description: 'Added feedback on the API documentation',
      time: '1 day ago',
      user: 'Emily Rodriguez',
    },
    {
      id: '4',
      type: 'user' as const,
      title: 'Team Member Added',
      description: 'John Doe joined the development team',
      time: '2 days ago',
      user: 'Admin',
    },
    {
      id: '5',
      type: 'task' as const,
      title: 'Milestone Reached',
      description: 'Phase 1 of mobile app completed',
      time: '3 days ago',
      user: 'David Kim',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Dashboard Overview
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Welcome back! Here's what's happening with your projects today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Projects - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RecentProjects projects={recentProjects} />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivityTimeline activities={activities} />
          </div>

          {/* Team Overview Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Team Overview
            </h2>

            <div className="space-y-4">
              {/* Active Members */}
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Active Now
                  </span>
                  <span className="text-2xl font-bold text-green-700 dark:text-green-400">
                    24
                  </span>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white dark:border-zinc-900"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-green-200 dark:bg-green-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">
                      +19
                    </span>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="space-y-3">
                {[
                  { name: 'Development', count: 45, color: 'blue' },
                  { name: 'Design', count: 28, color: 'purple' },
                  { name: 'Marketing', count: 32, color: 'pink' },
                  { name: 'Sales', count: 51, color: 'orange' },
                ].map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${dept.color}-500`} />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">
                        {dept.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">
                      {dept.count}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                View All Team Members
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
