import { TELEGRAM_URL } from '@/content';

interface HeaderProps {
  onGetKit: () => void;
}

export default function Header({ onGetKit }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-globe text-ink-950 text-base" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base md:text-lg tracking-tight">RemoteTaskPortal</span>
              <span className="text-teal-400 text-[10px] md:text-xs font-medium tracking-wide">REMOTE WORK RESOURCE HUB</span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#whats-inside" className="text-ink-300 hover:text-white text-sm font-medium transition-colors">What's Inside</a>
            <a href="#testimonials" className="text-ink-300 hover:text-white text-sm font-medium transition-colors">Success Stories</a>
            <a href="#faq" className="text-ink-300 hover:text-white text-sm font-medium transition-colors">FAQ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-ink-300 hover:text-teal-400 text-sm font-medium transition-colors"
            >
              <i className="fa-brands fa-telegram text-lg" />
              <span className="hidden lg:inline">Support</span>
            </a>
            <button
              onClick={onGetKit}
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 font-bold text-sm px-4 md:px-5 py-2.5 rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all"
            >
              Get Free Kit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
