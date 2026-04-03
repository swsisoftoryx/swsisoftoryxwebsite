import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">About Senome</p>
        <h1>About Us</h1>
        <p className="lead narrow">
          We are a multidisciplinary team blending strategy, design, and AI engineering.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Our Mission</h2>
          <p>
            We empower organizations through AI and modern software engineering. Our mission 
            is to build products that are not just technically excellent, but create real 
            business value and exceptional user experiences.
          </p>

          <h2>Our Team</h2>
          <p>
            Founded in 2022, Senome brings together experts from top tech companies and AI 
            research labs. We combine deep technical expertise with genuine entrepreneurial 
            experience to solve complex problems.
          </p>

          <h2>What Drives Us</h2>
          <ul>
            <li>Innovation at the intersection of AI and UX</li>
            <li>Excellence in every line of code</li>
            <li>Collaboration with visionary founders</li>
            <li>Measurable impact on business outcomes</li>
          </ul>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
