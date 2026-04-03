import {
  Bot,
  BrainCircuit,
  Globe,
  LayoutTemplate,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export type Testimonial = {
  name: string
  company: string
  quote: string
}

export type Stat = {
  label: string
  value: string
}

export const navSections = {
  services: [
    'AI Solutions',
    'Mobile App Development',
    'Web App Development',
    'AI Agent Creation',
  ],
  company: ['About', 'Case Studies', 'Careers', 'Blog', 'Contact'],
}

export const heroStats: Stat[] = [
  { label: 'Projects Delivered', value: '180+' },
  { label: 'AI Workflows Automated', value: '1.2M+' },
  { label: 'Global Product Teams', value: '45' },
]

export const services: ServiceItem[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'Production-grade AI systems for recommendations, assistants, automation, and decision support.',
    icon: BrainCircuit,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Scalable iOS and Android experiences with clean architecture, performance monitoring, and CI/CD.',
    icon: Smartphone,
  },
  {
    id: 'web-app-development',
    title: 'Web App Development',
    description:
      'Modern web applications with React, secure APIs, and rich analytics built for growth.',
    icon: Globe,
  },
  {
    id: 'ai-agent-creation',
    title: 'AI Agent Creation',
    description:
      'Custom AI agents that can reason over your data, execute workflows, and integrate with internal tools.',
    icon: Bot,
  },
  {
    id: 'ux-design',
    title: 'UX/UI Engineering',
    description:
      'User-first journeys, accessible interfaces, and rapid experimentation to improve conversions.',
    icon: LayoutTemplate,
  },
  {
    id: 'innovation-lab',
    title: 'Innovation Lab',
    description:
      'Fast concept-to-prototype cycles for new AI ideas and market validation in weeks.',
    icon: Sparkles,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Rick Barry',
    company: 'Snapshot',
    quote:
      'Their AI roadmap gave us clarity and speed. We shipped an intelligent onboarding flow in under 6 weeks.',
  },
  {
    name: 'Sandra Novakovski',
    company: 'Clues',
    quote:
      'Excellent engineering quality and communication. They became a true extension of our product team.',
  },
  {
    name: 'Ann Winter',
    company: 'Orbitc',
    quote:
      'From discovery to launch, the process was structured and transparent. Highly recommended for AI-first builds.',
  },
]

export const partnerNames = [
  'Snapshot',
  'Recharge',
  'Genz',
  'Orbitc',
  'Clues',
  'Cloud',
]
