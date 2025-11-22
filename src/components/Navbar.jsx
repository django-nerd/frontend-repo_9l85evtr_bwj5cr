import React from "react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 shadow ring-1 ring-white/10" />
          <span className="text-white text-lg font-semibold tracking-tight">Scaffold</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#how" className="text-blue-200/80 hover:text-white transition-colors">How it helps</a>
          <a href="#moments" className="text-blue-200/80 hover:text-white transition-colors">Your day</a>
          <a href="#join" className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">Get started</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
