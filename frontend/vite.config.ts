import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
  },

  build: {
    // Output to ../backend serving path (Go serves frontend/dist)
    outDir: "dist",
    // Clean the output directory before each build
    emptyOutDir: true,
    // Raise the warning threshold slightly — assets like images are expected to be large
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor libs into a separate chunk for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion", "gsap"],
        },
      },
    },
  },
});
