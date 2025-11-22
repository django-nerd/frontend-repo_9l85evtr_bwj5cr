import React from "react";

const moments = [
  {
    time: "7:10 AM",
    title: "The morning reset",
    text:
      "You wake up already behind. Scaffold gives you a simple plan for today — three things, in order. No fluff, no panic.",
  },
  {
    time: "3:40 PM",
    title: "Bus ride brain fog",
    text:
      "You dump today’s class notes. Our AI pulls key points, turns them into quick cards, and marks what to review before it fades.",
  },
  {
    time: "8:15 PM",
    title: "That one class that drains you",
    text:
      "Scaffold breaks the assignment into tiny steps and stays with you through a focus timer. You just press start. We handle the rhythm.",
  },
  {
    time: "10:42 PM",
    title: "Night check-in without guilt",
    text:
      "You see real progress, not streaks for streaks’ sake. We highlight what moved forward and what can wait. You close the day lighter.",
  },
];

function Moments() {
  return (
    <section id="moments" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        A day with Scaffold feels different
      </h2>
      <p className="mt-3 text-blue-200/90">
        Not perfect. Just doable. And doable adds up.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {moments.map((m) => (
          <div
            key={m.title}
            className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-white/20 transition"
          >
            <div className="text-xs text-blue-300/70">{m.time}</div>
            <div className="mt-2 text-white font-medium">{m.title}</div>
            <p className="mt-2 text-blue-200/90 leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Moments;
