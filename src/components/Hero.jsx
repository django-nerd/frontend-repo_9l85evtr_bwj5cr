import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
              School doesn’t have to feel like a treadmill
            </h1>
            <p className="mt-6 text-lg text-blue-200/90 leading-relaxed">
              Scaffold is the place where studying feels lighter, progress is
              visible, and motivation doesn’t fade after week one. Think of it like
              a mentor who actually knows your schedule, your energy, and your goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#join" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition shadow">
                Try Scaffold
              </a>
              <span className="text-blue-200/70 text-sm">Takes 30 seconds. No pressure, just clarity.</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-3xl font-bold text-white">25m</div>
                  <div className="text-xs text-blue-200/70 mt-1">Focus block</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-3xl font-bold text-white">4/5</div>
                  <div className="text-xs text-blue-200/70 mt-1">Habits today</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-3xl font-bold text-white">+38%</div>
                  <div className="text-xs text-blue-200/70 mt-1">Week gain</div>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-4">
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  “Hey, let’s start small. 25 minutes on bio notes, then a 5-minute
                  stretch. I’ll time it. You’ll feel better after the first page.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
