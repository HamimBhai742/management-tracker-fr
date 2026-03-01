'use client';

import { useState } from 'react';

interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
    status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
    isEmailVerified: boolean;
    createdAt: string;
  };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);

  const roleConfig = {
    USER: { label: 'User', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
    ADMIN: { label: 'Admin', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
  };

  const statusConfig = {
    ACTIVE: { label: 'Active', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', icon: '✓' },
    INACTIVE: { label: 'Inactive', color: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400', icon: '○' },
    SUSPENDED: { label: 'Suspended', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400', icon: '⊘' },
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-fade-in-up">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 mb-4">
          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold border-4 border-white dark:border-zinc-900 shadow-xl">
              {getInitials(user.name)}
            </div>
            <button
              onClick={() => setIsEditingAvatar(true)}
              className="absolute bottom-2 right-2 w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {user.name}
              </h1>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${roleConfig[user.role].color}`}>
                {roleConfig[user.role].label}
              </span>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${statusConfig[user.status].color}`}>
                {statusConfig[user.status].icon} {statusConfig[user.status].label}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {user.email}
                {user.isEmailVerified && (
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Joined {formatDate(user.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
