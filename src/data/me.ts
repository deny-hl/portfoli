import type { Me } from '../types/content';

export const ME: Me = {
  name: 'Denys',
  handle: 'deny-hl',
  role: 'Customer Guidance Specialist',
  company: 'OBRIO — Nebula',
  city: 'Warsaw',
  coords: '52.2297°N / 21.0122°E',
  email: 'denys3xd@gmail.com',
  github: 'https://github.com/deny-hl',
  linkedin: 'https://linkedin.com/in/deny-hl',
  cv: '/CV_Denys_Bulakh.docx',
  headlines: {
    a: ['Eight years at sea.', 'Now navigating software.'],
    b: ['From bridge watch', 'to backlog triage.'],
    c: ['Operating systems.', 'Different kind of vessel.'],
  },
  subhead:
    'Former Second Officer on container ships. Now building technical and customer-facing skills for the next leg. Currently at OBRIO (Nebula). Open to Customer Success, QA, and Tech Support roles in Warsaw.',
  stats: [
    { v: '8', u: 'yrs', l: 'maritime ops' },
    { v: '38+', u: 'repos', l: 'on github' },
    { v: '4', u: 'langs', l: 'ua / ru / en / pl' },
    { v: 'PL', u: 'base', l: 'warsaw' },
  ],
  facts: [
    ['LOCATION', 'Warsaw, Poland'],
    ['ROLE', 'Customer Guidance Specialist'],
    ['COMPANY', 'OBRIO (Genesis) — Nebula platform'],
    ['OPEN TO', 'Customer Success · QA Manual · Tech Support L1/L2'],
    ['LANGUAGES', 'Ukrainian (native) · Russian (fluent) · English (→C1) · Polish (A2)'],
    ['TIMEZONE', 'UTC+2 — Europe/Warsaw'],
  ],
  now: 'Shipping a Claude-Haiku job-match scorer over Warsaw tech listings. Studying async JS + HTTP fundamentals nightly.',
  bio: [
    "Eight years on the bridge of container ships taught me something recruiters don't see on most CVs: how to stay calm when a system alarms at 03:00, coordinate a multinational crew in English under pressure, and own a watch where the margin for error is measured in cargo and lives.",
    "I'm pivoting into tech — currently at OBRIO supporting Nebula users — and building toward full-stack development. The ships taught me the operator's mindset: instruments, redundancy, checklists, calm. Software is the next vessel.",
  ],
  projects: [
    {
      id: '01',
      title: 'Telegram Translation Bot',
      kind: 'Personal tool',
      status: 'live',
      problem: 'I work across four languages. Group chats were slow, lossy, and full of copy-paste.',
      solution:
        'A Telegram bot that detects source language per message and routes through Claude or Gemini depending on length and tone. Inline, low-latency.',
      stack: ['Python', 'python-telegram-bot', 'Claude API', 'Gemini API'],
      repo: 'https://github.com/deny-hl',
    },
    {
      id: '02',
      title: 'Job-Search Automation',
      kind: 'Workflow',
      status: 'live',
      problem: 'Warsaw job boards are noisy. Manual skim = missed fits + wasted hours.',
      solution:
        'n8n pipeline pulls Adzuna listings nightly, scores each against my profile with Claude Haiku, writes to a shortlist with rationale + stack match %.',
      stack: ['n8n', 'Adzuna API', 'Claude Haiku', 'Notion DB'],
      repo: 'https://github.com/deny-hl',
    },
    {
      id: '03',
      title: 'Obsidian Learning System',
      kind: 'Knowledge workflow',
      status: 'live',
      problem: "Self-study without structure drifts. I needed a Coursera-shaped container that I fully owned.",
      solution:
        "Custom 'architect-learner' skill for Claude Code that plans modules, drafts summaries, and writes back into a vault of linked notes. Deep-dive over surface-skim.",
      stack: ['Obsidian', 'Claude Code', 'Markdown', 'Shell'],
      repo: 'https://github.com/deny-hl',
    },
    {
      id: '04',
      title: 'In progress',
      kind: 'Reserved slot',
      status: 'wip',
      problem: 'Next build — likely a QA-shaped project: log-diff tool or test-plan generator.',
      solution: null,
      stack: [],
      repo: null,
    },
  ],
  skills: [
    {
      group: 'Technical',
      note: 'Code + APIs I reach for.',
      items: ['Python', 'JavaScript', 'HTML / CSS', 'Git', 'Linux (Arch)', 'Claude API', 'Gemini API', 'n8n', 'React (basic)'],
    },
    {
      group: 'Tools & Ops',
      note: 'Daily drivers for the job.',
      items: ['Obsidian', 'Claude Code', 'Ticket systems', 'CRM basics', 'Notion', 'Bash'],
    },
    {
      group: 'Professional',
      note: 'Built on the bridge, still useful.',
      items: ['4 languages', 'Cross-cultural teams', 'Shift-work reliability', 'Incident response', 'Watch-command calm', 'Technical English'],
    },
  ],
};
