import { Link } from 'react-router-dom'

export function CareersPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Join Our Team</p>
        <h1>Careers</h1>
        <p className="lead narrow">
          Join our team to build innovative products at the intersection of AI and UX.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Why Work With Us</h2>
          <ul>
            <li>Work on cutting-edge AI and web technologies</li>
            <li>Flexible work arrangements and competitive compensation</li>
            <li>Continuous learning and growth opportunities</li>
            <li>Collaborate with world-class engineers and designers</li>
            <li>Make an impact on real-world problems</li>
          </ul>

          <h2>Open Positions</h2>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Senior Full-Stack Engineer</strong>
            <p>Lead end-to-end product development with React, TypeScript, and Node.js</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>AI/ML Engineer</strong>
            <p>Build production-scale AI systems and integrate LLMs into applications</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Product Designer</strong>
            <p>Design intuitive experiences for complex software and AI applications</p>
          </div>

          <p style={{ marginTop: '2rem' }}>
            Interested? Send us your resume and portfolio at <strong>careers@softoryx.com</strong>
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
