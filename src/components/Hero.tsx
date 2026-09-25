import Reveal from './Reveal';

interface HeroProps {
  onGetKit: () => void;
}

export default function Hero({ onGetKit }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950 to-ink-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-6">
                <i className="fa-solid fa-bolt" />
                <span>Free Download — No Credit Card Required</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Land Your Dream{' '}
                <span className="gradient-text">Remote Job</span>
                <br />
                Faster Than Ever
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-ink-300 leading-relaxed mb-8 max-w-xl">
                Get the <span className="text-white font-semibold">Ultimate Remote Work Mastery Kit</span> — 5 ATS-optimized resume templates, 120+ verified remote job boards, interview scripts, and more. Everything you need to go from applications to offers.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={onGetKit}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 font-bold text-base px-7 py-4 rounded-2xl shadow-xl shadow-teal-500/25 hover:shadow-teal-500/50 hover:scale-105 transition-all"
                >
                  <i className="fa-solid fa-download text-lg" />
                  Get My Free Kit
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#whats-inside"
                  className="inline-flex items-center justify-center gap-2 text-ink-300 hover:text-white font-semibold text-base px-6 py-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  See What's Inside
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap items-center gap-5 text-sm text-ink-400">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-star text-amber-400" />
                  <span className="text-ink-300 font-medium">4.9/5</span>
                  <span>average rating</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-users text-teal-400" />
                  <span className="text-ink-300 font-medium">12,000+</span>
                  <span>downloads</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-teal-400" />
                  <span>Scam-free & vetted</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Kit Preview */}
          <Reveal delay={300}>
            <div className="relative">
              {/* Floating glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-amber-500/10 blur-3xl rounded-3xl" />

              {/* Card stack */}
              <div className="relative">
                {/* Main card */}
                <div className="glass rounded-3xl border border-white/10 p-6 shadow-2xl animate-float">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <i className="fa-solid fa-briefcase text-ink-950" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Remote Work Mastery Kit</div>
                        <div className="text-ink-400 text-xs">v3.2 — Updated Sept 2026</div>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-teal-500/15 text-teal-300 text-xs font-bold">FREE</div>
                  </div>

                  {/* File list */}
                  <div className="space-y-2.5">
                    {[
                      { icon: 'fa-file-lines', name: 'ATS Resume Templates (5 designs)', size: '2.4 MB', color: 'text-teal-400' },
                      { icon: 'fa-table', name: '120+ Verified Remote Job Boards', size: '1.1 MB', color: 'text-amber-400' },
                      { icon: 'fa-microphone', name: 'Remote Interview Script Pack', size: '890 KB', color: 'text-teal-400' },
                      { icon: 'fa-comments', name: 'Async Communication Playbook', size: '650 KB', color: 'text-amber-400' },
                      { icon: 'fa-house-laptop', name: 'Home Office Setup Guide', size: '1.8 MB', color: 'text-teal-400' },
                      { icon: 'fa-shield-halved', name: 'Scam Detection Checklist', size: '420 KB', color: 'text-amber-400' },
                    ].map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 border border-white/5 transition-colors"
                      >
                        <i className={`fa-solid ${f.icon} ${f.color} text-lg w-5 text-center`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium truncate">{f.name}</div>
                        </div>
                        <div className="text-ink-500 text-xs font-mono">{f.size}</div>
      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-ink-400 text-sm">Total bundle size</span>
                    <span className="text-white font-mono text-sm font-bold">7.26 MB</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl border border-amber-500/30 px-4 py-3 shadow-xl glow-amber animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-amber-400 text-lg" />
                    <div>
                      <div className="text-white text-xs font-bold">Instant Access</div>
                      <div className="text-ink-400 text-[10px]">After quick verification</div>
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -left-4 glass rounded-2xl border border-teal-500/30 px-4 py-3 shadow-xl glow-teal animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-2">
                      {['SC', 'MW', 'PS', 'DR'].map((n, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-ink-900 flex items-center justify-center text-[10px] font-bold text-ink-950">
                          {n}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold">12,000+ workers</div>
                      <div className="text-ink-400 text-[10px]">already downloaded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
