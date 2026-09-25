import { TELEGRAM_URL } from '@/content';

interface FooterProps {
  onGetKit: () => void;
}

export default function Footer({ onGetKit }: FooterProps) {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <i className="fa-solid fa-globe text-ink-950 text-base" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base">RemoteTaskPortal</span>
                <span className="text-teal-400 text-[10px] font-medium tracking-wide">REMOTE WORK RESOURCE HUB</span>
              </div>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed max-w-sm">
              Your trusted resource for legitimate remote work opportunities, ATS-ready templates, and career-accelerating tools — all free, all vetted.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#whats-inside" className="text-ink-400 hover:text-teal-400 text-sm transition-colors">What's Inside</a></li>
              <li><a href="#testimonials" className="text-ink-400 hover:text-teal-400 text-sm transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="text-ink-400 hover:text-teal-400 text-sm transition-colors">FAQ</a></li>
              <li>
                <button onClick={onGetKit} className="text-ink-400 hover:text-teal-400 text-sm transition-colors">
                  Get the Free Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Need Help?</h4>
            <p className="text-ink-400 text-sm mb-4">
              Our support team is ready to help you get your kit.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-200 hover:text-teal-400 font-semibold text-sm px-4 py-2.5 rounded-xl border border-white/10 hover:border-teal-500/30 hover:bg-white/5 transition-all"
            >
              <i className="fa-brands fa-telegram text-lg" />
              @RemoteTaskHelp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-xs text-center sm:text-left">
            © 2026 RemoteTaskPortal.site — A free remote work resource hub. Sponsors cover the costs so you don't have to.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-500">
            <a href="#" className="hover:text-ink-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink-300 transition-colors">Terms</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <i className="fa-brands fa-telegram" /> Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
