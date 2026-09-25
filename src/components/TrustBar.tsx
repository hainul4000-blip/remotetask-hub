import Reveal from './Reveal';
import { stats } from '@/content';

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-ink-400 text-sm font-medium">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
