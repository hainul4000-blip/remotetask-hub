import Reveal from './Reveal';
import { kitItems, TELEGRAM_URL } from '@/content';

interface WhatsInsideProps {
  onGetKit: () => void;
}

export default function WhatsInside({ onGetKit }: WhatsInsideProps) {
  return (
    <section id="whats-inside" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
              <i className="fa-solid fa-box-open" />
              <span>What's Inside the Kit</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Land Remote Work</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              Six battle-tested resources that take you from scattered job hunting to a systematic, high-converting remote job search — all in one download.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitItems.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-lift group relative h-full glass rounded-2xl border border-white/8 hover:border-teal-500/30 p-6 hover:shadow-xl hover:shadow-teal-500/10">
                {item.tag && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-teal-500/15 text-teal-300 text-[10px] font-bold uppercase tracking-wide">
                    {item.tag}
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-teal-500/30 transition-all">
                  <i className={`fa-solid ${item.icon} text-teal-400 text-xl`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <button
              onClick={onGetKit}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 font-bold text-base px-7 py-4 rounded-2xl shadow-xl shadow-teal-500/25 hover:shadow-teal-500/50 hover:scale-105 transition-all"
            >
              <i className="fa-solid fa-download text-lg" />
              Download All Six Resources — Free
              <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-ink-500 text-sm mt-4">
              Questions before downloading?{' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-medium underline underline-offset-2">
                Message us on Telegram
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
