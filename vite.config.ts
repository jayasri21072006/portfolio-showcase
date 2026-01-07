import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // This is the most important line for GitHub Pages
  base: "/portfolio-showcase/", 
  
  plugins: [react()],
  
  resolve: {
    alias: {
      // This ensures your "@/" imports work correctly in a large repo
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // This ensures the output is clean and compatible with GitHub Actions
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
