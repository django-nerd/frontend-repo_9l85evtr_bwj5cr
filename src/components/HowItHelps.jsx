import React from "react";

function HowItHelps() {
  return (
    <section id="how" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_0%,rgba(147,197,253,0.12),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Study with a guide, not just a timer</h3>
            <p className="mt-2 text-blue-200/90 leading-relaxed">
              Our AI sits next to you — suggesting a starting point, shaping notes into bite-sized tasks, and checking in when your brain starts to drift.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Keep a rhythm you can actually keep</h3>
            <p className="mt-2 text-blue-200/90 leading-relaxed">
              Light routines build momentum: short focus blocks, tiny wins, small resets. Consistency that survives busy weeks and late nights.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Make progress you can feel</h3>
            <p className="mt-2 text-blue-200/90 leading-relaxed">
              No meaningless streaks. Just clear progress on real work — quizzes, essays, labs — and honest summaries at the end of the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItHelps;
