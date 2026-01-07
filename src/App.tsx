import { Toaster } from "./components/ui/sonner"; // Your list showed sonner.tsx here
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Create the Query Client
const queryClient = new QueryClient();

// This is the "Home" component where you can paste your portfolio content
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <h1 className="text-5xl font-extrabold tracking-tight">Jayasri T</h1>
    <p className="text-xl text-muted-foreground mt-4">AI & ML Engineer</p>
    <div className="mt-8 p-4 border rounded-lg bg-card">
      <p className="text-green-500 font-mono">✓ System Online: Shadcn Components Loaded</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename="/portfolio-showcase">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
