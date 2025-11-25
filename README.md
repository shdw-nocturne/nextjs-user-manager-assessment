# Setup Guide

## Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd nextjs-user-manager-assessment

# Install dependencies
npm install

# Run development server
npm run dev
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Tech Stack

### Core Framework

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Icon library

### Form Management

- **Formik** - Form state management
- **Yup** - Schema validation

### Other Libraries

- **sonner** - Toast notifications
- **next-themes** - Dark mode support
- **class-variance-authority** - Component variants
- **clsx** & **tailwind-merge** - Conditional styling

## Development Notes

- Uses App Router (Next.js 13+)
- Server Components by default
- Client Components marked with `"use client"`
- Server Actions marked with `"use server"`
