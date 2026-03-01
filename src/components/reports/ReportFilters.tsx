'use client';

import { useState } from 'react';

interface ReportFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export default function ReportFilters({ onFilterChange }: ReportFiltersProps) {
  const [filters, setFilters] = useState({
    dateRange: '30days',
    reportType: 'all',
    project: 'all',
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 mb-6 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Date Range */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Date Range
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => handleChange('dateRange', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        {/* Report Type */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Report Type
          </label>
          <select
            value={filters.reportType}
            onChange={(e) => handleChange('reportType', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="all">All Reports</option>
            <option value="projects">Projects</option>
            <option value="tasks">Tasks</option>
            <option value="team">Team Performance</option>
            <option value="financial">Financial</option>
          </select>
        </div>

        {/* Project Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Project
          </label>
          <select
            value={filters.project}
            onChange={(e) => handleChange('project', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="all">All Projects</option>
            <option value="project1">Website Redesign</option>
            <option value="project2">Mobile App</option>
            <option value="project3">Marketing Campaign</option>
          </select>
        </div>

        {/* Export Button */}
        <div className="flex items-end">
          <button className="w-full lg:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
