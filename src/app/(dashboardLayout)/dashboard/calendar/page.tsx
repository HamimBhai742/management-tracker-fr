import CalendarGrid from '@/components/calendar/CalendarGrid';
import UpcomingEvents from '@/components/calendar/UpcomingEvents';
import MiniCalendar from '@/components/calendar/MiniCalendar';

export default function CalendarPage() {
  // Mock data - in real app, this would come from API/database
  const events = [
    {
      id: '1',
      title: 'Project Kickoff Meeting',
      date: '2026-03-05',
      time: '10:00 AM',
      type: 'meeting' as const,
      description: 'Initial meeting with the client to discuss project requirements',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    },
    {
      id: '2',
      title: 'Website Redesign Deadline',
      date: '2026-03-15',
      type: 'project' as const,
      description: 'Final delivery of the redesigned website',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    },
    {
      id: '3',
      title: 'Complete API Documentation',
      date: '2026-03-08',
      time: '5:00 PM',
      type: 'task' as const,
      description: 'Finish writing comprehensive API documentation',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    },
    {
      id: '4',
      title: 'Team Standup',
      date: '2026-03-01',
      time: '9:00 AM',
      type: 'meeting' as const,
      description: 'Daily team sync-up meeting',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    },
    {
      id: '5',
      title: 'Code Review Session',
      date: '2026-03-10',
      time: '2:00 PM',
      type: 'meeting' as const,
      description: 'Review pull requests and discuss code quality',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    },
    {
      id: '6',
      title: 'Deploy to Production',
      date: '2026-03-20',
      time: '11:00 AM',
      type: 'task' as const,
      description: 'Deploy latest features to production environment',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    },
    {
      id: '7',
      title: 'Client Presentation',
      date: '2026-03-12',
      time: '3:00 PM',
      type: 'meeting' as const,
      description: 'Present progress and demo to the client',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    },
    {
      id: '8',
      title: 'Mobile App Launch',
      date: '2026-03-25',
      type: 'project' as const,
      description: 'Official launch of the mobile application',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    },
    {
      id: '9',
      title: 'Security Audit',
      date: '2026-03-18',
      time: '1:00 PM',
      type: 'task' as const,
      description: 'Conduct comprehensive security audit',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    },
    {
      id: '10',
      title: 'Sprint Planning',
      date: '2026-03-03',
      time: '10:00 AM',
      type: 'meeting' as const,
      description: 'Plan tasks and goals for the upcoming sprint',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    },
  ];

  // Get upcoming events (next 7 days)
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Calendar
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your schedule and upcoming events
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: 'Total Events',
              value: events.length,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              ),
              color: 'from-blue-500 to-blue-600',
            },
            {
              label: 'Meetings',
              value: events.filter(e => e.type === 'meeting').length,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              ),
              color: 'from-purple-500 to-purple-600',
            },
            {
              label: 'Tasks',
              value: events.filter(e => e.type === 'task').length,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              ),
              color: 'from-green-500 to-green-600',
            },
            {
              label: 'Projects',
              value: events.filter(e => e.type === 'project').length,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              ),
              color: 'from-orange-500 to-orange-600',
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar Grid - Takes 2 columns */}
          <div className="lg:col-span-2">
            <CalendarGrid events={events} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <UpcomingEvents events={upcomingEvents} />
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
