import { Toaster } from "./components/ui/sonner.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
    <h1 className="text-5xl font-bold text-slate-900">Jayasri T</h1>
    <p className="text-xl text-slate-600 mt-4">AI & ML Engineer</p>
    <div className="mt-8 p-4 bg-white shadow-sm border rounded-lg">
      <p className="text-green-600 font-mono">Build Status: Success</p>
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
