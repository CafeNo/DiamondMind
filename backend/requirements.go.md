# Go Backend Requirements

## Go Version
- **Minimum**: Go 1.21
- **Recommended**: Go 1.21 or latest stable

## Dependencies

### Direct Dependencies
```go
github.com/go-chi/chi/v5 v5.0.10  // HTTP router and middleware
```

### Installation
```bash
# Install dependencies
go mod tidy

# Verify dependencies
go mod verify

# Download dependencies
go mod download
```

### Development Tools (Optional)
```bash
# Install development tools
go install golang.org/x/tools/cmd/goimports@latest
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
go install github.com/air-verse/air@latest  # Hot reload
```

## Build Instructions

### Development
```bash
# Run with hot reload (if air is installed)
air

# Or run directly
go run cmd/server/main.go
```

### Production
```bash
# Build binary
go build -o bin/server cmd/server/main.go

# Build with optimizations
go build -ldflags="-s -w" -o bin/server cmd/server/main.go
```

## Environment Variables
```bash
PORT=8080                           # Server port
CORS_ORIGIN=http://localhost:5173   # Frontend URL for CORS
``` 