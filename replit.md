# Brooklyn General Maintenance - HVAC & Maintenance Services

## Overview

Brooklyn General Maintenance is a comprehensive HVAC and general maintenance service provider operating in the UAE (Abu Dhabi, Dubai, Sharjah). The application is a modern React-based website offering AC cleaning, duct cleaning, pool maintenance, water tank cleaning, and other professional maintenance services. It features an interactive product shop, booking system, service portfolio, and customer review sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system featuring HSL color variables
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Routing**: React Router DOM with animated page transitions using Framer Motion
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Component Structure
- **Layout Components**: Header with responsive navigation, Footer with contact info and social links
- **Feature Components**: Hero section, service listings, product shop, customer reviews, FAQ accordion
- **Interactive Elements**: WhatsApp floating button, booking form wizard, quick quote calculator
- **UI Components**: Reusable components including cards, buttons, dialogs, tooltips, progress bars

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: tsx for TypeScript execution, esbuild for production builds
- **Middleware**: JSON/URL-encoded parsing, request/response logging, error handling
- **Architecture Pattern**: Service-based with storage interface abstraction

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema updates
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication & Authorization
- **Current State**: Basic user schema defined (username/password)
- **Storage Interface**: Prepared for user management with CRUD operations
- **Session Management**: connect-pg-simple configured for PostgreSQL session storage

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Session Store**: PostgreSQL-backed session management

### UI & Styling
- **Radix UI**: Complete primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Animation library for page transitions and interactions
- **Lucide React**: Modern icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with React plugin and runtime error overlay
- **TypeScript**: Static type checking across frontend, backend, and shared code
- **ESLint/Prettier**: Code quality and formatting tools
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Communication & Maps
- **WhatsApp Integration**: Direct messaging links for customer communication
- **Custom Map Component**: Static map implementation with interactive elements
- **Email Integration**: mailto links for contact functionality

### Additional Services
- **Date Handling**: date-fns for robust date manipulation
- **Validation**: Zod for runtime type validation and schema generation
- **Utilities**: Class variance authority for component variants, clsx for conditional classes