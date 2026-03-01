import Link from 'next/link';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-zinc-50 via-purple-50 to-blue-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-blue-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 dark:bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-8 sm:p-10 animate-fade-in-up">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </Link>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-4 border-blue-200 dark:border-blue-800 animate-ping opacity-20" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              Reset Your Password
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Enter your new password below to reset your account password.
            </p>
          </div>

          {/* Form */}
          <ResetPasswordForm />
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Secure password reset with encryption</span>
        </div>
      </div>
    </div>
  );
}
