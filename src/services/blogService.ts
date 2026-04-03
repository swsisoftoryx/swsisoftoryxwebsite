export type BlogPost = {
  id: string
  title: string
  summary: string
}

const posts: BlogPost[] = [
  {
    id: 'ai-product-strategy',
    title: 'How to shape an AI product strategy that scales',
    summary:
      'A practical framework for aligning data, model quality, and user workflows before implementation.',
  },
  {
    id: 'agentic-automation',
    title: 'Designing agentic automations for ops teams',
    summary:
      'Patterns for safely delegating repetitive decisions to AI agents with confidence checks and audits.',
  },
  {
    id: 'mobile-ai-experiences',
    title: 'Bringing AI features into mobile experiences',
    summary:
      'What we learned integrating retrieval, personalization, and on-device performance constraints.',
  },
]

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return posts
}
