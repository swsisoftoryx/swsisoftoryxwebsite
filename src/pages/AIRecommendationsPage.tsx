import { Link } from 'react-router-dom'

export function AIRecommendationsPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Our Services</p>
        <h1>AI Solutions</h1>
        <p className="lead narrow">
          We design and deploy custom AI solutions tailored to your business workflows.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>What We Offer</h2>
          <ul>
            <li>Custom LLM integration and fine-tuning</li>
            <li>Predictive analytics and ML models</li>
            <li>Intelligent automation workflows</li>
            <li>AI-powered data processing pipelines</li>
          </ul>

          <h2>Why Choose Us</h2>
          <p>
            Our AI engineers have deep expertise in production-scale AI systems. We focus on 
            practical implementations that deliver measurable business value.
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
