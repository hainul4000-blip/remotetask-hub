import { useState, useEffect, useRef, useCallback } from 'react';
import { quizQuestions, kitItems, TELEGRAM_URL } from '@/content';

interface FunnelModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = 'quiz' | 'builder' | 'terminal' | 'verify';

interface TerminalLineData {
  text: string;
  delay: number;
}

const terminalSequence: TerminalLineData[] = [
  { text: '> Initializing personalized kit builder...', delay: 400 },
  { text: '> Loading ATS resume template library...', delay: 600 },
  { text: '> Scanning 120+ verified remote job boards...', delay: 700 },
  { text: '> Cross-referencing boards with your selected role type...', delay: 650 },
  { text: '> Compiling remote interview script pack...', delay: 550 },
  { text: '> Packaging async communication playbook...', delay: 500 },
  { text: '> Running scam-detection checklist validation...', delay: 600 },
  { text: '> Optimizing bundle for instant download...', delay: 500 },
  { text: '> Your personalized Remote Work Mastery Kit is ready.', delay: 400 },
];

export default function FunnelModal({ open, onClose }: FunnelModalProps) {
  const [step, setStep] = useState<Step>('quiz');
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [terminalLines, setTerminalLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [lockerTriggered, setLockerTriggered] = useState(false);
  const terminalTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setStep('quiz');
      setQuizIndex(0);
      setAnswers([]);
      setSelectedOption(null);
      setTerminalLines(0);
      setProgress(0);
      setLockerTriggered(false);
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Escape key to close (only on early steps)
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && step !== 'terminal') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, step, onClose]);

  // Terminal animation
  const startTerminal = useCallback(() => {
    setStep('terminal');
    setTerminalLines(0);
    setProgress(0);

    let lineCount = 0;
    let progressVal = 0;

    const showNextLine = () => {
      if (lineCount < terminalSequence.length) {
        setTerminalLines(lineCount + 1);
        progressVal = Math.round(((lineCount + 1) / terminalSequence.length) * 100);
        setProgress(progressVal);
        lineCount++;
        terminalTimerRef.current = setTimeout(showNextLine, terminalSequence[lineCount - 1].delay);
      } else {
        // All lines shown -> go to verify
        terminalTimerRef.current = setTimeout(() => {
          setStep('verify');
        }, 600);
      }
    };

    terminalTimerRef.current = setTimeout(showNextLine, 300);
  }, []);

  // Cleanup terminal timers on unmount or close
  useEffect(() => {
    if (!open && terminalTimerRef.current) {
      clearTimeout(terminalTimerRef.current);
      terminalTimerRef.current = null;
    }
  }, [open]);

  const handleQuizSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleQuizNext = () => {
    if (selectedOption === null) return;
    const tags = quizQuestions[quizIndex].options[selectedOption].tags;
    const newAnswers = [...answers, tags];
    setAnswers(newAnswers);

    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
      setSelectedOption(null);
    } else {
      // All quiz questions answered -> go to builder
      setStep('builder');
    }
  };

  const handleQuizBack = () => {
    if (quizIndex > 0) {
      setQuizIndex(quizIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleUnlock = () => {
    if (lockerTriggered) return;
    setLockerTriggered(true);

    // Safely check window for _gu (and fallback _kt), with a user-facing
    // message if the locker script was blocked (e.g. by AdBlocker).
    const win = window as unknown as Record<string, unknown>;
    if (typeof win._gu === 'function') {
      console.log('Triggering AdBlueMedia Locker...');
      win._gu();
      // Close the React modal so the injected locker iframe overlay is visible
      onClose();
    } else if (typeof win._kt === 'function') {
      console.log('Triggering AdBlueMedia Locker (fallback _kt)...');
      win._kt();
      onClose();
    } else {
      setLockerTriggered(false);
      alert('Verification locker could not be loaded. Please disable your AdBlocker and refresh the page, or contact support on Telegram.');
    }
  };

  if (!open) return null;

  const totalSteps = quizQuestions.length;
  const quizProgress = ((quizIndex + (selectedOption !== null ? 1 : 0)) / totalSteps) * 100;

  // Derive personalization from answers
  const allTags = answers.flat();
  const roleTag = allTags.find((t) => ['tech', 'marketing', 'support', 'design', 'general'].includes(t));
  const roleLabel: Record<string, string> = {
    tech: 'Tech & Development',
    marketing: 'Marketing & Content',
    support: 'Customer Support & Ops',
    design: 'Design & Creative',
    general: 'Generalist / Exploring',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 funnel-backdrop animate-fade-in">
      {/* Close button (hidden on terminal step) */}
      {step !== 'terminal' && (
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-ink-300 hover:text-white hover:bg-white/10 transition-all z-10"
        >
          <i className="fa-solid fa-xmark text-lg" />
        </button>
      )}

      {/* Modal panel */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl border border-white/10 shadow-2xl animate-slide-up">
        {/* ==================== QUIZ STEP ==================== */}
        {step === 'quiz' && (
          <div className="p-6 sm:p-10">
            {/* Progress */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
                Step {quizIndex + 1} of {totalSteps}
              </span>
              <span className="text-ink-500 text-xs">Quick Qualification</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 mb-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${quizProgress}%` }}
              />
            </div>

            {/* Question */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {quizQuestions[quizIndex].question}
            </h2>
            <p className="text-ink-400 text-sm mb-7">{quizQuestions[quizIndex].subtitle}</p>

            {/* Options */}
            <div className="grid gap-3">
              {quizQuestions[quizIndex].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleQuizSelect(i)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                    selectedOption === i
                      ? 'border-teal-500/50 bg-teal-500/10 shadow-lg shadow-teal-500/10'
                      : 'border-white/8 bg-white/5 hover:border-white/15 hover:bg-white/8'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    selectedOption === i
                      ? 'bg-teal-500/20 border border-teal-500/30'
                      : 'bg-white/5 border border-white/5'
                  }`}>
                    <i className={`fa-solid ${opt.icon} ${selectedOption === i ? 'text-teal-400' : 'text-ink-400'} text-base`} />
                  </div>
                  <span className={`font-semibold text-sm sm:text-base ${selectedOption === i ? 'text-white' : 'text-ink-200'}`}>
                    {opt.text}
                  </span>
                  <i className={`fa-solid fa-check-circle ml-auto text-lg transition-all ${
                    selectedOption === i ? 'text-teal-400 opacity-100 scale-100' : 'text-ink-600 opacity-0 scale-50'
                  }`} />
                </button>
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handleQuizBack}
                disabled={quizIndex === 0}
                className={`flex items-center gap-2 text-sm font-semibold transition-all ${
                  quizIndex === 0 ? 'text-ink-600 cursor-not-allowed' : 'text-ink-300 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-arrow-left" />
                Back
              </button>
              <button
                onClick={handleQuizNext}
                disabled={selectedOption === null}
                className={`flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all ${
                  selectedOption === null
                    ? 'bg-white/5 text-ink-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 shadow-lg shadow-teal-500/25 hover:scale-105'
                }`}
              >
                {quizIndex < totalSteps - 1 ? 'Continue' : 'Build My Kit'}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== BUILDER STEP ==================== */}
        {step === 'builder' && (
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
                <i className="fa-solid fa-wand-magic-sparkles" />
                <span>Personalized for You</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Your Custom Kit is Being Assembled
              </h2>
              <p className="text-ink-400 text-sm max-w-md mx-auto">
                Based on your answers, we've prioritized the resources most relevant to{' '}
                <span className="text-teal-400 font-semibold">{roleLabel[roleTag || 'general'] || 'your goals'}</span>.
              </p>
            </div>

            {/* Kit items list */}
            <div className="space-y-2.5 mb-8">
              {kitItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${item.icon} text-teal-400 text-sm`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">{item.title}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold shrink-0">
                    <i className="fa-solid fa-circle-check" />
                    Included
                  </div>
                </div>
              ))}
            </div>

            {/* Summary box */}
            <div className="glass rounded-2xl border border-teal-500/20 p-4 mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-box-open text-teal-400 text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">6 resources · 7.26 MB total</div>
                <div className="text-ink-400 text-xs">Ready to prepare and download — just one quick step left.</div>
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => { setStep('quiz'); setQuizIndex(0); setAnswers([]); setSelectedOption(null); }}
                className="flex items-center gap-2 text-ink-300 hover:text-white text-sm font-semibold transition-colors"
              >
                <i className="fa-solid fa-arrow-left" />
                Start Over
              </button>
              <button
                onClick={startTerminal}
                className="group flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-teal-500/25 hover:scale-105 transition-all"
              >
                <i className="fa-solid fa-cog group-hover:rotate-180 transition-transform duration-700" />
                Prepare My Kit
              </button>
            </div>
          </div>
        )}

        {/* ==================== TERMINAL STEP ==================== */}
        {step === 'terminal' && (
          <div className="p-6 sm:p-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 mb-4">
                <i className="fa-solid fa-terminal text-teal-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                Preparing Your Kit
              </h2>
              <p className="text-ink-400 text-sm">Hang tight — this only takes a few seconds.</p>
            </div>

            {/* Terminal window */}
            <div className="rounded-2xl bg-ink-950 border border-white/10 overflow-hidden mb-6">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-ink-500 text-xs font-mono">kit-builder — bash</span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-xs sm:text-sm min-h-[200px]">
                {Array.from({ length: terminalLines }).map((_, i) => (
                  <div
                    key={i}
                    className={`terminal-line mb-1.5 ${
                      i === terminalSequence.length - 1 ? 'text-teal-400 font-bold' : 'text-ink-300'
                    }`}
                  >
                    {terminalSequence[i].text}
                    {i === terminalLines - 1 && i < terminalSequence.length - 1 && (
                      <span className="inline-block w-2 h-4 ml-1 bg-teal-400 animate-blink align-middle" />
                    )}
                  </div>
                ))}
                {terminalLines === 0 && (
                  <div className="text-ink-500">
                    <span className="inline-block w-2 h-4 bg-teal-400 animate-blink align-middle" />
                  </div>
                )}
                {/* Completion check */}
                {terminalLines === terminalSequence.length && (
                  <div className="terminal-line flex items-center gap-2 mt-3 text-teal-400 font-bold">
                    <i className="fa-solid fa-circle-check" />
                    Bundle ready for download.
                  </div>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-3">
              <div
                className="h-full shimmer-bar rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-center text-ink-400 text-xs font-mono">{progress}% complete</div>
          </div>
        )}

        {/* ==================== VERIFY STEP ==================== */}
        {step === 'verify' && (
          <div className="p-6 sm:p-10">
            {/* Success indicator */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/15 border border-teal-500/30 mb-4 animate-scale-in">
                <i className="fa-solid fa-circle-check text-teal-400 text-3xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Your Kit is Ready!
              </h2>
              <p className="text-ink-400 text-sm max-w-md mx-auto">
                One last step — a quick sponsor verification keeps this platform 100% free for everyone.
              </p>
            </div>

            {/* Verification explanation card */}
            <div className="glass rounded-2xl border border-white/10 p-5 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-shield-halved text-amber-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">1-Minute Sponsor Verification</h3>
                  <p className="text-ink-400 text-sm leading-relaxed mb-3">
                    Our sponsors cover all the costs of maintaining and updating this kit — vetting job boards, refreshing templates, and keeping the scam checklist current. A quick verification on the next screen is all that's needed to unlock your download instantly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-ink-300 text-sm">
                      <i className="fa-solid fa-circle-check text-teal-400 text-xs" />
                      Takes about 60 seconds
                    </li>
                    <li className="flex items-center gap-2 text-ink-300 text-sm">
                      <i className="fa-solid fa-circle-check text-teal-400 text-xs" />
                      No credit card or payment required
                    </li>
                    <li className="flex items-center gap-2 text-ink-300 text-sm">
                      <i className="fa-solid fa-circle-check text-teal-400 text-xs" />
                      Instant download access after completing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Telegram support near verification */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/8 hover:border-teal-500/30 hover:bg-white/8 transition-all mb-6"
            >
              <i className="fa-brands fa-telegram text-teal-400 text-xl" />
              <span className="text-ink-300 text-sm">
                Trouble with verification? Message us on{' '}
                <span className="text-teal-400 font-semibold">Telegram @RemoteTaskHelp</span>
              </span>
              <i className="fa-solid fa-arrow-right text-ink-500 text-xs ml-auto" />
            </a>

            {/* Unlock button — THE ONLY PLACE _gu() IS CALLED */}
            <button
              onClick={handleUnlock}
              disabled={lockerTriggered}
              className={`group w-full flex items-center justify-center gap-3 font-bold text-base px-7 py-4 rounded-2xl transition-all ${
                lockerTriggered
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/20 cursor-wait'
                  : 'bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-ink-950 shadow-xl shadow-teal-500/25 hover:shadow-teal-500/50 hover:scale-[1.02]'
              }`}
            >
              {lockerTriggered ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" />
                  Opening verification...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-unlock text-lg" />
                  Unlock My Free Kit
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Trust microcopy */}
            <p className="text-center text-ink-500 text-xs mt-4">
              <i className="fa-solid fa-lock text-[10px] mr-1" />
              Secured by AdBlueMedia · Your download unlocks instantly after verification
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
