export const TELEGRAM_URL = 'https://t.me/RemoteTaskHelp';

export interface KitItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export const kitItems: KitItem[] = [
  {
    icon: 'fa-file-lines',
    title: 'ATS-Optimized Resume Templates',
    description: '5 professionally designed templates that pass Applicant Tracking Systems used by 99% of Fortune 500 companies. Editable in Word, Google Docs, and Pages.',
    tag: 'Most Popular',
  },
  {
    icon: 'fa-list-check',
    title: '120+ Verified Remote Job Boards',
    description: 'A curated, continuously-updated spreadsheet of legitimate remote job boards — filtered by industry, salary range, and vetting status. No scams, no MLM.',
    tag: 'Exclusive',
  },
  {
    icon: 'fa-headset',
    title: 'Remote Interview Script Pack',
    description: 'Battle-tested answers to the 30 most common remote interview questions, plus a video-call checklist that signals professionalism from the first second.',
    tag: 'New',
  },
  {
    icon: 'fa-clock',
    title: 'Async Communication Playbook',
    description: 'Templates for Slack updates, Loom video briefs, and email etiquette that make you look like a seasoned remote pro — even if this is your first remote role.',
    tag: '',
  },
  {
    icon: 'fa-laptop-house',
    title: 'Home Office Setup Guide',
    description: 'Budget-friendly ergonomic recommendations, lighting tips for video calls, and the exact gear list used by top remote earners — at three price tiers.',
    tag: '',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Remote Job Scam Detection Checklist',
    description: 'A 20-point checklist to spot fake listings, phishing attempts, and MLM traps before you waste a single minute. Protect your time and your identity.',
    tag: 'Critical',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '12,000+', label: 'Remote Workers Helped' },
  { value: '120+', label: 'Vetted Job Boards' },
  { value: '5', label: 'ATS Resume Templates' },
  { value: '4.9/5', label: 'Average User Rating' },
];

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Customer Success Manager → Remote PM',
    avatar: 'SC',
    quote: "I'd been applying to remote jobs for 4 months with zero callbacks. After rewriting my resume with the ATS template, I got 3 interviews in the first week. Landed a fully-remote PM role within a month.",
    rating: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'Data Analyst',
    avatar: 'MW',
    quote: "The verified job board list alone is worth more than courses I paid $200 for. Found three niche boards I'd never heard of and one of them had the exact role I was looking for.",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Freelance Writer → Full-Time Remote',
    avatar: 'PS',
    quote: "The interview script pack was a game-changer. I walked into my video interview knowing exactly how to frame my freelance experience. The hiring manager said I 'interviewed like a remote veteran.'",
    rating: 5,
  },
  {
    name: 'Diego Ramirez',
    role: 'Junior Developer',
    avatar: 'DR',
    quote: "I was skeptical about the verification step but it took like 90 seconds and the kit exceeded all expectations. The scam checklist saved me from a fake listing on my very first day using it.",
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'Marketing Specialist',
    avatar: 'AO',
    quote: "Everything in one place. I stopped paying for three different job-board subscriptions after getting this kit. The async communication playbook made my manager notice me within two weeks.",
    rating: 5,
  },
  {
    name: 'Tom Beswick',
    role: 'Transitioning to Remote',
    avatar: 'TB',
    quote: "The home office guide on its own saved me from buying the wrong chair. I followed the mid-tier setup and my back has never been happier. Worth every minute.",
    rating: 5,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Is the Remote Work Mastery Kit really free?',
    answer: "Yes — 100% free. We're able to keep every resource free because the platform is sponsored. A quick 1-minute sponsor verification at the end of the process is all that's asked, and then the full kit is yours to download instantly.",
  },
  {
    question: 'Why is there a verification step?',
    answer: "The verification allows our sponsors to cover the costs of maintaining and updating the kit — vetting job boards, refreshing templates, and keeping the scam checklist current. It takes about a minute and keeps the entire platform free for everyone.",
  },
  {
    question: "Will I get spam or have my email sold?",
    answer: "No. We don't sell your data. The verification is a one-time step handled by our sponsor partner. You won't be added to any mailing list without your explicit consent.",
  },
  {
    question: 'What format are the templates in?',
    answer: 'Resume templates are provided in Microsoft Word (.docx), Google Docs (link), and Apple Pages formats. The job board list is a Google Sheet you can copy. Everything is instantly accessible after verification.',
  },
  {
    question: 'How often is the kit updated?',
    answer: 'The verified job board list is checked monthly. Resume templates are updated quarterly to reflect the latest ATS algorithm changes. You\'ll always have access to the most current version.',
  },
  {
    question: 'I have trouble with the download — what do I do?',
    answer: "If you run into any issues during verification or downloading, message us on Telegram at @RemoteTaskHelp. Our support team responds quickly and will make sure you get your kit.",
  },
];

// Funnel quiz data
export interface QuizQuestion {
  question: string;
  subtitle: string;
  options: { text: string; icon: string; tags: string[] }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What's your remote work experience level?",
    subtitle: 'This helps us tailor the right resources for you.',
    options: [
      { text: 'Complete beginner', icon: 'fa-seedling', tags: ['starter'] },
      { text: 'Some freelance experience', icon: 'fa-leaf', tags: ['transitioning'] },
      { text: 'Currently remote, looking for better', icon: 'fa-tree', tags: ['experienced'] },
      { text: 'Experienced pro, optimizing my toolkit', icon: 'fa-crown', tags: ['pro'] },
    ],
  },
  {
    question: 'What type of remote role are you after?',
    subtitle: 'We\'ll prioritize the most relevant job boards and templates.',
    options: [
      { text: 'Tech & Development', icon: 'fa-code', tags: ['tech'] },
      { text: 'Marketing & Content', icon: 'fa-pen-nib', tags: ['marketing'] },
      { text: 'Customer Support & Ops', icon: 'fa-headset', tags: ['support'] },
      { text: 'Design & Creative', icon: 'fa-palette', tags: ['design'] },
      { text: 'Not sure yet', icon: 'fa-compass', tags: ['general'] },
    ],
  },
  {
    question: "What's your biggest challenge right now?",
    subtitle: 'Pick the one that resonates most — we\'ll highlight the solution.',
    options: [
      { text: 'My resume gets ignored', icon: 'fa-file-circle-xmark', tags: ['resume'] },
      { text: 'I don\'t know where to find legit jobs', icon: 'fa-magnifying-glass', tags: ['boards'] },
      { text: 'I bomb remote interviews', icon: 'fa-microphone-slash', tags: ['interview'] },
      { text: 'I feel disorganized working from home', icon: 'fa-house-circle-exclamation', tags: ['async'] },
    ],
  },
];


