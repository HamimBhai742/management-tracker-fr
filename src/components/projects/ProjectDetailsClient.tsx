"use client";

import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/hooks/useAxiosSecure";
import { token } from "@/hooks/useToken";

interface ProjectDetailsProps {
  id: string;
}

const statusConfig = {
  PLANNING: { label: "Planning", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400", icon: "📋" },
  IN_PROGRESS: { label: "In Progress", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400", icon: "🚀" },
  ON_HOLD: { label: "On Hold", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400", icon: "⏸️" },
  COMPLETED: { label: "Completed", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400", icon: "✅" },
  CANCELLED: { label: "Cancelled", color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400", icon: "❌" },
} as const;

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export default function ProjectDetailsClient({ id }: ProjectDetailsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/project/${id}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) throw new Error("Project not found");
      const result = await res.json();
      return result.data;
    },
  });

  if (isLoading) return <div className="py-12 text-center">Loading...</div>;
  if (error || !data) return <div className="py-12 text-center text-red-500">Project not found.</div>;

  const status = statusConfig[data.status as keyof typeof statusConfig];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Title & Status */}
      <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1 truncate">{data.title}</h1>
          <p className="text-zinc-600 dark:text-zinc-400">{data.clientName}</p>
        </div>
        <span className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${status.color}`}>{status.icon} {status.label}</span>
      </div>

      {/* Description */}
      {data.description && (
        <div className="mb-6 animate-fade-in-up">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Description</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.description}</p>
        </div>
      )}

      {/* Timeline & Value */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Start Date</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-white">{formatDate(data.startDate)}</p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">End Date</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-white">{data.endDate ? formatDate(data.endDate) : 'Not set'}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Project Value</p>
          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{formatCurrency(data.value)}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-6 mb-8 animate-fade-in-up">
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
          {data.tasksCount || 0} tasks
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
          {data.notesCount || 0} notes
        </div>
      </div>
    </div>
  );
}
