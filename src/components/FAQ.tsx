import { useState } from 'react';
import Reveal from './Reveal';
import { faqItems, TELEGRAM_URL } from '@/content';

interface FAQProps {
  onGetKit: () => void;
}

export default function FAQ({ onGetKit }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
              <i className="fa-solid fa-circle-question" />
              <span>FAQ</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Questions?{' '}
              <span className="gradient-text">We've Got Answers.</span>
            </h2>
          </Reveal>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="glass rounded-xl border border-white/8 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold text-sm sm:text-base">{item.question}</span>
                  <i className={`fa-solid fa-chevron-down text-teal-400 text-sm transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: open === i ? '200px' : '0px', opacity: open === i ? 1 : 0 }}
                >
                  <p className="px-5 pb-5 text-ink-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-ink-400 text-sm mb-5">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-200 hover:text-teal-400 font-semibold text-sm px-5 py-3 rounded-xl border border-white/10 hover:border-teal-500/30 hover:bg-white/5 transition-all"
              >
                <i className="fa-brands fa-telegram text-lg" />
                Chat with us on Telegram
              </a>
              <button
                onClick={onGetKit}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-teal-500/25 hover:scale-105 transition-all"
              >
                <i className="fa-solid fa-download" />
                Get My Free Kit
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
