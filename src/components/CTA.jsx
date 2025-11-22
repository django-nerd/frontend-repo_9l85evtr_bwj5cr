import React from "react";

function CTA() {
  return (
    <section id="join" className="max-w-6xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 p-8 sm:p-12">
        <div className="absolute -inset-32 bg-[radial-gradient(700px_300px_at_20%_10%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            This isn’t just another study app.
          </h3>
          <p className="mt-3 text-blue-100/90 text-lg max-w-2xl">
            It’s the first one that meets you where you are. If you’re tired of
            starting strong and burning out by Friday, come try the quieter way to
            get ahead.
          </p>
          <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
            />
            <button
              type="submit"
              className="rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-blue-50 transition shadow"
            >
              Get early access
            </button>
          </form>
          <p className="mt-3 text-xs text-blue-200/70">
            No spam. Just a short invite when we’re ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
