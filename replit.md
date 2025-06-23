# Replit.md - Link in Bio Application

## Overview

This is a full-stack web application built as a "Link in Bio" platform, similar to Linktree. The application allows users to create a personalized landing page with their profile information and social media links. It's built using modern web technologies with a React frontend and Express.js backend, configured for deployment on Replit.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL 16 (configured in .replit)
- **Session Storage**: In-memory storage with interface for database migration
- **API Design**: RESTful API structure with `/api` prefix

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development Server**: Vite dev server proxied through Express
- **Hot Reload**: Vite HMR with Replit-specific error overlay
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Validation**: Zod schemas for type-safe data validation
- **Migration Strategy**: Drizzle Kit for database migrations

### Storage Layer
- **Interface**: `IStorage` in `server/storage.ts` defines CRUD operations
- **Implementation**: `MemStorage` class for in-memory data storage
- **Future Migration**: Interface allows easy transition to database-backed storage

### UI Component System
- **Base**: shadcn/ui components with Radix UI primitives
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family from Google Fonts
- **Icons**: Lucide React icon library
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### API Client
- **HTTP Client**: Custom fetch wrapper with error handling
- **Authentication**: Cookie-based sessions with credentials included
- **Error Handling**: Centralized error handling with status code parsing
- **Query Management**: TanStack Query for caching and synchronization

## Data Flow

1. **User Request**: Client makes request to Express server
2. **Static Assets**: Vite serves static assets in development, built assets in production
3. **API Routes**: Express routes prefixed with `/api` handle business logic
4. **Storage Layer**: CRUD operations through storage interface
5. **Response**: JSON responses with consistent error handling
6. **Client State**: TanStack Query manages server state and caching

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation
- **react-hook-form**: Form state management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Port**: 5000 (mapped to external port 80)
- **Mode**: Vite dev server with Express middleware
- **Hot Reload**: Enabled with Replit integration

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code to ESM format
- **Command**: `npm run build` followed by `npm run start`
- **Static Serving**: Express serves built frontend assets

### Replit Configuration
- **Autoscale Deployment**: Configured for automatic scaling
- **Environment**: PostgreSQL database provisioned automatically
- **Workflows**: Parallel execution with port waiting
- **Hidden Files**: Node modules, dist, and config files excluded

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```