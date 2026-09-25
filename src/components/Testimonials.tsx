import Reveal from './Reveal';
import { testimonials } from '@/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
              <i className="fa-solid fa-heart" />
              <span>Success Stories</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Real People.{' '}
              <span className="gradient-text">Real Remote Jobs.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              Over 12,000 remote workers have used this kit to upgrade their job search. Here's what a few of them had to say.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-lift h-full glass rounded-2xl border border-white/8 hover:border-amber-500/20 p-6 hover:shadow-xl hover:shadow-amber-500/5">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <i key={s} className="fa-solid fa-star text-amber-400 text-sm" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-ink-200 text-sm leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-ink-950 text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">{t.name}</div>
                    <div className="text-ink-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
