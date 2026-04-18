export type Project = {
  id: string;
  title: string;
  kind: string;
  status: 'live' | 'wip';
  problem: string | null;
  solution: string | null;
  stack: readonly string[];
  repo: string | null;
};

export type SkillGroup = {
  group: string;
  note: string;
  items: readonly string[];
};

export type Stat = {
  v: string;
  u: string;
  l: string;
};

export type HeadlineKey = 'a' | 'b' | 'c';

export type Me = {
  name: string;
  handle: string;
  role: string;
  company: string;
  city: string;
  coords: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  headlines: Record<HeadlineKey, readonly [string, string]>;
  subhead: string;
  stats: readonly Stat[];
  facts: readonly (readonly [string, string])[];
  now: string;
  bio: readonly string[];
  projects: readonly Project[];
  skills: readonly SkillGroup[];
};
