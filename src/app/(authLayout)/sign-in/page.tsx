import Link from 'next/link';
import SignInForm from '@/components/auth/SignInForm';


export default function SignInPage() {
    return (
            <div className="min-h-screen flex">
                {/* Left Side - Visual */}
                <div className="hidden lg:flex lg:flex-1 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600">
                    {/* Animated background elements */}
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
                        <div className="max-w-lg animate-fade-in-up">
                            {/* Dashboard Preview Illustration */}
                            <div className="mb-12">
                                <div className="relative">
                                    {/* Main dashboard card */}
                                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl animate-float">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="h-3 bg-white/40 rounded-full w-24 mb-1" />
                                                    <div className="h-2 bg-white/20 rounded-full w-16" />
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 rounded-full bg-white/20" />
                                                <div className="w-8 h-8 rounded-full bg-white/20" />
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-3 gap-3 mb-6">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="bg-white/10 rounded-xl p-3">
                                                    <div className="h-2 bg-white/30 rounded-full w-12 mb-2" />
                                                    <div className="h-4 bg-white/40 rounded-full w-16" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Chart area */}
                                        <div className="bg-white/10 rounded-xl p-4 mb-4">
                                            <div className="flex items-end justify-between h-24 gap-2">
                                                {[40, 70, 45, 80, 60, 90, 55].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-white/30 rounded-t-lg transition-all duration-500"
                                                        style={{ height: `${height}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Task list */}
                                        <div className="space-y-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                                                    <div className="w-4 h-4 rounded bg-white/30" />
                                                    <div className="flex-1">
                                                        <div className="h-2 bg-white/30 rounded-full w-full mb-1" />
                                                        <div className="h-2 bg-white/20 rounded-full w-2/3" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Floating notification */}
                                    <div className="absolute -top-6 -right-6 bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl animate-float-delayed max-w-[200px]">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="h-2 bg-white/40 rounded-full w-full mb-2" />
                                                <div className="h-2 bg-white/30 rounded-full w-3/4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating user avatars */}
                                    <div className="absolute -bottom-6 -left-6 flex -space-x-2 animate-float">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-lg border-2 border-white/40"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-4xl font-bold mb-4">
                                Welcome back!
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Sign in to access your dashboard and manage your projects efficiently.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { value: '10K+', label: 'Users' },
                                    { value: '500K+', label: 'Tasks' },
                                    { value: '99.9%', label: 'Uptime' },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center animate-fade-in-up"
                                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                    >
                                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-sm text-white/80">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-black">
                    <div className="w-full max-w-md">
                        {/* Logo */}
                        <div className="text-center mb-8 animate-fade-in">
                            <Link href="/" className="inline-flex items-center gap-2 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                                    <svg
                                        className="w-7 h-7 text-white"
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

                        {/* Header */}
                        <div className="text-center mb-8 animate-fade-in-up">
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                                Sign in to your account
                            </h1>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Welcome back! Please enter your details.
                            </p>
                        </div>

                        {/* Form */}
                        <SignInForm />

                        {/* Sign Up Link */}
                        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            Don't have an account?{' '}
                            <Link
                                href="/sign-up"
                                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            >
                                Sign up for free
                            </Link>
                        </p>

                        {/* Trust indicators */}
                        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                            <div className="flex items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-500">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure Login</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Encrypted</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>GDPR Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
