# Frontend Requirements

## Node.js Version
- **Minimum**: Node.js 18.0.0
- **Recommended**: Node.js 20.x LTS
- **npm**: 8.0.0+ (comes with Node.js)

## Dependencies

### Production Dependencies
```json
{
  "@heroicons/react": "^2.0.18",     // SVG icon library
  "framer-motion": "^12.23.0",       // Animation library for React
  "gsap": "^3.12.5",                 // Professional animation library
  "lenis": "^1.1.14",                // Smooth scrolling library
  "react": "^18.3.1",                // React framework
  "react-dom": "^18.3.1"             // React DOM rendering
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.0.4",  // Vite plugin for React
  "autoprefixer": "^10.4.19",        // PostCSS plugin for vendor prefixes
  "postcss": "^8.4.32",              // CSS transformation tool
  "tailwindcss": "^3.4.4",           // Utility-first CSS framework
  "typescript": "^5.4.0",            // TypeScript compiler
  "vite": "^5.4.19"                  // Fast build tool
}
```

## Installation
```bash
# Install all dependencies
npm install

# Install specific dependency
npm install <package-name>

# Install dev dependency
npm install --save-dev <package-name>
```

## Scripts
```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=DiamondMind
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Key Features
- **TypeScript**: Type-safe development
- **Vite**: Fast development and building
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **GSAP**: Advanced scroll animations
- **Responsive Design**: Mobile-first approach

## Performance Optimizations
- Code splitting with Vite
- Tree shaking for smaller bundles
- CSS purging with Tailwind
- Image optimization
- Lazy loading components 