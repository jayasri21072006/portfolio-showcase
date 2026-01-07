import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Use the name of your GitHub repository
  // If your URL is https://username.github.io/portfolio/, set this to '/portfolio/'
  base: "portfolio-showcase", 
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
