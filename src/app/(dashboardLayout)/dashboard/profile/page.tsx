import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileForm from '@/components/profile/ProfileForm';
import AccountSettings from '@/components/profile/AccountSettings';
import ActivityStats from '@/components/profile/ActivityStats';

export default function ProfilePage() {
  // Mock data - in real app, this would come from API/database/session
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'USER' as const,
    status: 'ACTIVE' as const,
    isEmailVerified: true,
    createdAt: '2025-01-15T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z',
  };

  const stats = {
    projectsCount: 12,
    notesCount: 45,
    expensesCount: 28,
    learningLogsCount: 16,
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Profile Settings
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Header */}
        <ProfileHeader user={user} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Profile Form & Settings */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileForm user={user} />
            <AccountSettings isEmailVerified={user.isEmailVerified} />
            
            {/* Danger Zone */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-red-200 dark:border-red-900 p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Danger Zone
              </h2>
              
              <div className="space-y-4">
                {/* Deactivate Account */}
                <div className="p-4 rounded-xl border border-red-200 dark:border-red-900">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                        Deactivate Account
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Temporarily disable your account. You can reactivate it anytime.
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors whitespace-nowrap">
                      Deactivate
                    </button>
                  </div>
                </div>

                {/* Delete Account */}
                <div className="p-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-red-600 dark:text-red-400 mb-1">
                        Delete Account
                      </h3>
                      <p className="text-sm text-red-700 dark:text-red-400">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors whitespace-nowrap">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Activity Stats & Info */}
          <div className="space-y-6">
            <ActivityStats stats={stats} />

            {/* Account Info */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Account Information
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-600 dark:text-zinc-400">User ID</span>
                  <span className="font-mono text-zinc-900 dark:text-white">{user.id}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-600 dark:text-zinc-400">Account Type</span>
                  <span className="font-medium text-zinc-900 dark:text-white">{user.role}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-600 dark:text-zinc-400">Status</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{user.status}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-600 dark:text-zinc-400">Last Updated</span>
                  <span className="text-zinc-900 dark:text-white">
                    {new Date(user.updatedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <a
                  href="/dashboard/settings"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">App Settings</span>
                </a>
                <a
                  href="/dashboard/notifications"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">Notifications</span>
                </a>
                <a
                  href="/help"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">Help & Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
