'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateProjectForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    value: '',
    clientName: '',
    status: 'PLANNING',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const statuses = [
    { value: 'PLANNING', label: 'Planning', icon: '📋' },
    { value: 'IN_PROGRESS', label: 'In Progress', icon: '🚀' },
    { value: 'ON_HOLD', label: 'On Hold', icon: '⏸️' },
    { value: 'COMPLETED', label: 'Completed', icon: '✅' },
    { value: 'CANCELLED', label: 'Cancelled', icon: '❌' },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Project title is required';
    }

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client name is required';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }

    if (formData.endDate && formData.startDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end < start) {
        newErrors.endDate = 'End date must be after start date';
      }
    }

    if (formData.value && parseFloat(formData.value) < 0) {
      newErrors.value = 'Value must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    console.log('Project created:', formData);
    
    // Redirect to projects page
    router.push('/dashboard/projects');
  };

  const handleCancel = () => {
    router.push('/dashboard/projects');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          Basic Information
        </h2>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.title
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
              } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:outline-none transition-all`}
              placeholder="Enter project title"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1 animate-fade-in">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
              placeholder="Describe your project..."
            />
          </div>

          {/* Client Name */}
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Client Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.clientName
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
                } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:outline-none transition-all`}
                placeholder="Enter client name"
              />
            </div>
            {errors.clientName && (
              <p className="text-sm text-red-500 mt-1 animate-fade-in">{errors.clientName}</p>
            )}
          </div>
        </div>
      </div>

      {/* Timeline & Budget Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          Timeline & Budget
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.startDate
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
              } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:outline-none transition-all`}
            />
            {errors.startDate && (
              <p className="text-sm text-red-500 mt-1 animate-fade-in">{errors.startDate}</p>
            )}
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              End Date (Optional)
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.endDate
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
              } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:outline-none transition-all`}
            />
            {errors.endDate && (
              <p className="text-sm text-red-500 mt-1 animate-fade-in">{errors.endDate}</p>
            )}
          </div>

          {/* Project Value */}
          <div className="md:col-span-2">
            <label htmlFor="value" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Project Value (USD)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-zinc-500 dark:text-zinc-400">$</span>
              </div>
              <input
                type="number"
                id="value"
                name="value"
                value={formData.value}
                onChange={handleChange}
                min="0"
                step="0.01"
                className={`w-full pl-8 pr-4 py-3 rounded-xl border ${
                  errors.value
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
                } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:outline-none transition-all`}
                placeholder="0.00"
              />
            </div>
            {errors.value && (
              <p className="text-sm text-red-500 mt-1 animate-fade-in">{errors.value}</p>
            )}
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          Project Status
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {statuses.map((status) => (
            <label
              key={status.value}
              className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.status === status.value
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
              }`}
            >
              <input
                type="radio"
                name="status"
                value={status.value}
                checked={formData.status === status.value}
                onChange={handleChange}
                className="sr-only"
              />
              <span className="text-2xl mb-2">{status.icon}</span>
              <span className={`text-sm font-medium text-center ${
                formData.status === status.value
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300'
              }`}>
                {status.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-700 rounded-xl font-semibold hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating Project...
            </span>
          ) : (
            'Create Project'
          )}
        </button>
      </div>
    </form>
  );
}
