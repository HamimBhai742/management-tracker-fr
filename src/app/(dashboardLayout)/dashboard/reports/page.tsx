import ReportFilters from '@/components/reports/ReportFilters';
import ChartCard from '@/components/reports/ChartCard';
import BarChart from '@/components/reports/BarChart';
import LineChart from '@/components/reports/LineChart';
import PieChart from '@/components/reports/PieChart';

export default function ReportsPage() {
  // Mock data for charts
  const projectStatusData = [
    { label: 'Completed', value: 32, color: 'bg-green-500' },
    { label: 'In Progress', value: 12, color: 'bg-blue-500' },
    { label: 'On Hold', value: 4, color: 'bg-yellow-500' },
    { label: 'Planning', value: 8, color: 'bg-purple-500' },
  ];

  const taskCompletionData = [
    { label: 'Week 1', value: 45 },
    { label: 'Week 2', value: 52 },
    { label: 'Week 3', value: 48 },
    { label: 'Week 4', value: 65 },
    { label: 'Week 5', value: 58 },
    { label: 'Week 6', value: 72 },
  ];

  const teamPerformanceData = [
    { label: 'Development', value: 45, color: 'bg-blue-500' },
    { label: 'Design', value: 28, color: 'bg-purple-500' },
    { label: 'Marketing', value: 32, color: 'bg-pink-500' },
    { label: 'Sales', value: 51, color: 'bg-orange-500' },
  ];

  const projectDistributionData = [
    { label: 'Web Development', value: 15, color: 'fill-blue-500' },
    { label: 'Mobile Apps', value: 12, color: 'fill-purple-500' },
    { label: 'Marketing', value: 8, color: 'fill-pink-500' },
    { label: 'Design', value: 10, color: 'fill-orange-500' },
    { label: 'Other', value: 5, color: 'fill-green-500' },
  ];

  const stats = [
    {
      label: 'Total Revenue',
      value: '$2.4M',
      change: '+18%',
      changeType: 'increase' as const,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Completed Projects',
      value: '32',
      change: '+8',
      changeType: 'increase' as const,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Active Tasks',
      value: '156',
      change: '+24',
      changeType: 'increase' as const,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      ),
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Team Members',
      value: '48',
      change: '+6',
      changeType: 'increase' as const,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Reports & Analytics
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Track performance and analyze your data
          </p>
        </div>

        {/* Filters */}
        <ReportFilters />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {stat.icon}
                  </svg>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  stat.changeType === 'increase'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Project Status */}
          <ChartCard
            title="Project Status"
            subtitle="Overview of all projects by status"
            delay="0.1s"
          >
            <BarChart data={projectStatusData} />
          </ChartCard>

          {/* Task Completion Trend */}
          <ChartCard
            title="Task Completion Trend"
            subtitle="Weekly task completion over time"
            delay="0.2s"
          >
            <LineChart data={taskCompletionData} />
          </ChartCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Team Performance */}
          <ChartCard
            title="Team Performance"
            subtitle="Tasks completed by department"
            delay="0.3s"
          >
            <BarChart data={teamPerformanceData} />
          </ChartCard>

          {/* Project Distribution */}
          <ChartCard
            title="Project Distribution"
            subtitle="Projects by category"
            delay="0.4s"
          >
            <PieChart data={projectDistributionData} />
          </ChartCard>
        </div>

        {/* Summary Table */}
        <div className="mt-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
            Recent Activity Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Project
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Progress
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Team
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Website Redesign', status: 'In Progress', progress: 75, team: 8, value: '$125,000' },
                  { name: 'Mobile App', status: 'In Progress', progress: 45, team: 12, value: '$180,000' },
                  { name: 'Marketing Campaign', status: 'Completed', progress: 100, team: 5, value: '$45,000' },
                  { name: 'Database Migration', status: 'On Hold', progress: 30, team: 6, value: '$95,000' },
                  { name: 'API Development', status: 'In Progress', progress: 60, team: 4, value: '$55,000' },
                ].map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {project.name}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 w-12 text-right">
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {project.team} members
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        {project.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
