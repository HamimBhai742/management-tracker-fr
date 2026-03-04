# Management Tracker Web

A modern, full-featured project management and tracking application built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This application provides comprehensive tools for managing projects, tasks, teams, and generating insightful reports.

## Features

### 🎨 Modern UI/UX
- Fully responsive design for mobile, tablet, and desktop
- Dark/Light mode support throughout the application
- Smooth animations and transitions
- Glass morphism effects and gradient styling
- Professional component library

### 🔐 Authentication System
- User sign up with email validation
- Secure sign in with remember me functionality
- Social authentication (Google, GitHub)
- Forgot password flow
- Password reset with token validation
- Password strength indicators

### 📊 Dashboard
- **Overview**: Comprehensive dashboard with key metrics, recent projects, activity timeline, and quick actions
- **Projects**: Full project management with filtering, sorting, and multiple view options
- **Calendar**: Interactive calendar with event management and upcoming events sidebar
- **Reports**: Advanced analytics with charts (bar, line, pie) and data visualization
- **Profile**: User profile management with account settings and activity statistics

### 🚀 Key Capabilities
- Project creation and management with status tracking
- Real-time statistics and metrics
- Team collaboration features
- Activity timeline tracking
- Customizable filters and search
- Export and reporting functionality

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **React**: Version 19.2.3
- **TypeScript**: Type-safe development
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [TanStack Query (React Query)](https://tanstack.com/query)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **React Compiler**: Enabled for optimized performance

## Project Structure

```
management/
├── src/
│   ├── app/
│   │   ├── (authLayout)/          # Authentication pages
│   │   │   ├── sign-up/
│   │   │   ├── sign-in/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   ├── (dashboardLayout)/     # Dashboard pages
│   │   │   └── dashboard/
│   │   │       ├── overview/
│   │   │       ├── projects/
│   │   │       ├── calendar/
│   │   │       ├── reports/
│   │   │       └── profile/
│   │   ├── (publicLayout)/        # Public pages
│   │   │   └── page.tsx           # Landing page
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── auth/                  # Authentication components
│   │   ├── calendar/              # Calendar components
│   │   ├── dashboard/             # Dashboard components
│   │   ├── footer/                # Footer component
│   │   ├── navbar/                # Navigation bar
│   │   ├── profile/               # Profile components
│   │   ├── projects/              # Project management components
│   │   ├── provider/              # Context providers
│   │   ├── reports/               # Analytics and charts
│   │   └── sidebar/               # Sidebar navigation
│   ├── hooks/
│   │   └── useAxiosSecure.tsx     # Secure Axios instance hook
│   └── proxy.ts                   # API proxy configuration
├── public/                        # Static assets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd management
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables (if needed):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## API Configuration

The application is configured to proxy API requests to a backend server. The API configuration is in `next.config.ts`:

```typescript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'http://16.170.226.171:5001/api/v1/:path*',
    },
  ]
}
```

All frontend calls to `/api/*` are automatically forwarded to the backend server.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Component Categories

### Authentication Components
- SignUpForm - User registration with validation
- SignInForm - User login with social options
- ForgotPasswordForm - Password recovery
- ResetPasswordForm - Password reset with strength indicator

### Dashboard Components
- DashboardHeader - Search, notifications, user menu
- StatCard - Metric display cards
- RecentProjects - Project list with status
- ActivityTimeline - Recent activity feed
- QuickActions - Common action buttons

### Project Components
- ProjectCard - Individual project display
- ProjectFilters - Search, filter, and sort
- ProjectStats - Project metrics overview
- CreateProjectForm - New project creation

### Calendar Components
- CalendarGrid - Monthly calendar view
- MiniCalendar - Compact calendar widget
- UpcomingEvents - Event list sidebar

### Report Components
- BarChart - Bar chart visualization
- LineChart - Line chart for trends
- PieChart - Pie/donut chart
- ChartCard - Chart container with filters
- ReportFilters - Date range and type filters

### Profile Components
- ProfileHeader - User avatar and info
- ProfileForm - Editable user details
- AccountSettings - Security settings
- ActivityStats - User activity metrics

### Layout Components
- Navbar - Top navigation with dark mode toggle
- Sidebar - Collapsible side navigation
- Footer - Site footer with links

## Features by Route

### Public Routes
- `/` - Landing page with hero, features, testimonials

### Authentication Routes
- `/sign-up` - User registration
- `/sign-in` - User login
- `/forgot-password` - Password recovery
- `/reset-password` - Password reset

### Dashboard Routes
- `/dashboard/overview` - Main dashboard
- `/dashboard/projects` - Project list and management
- `/dashboard/projects/new` - Create new project
- `/dashboard/calendar` - Calendar and events
- `/dashboard/reports` - Analytics and reports
- `/dashboard/profile` - User profile and settings

## Design System

### Colors
- Primary: Blue to Purple gradient
- Background: White (light) / Dark gray (dark)
- Text: Gray-900 (light) / White (dark)
- Accent: Indigo, Blue, Cyan variations

### Typography
- Font: System font stack
- Headings: Bold, gradient text for emphasis
- Body: Regular weight, readable sizes

### Spacing
- Consistent padding and margins
- Responsive breakpoints (sm, md, lg, xl, 2xl)

### Animations
- Fade in/out effects
- Slide transitions
- Staggered animations for lists
- Hover effects on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, email [your-email] or open an issue in the repository.

---

Built with ❤️ using Next.js and React
