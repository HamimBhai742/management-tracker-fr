import Sidebar from '@/components/sidebar/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Sidebar />
      <div className="flex-1 lg:ml-72 transition-all duration-300">
        <DashboardHeader />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
