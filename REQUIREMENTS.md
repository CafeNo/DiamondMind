# DiamondMind Project - Requirements & Dependencies

## Project Overview
DiamondMind is a full-stack web application featuring a React frontend with TypeScript and a Go backend. The project showcases Aurelia's magical technology company with interactive animations and modern UI components.

## Technology Stack

### Frontend
- **Framework**: React 18.3.1
- **Language**: TypeScript 5.4.0
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.4
- **Animations**: Framer Motion 12.23.0, GSAP 3.12.5
- **Smooth Scrolling**: Lenis 1.1.14
- **Icons**: Heroicons React 2.0.18

### Backend
- **Language**: Go 1.21
- **Router**: Chi v5.0.10
- **Architecture**: Clean Architecture with layers (entity, usecase, delivery)

## Installation Requirements

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Go**: Version 1.21 or higher

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB, Recommended 8GB
- **Storage**: At least 2GB free space for dependencies

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd DiamondMind
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Setup
```bash
cd backend
go mod tidy
go run cmd/server/main.go
```

## Detailed Dependencies

### Frontend Dependencies (`frontend/package.json`)

#### Production Dependencies
```json
{
  "@heroicons/react": "^2.0.18",     // Icon library
  "framer-motion": "^12.23.0",       // Animation library
  "gsap": "^3.12.5",                 // Advanced animations
  "lenis": "^1.1.14",                // Smooth scrolling
  "react": "^18.3.1",                // UI framework
  "react-dom": "^18.3.1"             // DOM rendering
}
```

#### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.0.4",  // Vite React plugin
  "autoprefixer": "^10.4.19",        // CSS autoprefixer
  "postcss": "^8.4.32",              // CSS processing
  "tailwindcss": "^3.4.4",           // Utility-first CSS
  "typescript": "^5.4.0",            // TypeScript compiler
  "vite": "^5.4.19"                  // Build tool
}
```

### Backend Dependencies (`backend/go.mod`)

```go
module companysite

go 1.21

require github.com/go-chi/chi/v5 v5.0.10
```

## 🔧 Development Scripts

### Frontend Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Backend Scripts
```bash
# Run development server
go run cmd/server/main.go

# Build binary
go build -o bin/server cmd/server/main.go

# Run tests
go test ./...

# Update dependencies
go mod tidy
```

## 🌐 Environment Configuration

### Frontend Environment Variables
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=DiamondMind
```

### Backend Environment Variables
Create a `.env` file in the `backend` directory:
```env
PORT=8080
CORS_ORIGIN=http://localhost:5173
```

## Project Structure

```
DiamondMind/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
├── backend/                 # Go backend
│   ├── cmd/
│   │   └── server/         # Server entry point
│   ├── internal/
│   │   ├── entity/         # Domain entities
│   │   ├── usecase/        # Business logic
│   │   └── delivery/       # HTTP handlers
│   ├── go.mod              # Go module definition
│   └── go.sum              # Go dependencies
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
└── REQUIREMENTS.md         # This file
```

## Component Overview

### Key Frontend Components
- **Header**: Hero section with parallax effects
- **Navbar**: Sticky navigation with smooth scrolling
- **About**: Company information section
- **Team**: Team member showcase
- **TechStack**: Technology display with animations
- **Contact**: Contact form and information
- **Footer**: Site footer with links and policies

### Backend Structure
- **Entity Layer**: Domain models (Company)
- **Usecase Layer**: Business logic (CompanyUsecase)
- **Delivery Layer**: HTTP handlers (CompanyHandler)

## Design Features

### Animations & Effects
- **Parallax scrolling** using GSAP ScrollTrigger
- **Smooth scrolling** with Lenis
- **Interactive animations** with Framer Motion
- **Responsive design** with Tailwind CSS
- **Custom color scheme** (Shirin Blue, Purple, Pink)

### UI Components
- Interactive buttons with hover effects
- Modal dialogs for policies
- Responsive grid layouts
- Gradient backgrounds
- Custom section dividers

## Security Considerations

### Frontend Security
- Environment variables for sensitive data
- CORS configuration for API calls
- Input validation and sanitization

### Backend Security
- CORS middleware configuration
- Input validation
- Secure HTTP headers

## 📊 Performance Optimizations

### Frontend
- **Vite** for fast development and optimized builds
- **Code splitting** for better loading performance
- **Image optimization** for faster loading
- **CSS purging** with Tailwind CSS

### Backend
- **Chi router** for lightweight HTTP routing
- **Clean architecture** for maintainable code
- **Efficient JSON handling**

## Testing

### Frontend Testing
```bash
# Add testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm run test
```

### Backend Testing
```bash
# Run tests
go test ./...

# Run tests with coverage
go test -cover ./...
```

## Browser Support

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Support
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

## Deployment

### Frontend Deployment
```bash
# Build for production
npm run build

# Files will be in dist/ directory
```

### Backend Deployment
```bash
# Build binary
go build -o bin/server cmd/server/main.go

# Run binary
./bin/server
```

## Support & Maintenance

### Version Updates
- Regular dependency updates recommended
- Security patches should be applied promptly
- Node.js and Go versions should be kept current

### Monitoring
- Check for outdated dependencies regularly
- Monitor performance metrics
- Review security vulnerabilities

---

**Last Updated**: December 2024
**Project Version**: 0.0.1
**Maintainer**: DiamondMind Team 