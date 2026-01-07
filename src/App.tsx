import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

// Placeholder to prevent build errors since the 'pages' folder is missing
const Home = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-bold">Jayasri T | AI & ML Engineer Portfolio</h1>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Basename is required for GitHub Pages subfolder */}
      <BrowserRouter basename="/portfolio-showcase">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
