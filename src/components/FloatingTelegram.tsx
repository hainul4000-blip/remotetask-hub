import { TELEGRAM_URL } from '@/content';

export default function FloatingTelegram() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram Support"
      className="fixed bottom-5 right-5 z-30 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-teal-500/40 animate-pulse-ring" />
      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl shadow-teal-500/30 group-hover:scale-110 transition-transform">
        <i className="fa-brands fa-telegram text-white text-2xl" />
      </span>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass rounded-lg border border-white/10 px-3 py-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Need help? Chat with us
      </span>
    </a>
  );
}
