# DiamondMind - Aurelia VTuber Website

## Project Overview

DiamondMind is a modern, interactive website dedicated to the VTuber character **Aurelia**. This project features an elegant blue-themed design inspired by Shirin Ch., complete with magical animations, parallax scrolling effects, and a responsive user interface.

## Features

### Visual Design
- **Shirin Ch. Inspired Theme**: Beautiful blue color palette (#A1EAFB, #CABBE9, #FFCEF3, #F19192)
- **Parallax Scrolling**: Smooth layered animations that respond to user scroll
- **Magical Effects**: Floating particles, sparkles, hearts, and glitter animations
- **Interactive Elements**: Hover effects, animated buttons, and smooth transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices

### Technical Components
- **Header Section**: Dynamic parallax background with Aurelia character images
- **Navigation Bar**: Animated navbar with moving bubble indicators
- **About Section**: Interactive content with magical button effects
- **Team Section**: Showcase area with hover animations
- **Contact Section**: Communication interface with visual effects
- **Smooth Scrolling**: Enhanced user experience with scroll-triggered animations

## Technology Stack

### Frontend
- **React 18.3.1**: Modern JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server
- **GSAP**: Professional animation library for smooth effects
- **Lenis**: Smooth scrolling library for enhanced navigation

### Backend
- **Go 1.21**: High-performance programming language
- **Chi Router**: Lightweight HTTP router for Go applications

## Project Structure

```
DiamondMind/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx   # Main header with parallax
│   │   │   ├── Navbar.tsx   # Navigation with animations
│   │   │   ├── About.tsx    # About section content
│   │   │   ├── Team.tsx     # Team showcase
│   │   │   ├── Contact.tsx  # Contact information
│   │   │   └── ...          # Additional components
│   │   ├── App.tsx          # Main application component
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets
│   │   ├── aurelia_bg.png   # Background image
│   │   ├── aurelia_logo.png # Logo image
│   │   └── aurelia_charactors.png # Character image
│   └── package.json         # Frontend dependencies
├── backend/                 # Go backend application
│   ├── cmd/server/         # Application entry point
│   ├── internal/           # Internal application code
│   └── go.mod              # Backend dependencies
└── README.md               # Project documentation
```

## Installation Guide

### Prerequisites

Before starting, ensure you have the following software installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Go** (version 1.21 or higher)
   - Download from: https://golang.org/dl/
   - Verify installation: `go version`

3. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd DiamondMind
```

#### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend application will be available at: `http://localhost:5173`

#### 3. Backend Setup
```bash
# Navigate to backend directory (from project root)
cd backend

# Download Go dependencies
go mod tidy

# Run the server
go run cmd/server/main.go
```

The backend server will be available at: `http://localhost:8080`

## Development Workflow

### Frontend Development
- **Development Mode**: `npm run dev` - Starts development server with hot reload
- **Build Production**: `npm run build` - Creates optimized production build
- **Preview Build**: `npm run preview` - Preview production build locally

### Backend Development
- **Run Server**: `go run cmd/server/main.go` - Starts the Go server
- **Test Application**: `go test ./...` - Run all tests
- **Build Binary**: `go build -o server cmd/server/main.go` - Create executable

### File Organization

#### Adding New Components
1. Create new `.tsx` file in `frontend/src/components/`
2. Export component as default
3. Import and use in parent components
4. Follow TypeScript best practices

#### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow Shirin theme colors: `shirin-blue`, `shirin-purple`, `shirin-pink`, `shirin-red`
- Maintain responsive design principles
- Test across different screen sizes

## Configuration

### Color Theme (Tailwind Configuration)
The project uses custom colors defined in `tailwind.config.js`:
```javascript
colors: {
  'shirin-blue': '#A1EAFB',    // Primary blue
  'shirin-white': '#FDFDFD',   // Clean white
  'shirin-pink': '#FFCEF3',    // Accent pink
  'shirin-purple': '#CABBE9',  // Accent purple
  'shirin-red': '#F19192'      // Navbar accent
}
```

### Animation Settings
- **Parallax Speed**: Configured in `Header.tsx` layer settings
- **Scroll Triggers**: GSAP ScrollTrigger configuration
- **Magical Effects**: Particle counts and animation durations

## Troubleshooting

### Common Issues

#### Frontend Issues
**Problem**: `npm install` fails
- **Solution**: Clear npm cache with `npm cache clean --force`
- **Alternative**: Delete `node_modules` and `package-lock.json`, then reinstall

**Problem**: Development server won't start
- **Solution**: Check if port 5173 is available
- **Alternative**: Use `npm run dev -- --port 3000` for different port

#### Backend Issues
**Problem**: Go modules not downloading
- **Solution**: Run `go mod download` explicitly
- **Check**: Ensure Go version is 1.21 or higher

**Problem**: Server startup errors
- **Solution**: Check if port 8080 is available
- **Verify**: Go module path and dependencies

### Performance Optimization
- **Images**: Optimize PNG files for web delivery
- **Animations**: Reduce particle counts for slower devices
- **Bundle Size**: Use `npm run build` and analyze output

## Contributing

### Code Standards
1. **TypeScript**: Use proper type definitions
2. **Formatting**: Follow project code style
3. **Comments**: Document complex functionality
4. **Testing**: Add tests for new features

### Pull Request Process
1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m "Description"`
4. Push branch: `git push origin feature-name`
5. Create pull request with detailed description

## Support

### Documentation Resources
- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GSAP**: https://greensock.com/docs/
- **Go**: https://golang.org/doc/

### Getting Help
- Check existing issues in the repository
- Create new issue with detailed problem description
- Include system information and error messages
- Provide steps to reproduce the issue

## License

This project is created only for Aurelia Project.

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Compatibility**: Node.js 18+, Go 1.21+ 
