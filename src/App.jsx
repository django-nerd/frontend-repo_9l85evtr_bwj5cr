import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItHelps from "./components/HowItHelps";
import Moments from "./components/Moments";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Moments />
      <CTA />
      <footer className="mt-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Scaffold</span>
          <div className="flex items-center gap-4">
            <a href="#how" className="hover:text-white">How it helps</a>
            <a href="#moments" className="hover:text-white">Your day</a>
            <a href="#join" className="hover:text-white">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
