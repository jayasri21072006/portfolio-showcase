import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // The base must have forward slashes on both sides
  base: "/portfolio-showcase/", 
  
  plugins: [react()],
  
  resolve: {
    alias: {
      // This allows you to use "@/" as a shortcut for the "./src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Ensures that the output directory is clean before each build
    outDir: "dist",
    // Helps with debugging in production if needed
    sourcemap: false,
    // Minimizes the output for better performance
    minify: "esbuild",
  },
});
