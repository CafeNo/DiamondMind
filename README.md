# DiamondMind - Aurelia VTuber Website

## Project Overview

DiamondMind is a modern, interactive website dedicated to the VTuber character **Aurelia**. This project features an elegant blue-themed design inspired by Shirin Ch., complete with magical animations, parallax scrolling effects, and a responsive user interface.

## Quick Start

### Prerequisites
- **Node.js** 18.0.0+ 
- **Go** 1.21+
- **Git**

### Installation
```bash
# Clone repository
git clone <repository-url>
cd DiamondMind

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup (new terminal)
cd backend
go mod tidy
go run cmd/server/main.go
```

**Frontend**: http://localhost:5173  
**Backend**: http://localhost:8080

## Documentation

### Requirements & Dependencies
- **[REQUIREMENTS.md](./REQUIREMENTS.md)** - Complete project requirements and setup guide
- **[Frontend Requirements](./frontend/requirements.frontend.md)** - Frontend-specific dependencies
- **[Backend Requirements](./backend/requirements.go.md)** - Go backend dependencies

### Project Structure
```
DiamondMind/
├── frontend/                 # React frontend application
│   ├── src/components/      # Reusable UI components
│   ├── public/              # Static assets
│   └── requirements.frontend.md
├── backend/                 # Go backend application
│   ├── cmd/server/         # Application entry point
│   ├── internal/           # Internal application code
│   └── requirements.go.md
├── .gitignore              # Git ignore rules
├── REQUIREMENTS.md         # Detailed requirements
└── README.md               # This file
```

## Features

### Visual Design
- **Shirin Ch. Inspired Theme**: Beautiful blue color palette (#A1EAFB, #CABBE9, #FFCEF3, #F19192)
- **Parallax Scrolling**: Smooth layered animations that respond to user scroll
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
- **React 18.3.1** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **GSAP & Framer Motion** for animations
- **Lenis** for smooth scrolling

### Backend
- **Go 1.21** with Chi router
- **Clean Architecture** pattern

## Design System

### Color Theme (Tailwind Configuration)
```javascript
colors: {
  'shirin-blue': '#A1EAFB',    // Primary blue
  'shirin-white': '#FDFDFD',   // Clean white
  'shirin-pink': '#FFCEF3',    // Accent pink
  'shirin-purple': '#CABBE9',  // Accent purple
  'shirin-red': '#F19192'      // Navbar accent
}
```

## Development

### Frontend Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
```

### Backend Scripts
```bash
go run cmd/server/main.go    # Run server
go test ./...                # Run tests
go build -o bin/server cmd/server/main.go  # Build binary
```

## Configuration

### Environment Variables

**Frontend** (`.env` in `frontend/`):
```env
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=DiamondMind
```

**Backend** (`.env` in `backend/`):
```env
PORT=8080
CORS_ORIGIN=http://localhost:5173
```

## Troubleshooting

### Common Issues

**Frontend Issues**:
- `npm install` fails → Clear cache: `npm cache clean --force`
- Port 5173 busy → Use: `npm run dev -- --port 3000`

**Backend Issues**:
- Go modules error → Run: `go mod download`
- Port 8080 busy → Change PORT in environment

### Performance Tips
- Optimize images for web delivery
- Reduce animation complexity on slower devices
- Use `npm run build` to analyze bundle size

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes and test thoroughly
4. Submit pull request with detailed description

### Code Standards
- Use TypeScript for type safety
- Follow project formatting guidelines
- Add comments for complex functionality
- Write tests for new features

## Support

### Resources
- [React Documentation](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Go Documentation](https://golang.org/doc/)

### Getting Help
- Check existing issues in the repository
- Create detailed issue with reproduction steps
- Include system information and error messages

## License

This project is created exclusively for the Aurelia Project.

---

**Version**: v0.2.1 
**Last Updated**: December 2024  
**Compatibility**: Node.js 18+, Go 1.21+
