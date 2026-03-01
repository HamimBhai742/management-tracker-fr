import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectStats from '@/components/projects/ProjectStats';

export default function ProjectsPage() {
  // Mock data - in real app, this would come from API/database
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform Redesign',
      description: 'Complete overhaul of the existing e-commerce platform with modern UI/UX, improved performance, and mobile-first approach.',
      startDate: '2026-01-15T00:00:00Z',
      endDate: '2026-06-30T00:00:00Z',
      value: 125000,
      clientName: 'TechCorp Inc.',
      status: 'IN_PROGRESS' as const,
      tasksCount: 24,
      notesCount: 12,
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'Native iOS and Android app development for fitness tracking with social features and gamification.',
      startDate: '2026-02-01T00:00:00Z',
      endDate: '2026-08-15T00:00:00Z',
      value: 180000,
      clientName: 'FitLife Solutions',
      status: 'IN_PROGRESS' as const,
      tasksCount: 36,
      notesCount: 18,
    },
    {
      id: '3',
      title: 'Marketing Campaign Q1',
      description: 'Comprehensive digital marketing campaign including SEO, social media, and content marketing.',
      startDate: '2026-01-01T00:00:00Z',
      endDate: '2026-03-31T00:00:00Z',
      value: 45000,
      clientName: 'GrowthHub Marketing',
      status: 'COMPLETED' as const,
      tasksCount: 15,
      notesCount: 8,
    },
    {
      id: '4',
      title: 'Database Migration',
      description: 'Migrate legacy database to modern cloud infrastructure with zero downtime.',
      startDate: '2026-03-01T00:00:00Z',
      endDate: null,
      value: 95000,
      clientName: 'DataFlow Systems',
      status: 'ON_HOLD' as const,
      tasksCount: 18,
      notesCount: 22,
    },
    {
      id: '5',
      title: 'AI Chatbot Integration',
      description: 'Implement AI-powered chatbot for customer support with natural language processing.',
      startDate: '2026-02-15T00:00:00Z',
      endDate: '2026-05-30T00:00:00Z',
      value: 75000,
      clientName: 'SupportAI Ltd.',
      status: 'PLANNING' as const,
      tasksCount: 12,
      notesCount: 6,
    },
    {
      id: '6',
      title: 'Cloud Infrastructure Setup',
      description: 'Design and implement scalable cloud infrastructure with auto-scaling and monitoring.',
      startDate: '2025-12-01T00:00:00Z',
      endDate: '2026-02-28T00:00:00Z',
      value: 110000,
      clientName: 'CloudTech Enterprises',
      status: 'COMPLETED' as const,
      tasksCount: 20,
      notesCount: 15,
    },
    {
      id: '7',
      title: 'Security Audit & Compliance',
      description: 'Comprehensive security audit and implementation of compliance measures for GDPR and SOC 2.',
      startDate: '2026-01-20T00:00:00Z',
      endDate: '2026-04-20T00:00:00Z',
      value: 65000,
      clientName: 'SecureNet Corp.',
      status: 'IN_PROGRESS' as const,
      tasksCount: 28,
      notesCount: 34,
    },
    {
      id: '8',
      title: 'API Development',
      description: 'RESTful API development with comprehensive documentation and testing suite.',
      startDate: '2026-02-10T00:00:00Z',
      endDate: '2026-05-10T00:00:00Z',
      value: 55000,
      clientName: 'DevTools Inc.',
      status: 'IN_PROGRESS' as const,
      tasksCount: 16,
      notesCount: 9,
    },
    {
      id: '9',
      title: 'Legacy System Modernization',
      description: 'Modernize legacy monolithic application to microservices architecture.',
      startDate: '2025-11-01T00:00:00Z',
      endDate: '2026-01-15T00:00:00Z',
      value: 150000,
      clientName: 'Enterprise Solutions',
      status: 'CANCELLED' as const,
      tasksCount: 42,
      notesCount: 28,
    },
  ];

  // Calculate stats
  const stats = {
    total: projects.length,
    planning: projects.filter(p => p.status === 'PLANNING').length,
    inProgress: projects.filter(p => p.status === 'IN_PROGRESS').length,
    onHold: projects.filter(p => p.status === 'ON_HOLD').length,
    completed: projects.filter(p => p.status === 'COMPLETED').length,
    totalValue: projects.reduce((sum, p) => sum + p.value, 0),
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              Projects
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Manage and track all your projects in one place
            </p>
          </div>
          <Link
            href="/dashboard/projects/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </Link>
        </div>

        {/* Stats */}
        <ProjectStats stats={stats} />

        {/* Filters */}
        <ProjectFilters />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={`${index * 0.05}s`}
            />
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <svg className="w-12 h-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              No projects yet
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Get started by creating your first project
            </p>
            <Link
              href="/dashboard/projects/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
