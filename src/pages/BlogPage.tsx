import { Link } from 'react-router-dom'

export function BlogPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Knowledge Hub</p>
        <h1>Company Blog</h1>
        <p className="lead narrow">
          Insights on product engineering, AI systems, and modern development practices.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Latest Articles</h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Building Production-Ready LLM Applications</h3>
            <p>
              A deep dive into handling hallucinations, reducing latency, and scaling AI 
              applications for production use cases. Learn from our experience deploying 
              LLMs at scale.
            </p>
            <p><em>March 15, 2026</em></p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>React Performance: From Slow to 60fps</h3>
            <p>
              Practical strategies for optimizing React applications. We cover code splitting, 
              lazy loading, and using profiling tools to identify bottlenecks.
            </p>
            <p><em>February 28, 2026</em></p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>The Art of Product Engineering</h3>
            <p>
              Beyond just shipping code. Exploring how good product engineering combines 
              technical excellence with business thinking and user empathy.
            </p>
            <p><em>February 10, 2026</em></p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Microservices vs Monoliths: Making the Right Choice</h3>
            <p>
              When to use microservices and when to keep things simple. We share lessons 
              learned from real projects.
            </p>
            <p><em>January 22, 2026</em></p>
          </div>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
