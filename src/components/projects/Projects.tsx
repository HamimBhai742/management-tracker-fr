/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { baseUrl } from "@/hooks/useAxiosSecure";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import { token } from "@/hooks/useToken";
import { useState } from "react";

export default function Projects() {
  const queryClient = useQueryClient();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/project/all`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      const results = await res.json();
      return results;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (projectId: string) => {
      const res = await fetch(`${baseUrl}/project/delete/${projectId}`, {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to delete project");
      }
      
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
      setDeleteError(null);
    },
    onError: (error: Error) => {
      setDeleteError(error.message);
      setTimeout(() => setDeleteError(null), 5000);
    },
  });

  const handleDelete = (projectId: string) => {
    deleteMutation.mutate(projectId);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-zinc-600 dark:text-zinc-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Error Message */}
      {deleteError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 animate-fade-in">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-600 dark:text-red-400">{deleteError}</p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {deleteMutation.isSuccess && !deleteError && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-fade-in">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-green-600 dark:text-green-400">Project deleted successfully</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((project: any, index: number) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={`${index * 0.05}s`}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
