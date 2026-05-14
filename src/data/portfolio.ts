export const profile = {
  name: 'Kishen Sharma',
  role: 'Machine Learning Engineer',
  tagline: 'I build reliable AI systems that turn messy human workflows into fast, reviewable products.',
  summary:
    'Machine Learning Engineer focused on production-grade ML systems, agentic workflows, evaluation, MLOps, and scalable data pipelines.',
  location: 'United States',
  resumeHref: '/assets/Kishen-Sharma-Resume.pdf',
  links: {
    github: 'https://github.com/ksharma6',
    linkedin: 'https://linkedin.com/in/kishen-sharma',
  },
};

export const impactHighlights = [
  {
    value: '35%',
    label: 'less email response time',
    detail: 'Inbox Zero assistant triages Gmail threads and drafts Slack-reviewed replies.',
  },
  {
    value: '0',
    label: 'email mis-sends',
    detail: 'Review-first agent workflow keeps automation accountable before sending.',
  },
  {
    value: 'E2E',
    label: 'ML ownership',
    detail: 'From experiment design and evaluation through deployment and monitoring.',
  },
  {
    value: 'Prod',
    label: 'systems mindset',
    detail: 'Pragmatic MLOps, scalable data pipelines, and inference optimization.',
  },
];

export const featuredProject = {
  name: 'Inbox Zero',
  eyebrow: 'Featured agentic AI project',
  repo: 'https://github.com/ksharma6/inbox_zero',
  summary:
    'An AI inbox assistant that uses OpenAI agents with LangGraph to triage Gmail threads, summarize context, and draft replies for user review in Slack.',
  problem:
    'High-volume email work is easy to defer, context-switching is expensive, and fully automated replies are too risky without a human approval loop.',
  approach: [
    'Built a review-first workflow that separates triage, context summarization, and draft generation.',
    'Used LangGraph to keep the agent flow explicit, inspectable, and easier to extend.',
    'Designed the Slack review surface so final control stays with the user.',
  ],
  outcome: 'Reduced personal email response time by 35% and brought email mis-sends down to 0.',
  stack: ['OpenAI Agents', 'LangGraph', 'Gmail', 'Slack', 'Python', 'Workflow Automation'],
};

export const experienceThemes = [
  {
    title: 'Production ML',
    copy: 'Ship models and AI features with attention to reliability, evaluation quality, and operational ownership.',
  },
  {
    title: 'MLOps & Data Pipelines',
    copy: 'Build repeatable pipelines and deployment paths that help teams move from experiments to durable systems.',
  },
  {
    title: 'Evaluation & Optimization',
    copy: 'Use offline and online evaluation, experiment design, and inference optimization to connect model work to product impact.',
  },
];

export const skillGroups = [
  {
    name: 'AI & ML',
    skills: ['LLM agents', 'Model evaluation', 'Experiment design', 'Inference optimization'],
  },
  {
    name: 'Systems',
    skills: ['MLOps', 'Data pipelines', 'Production deployment', 'Monitoring'],
  },
  {
    name: 'Product Engineering',
    skills: ['Python', 'APIs', 'Slack/Gmail integrations', 'Human-in-the-loop UX'],
  },
];
