import { Link } from 'react-router-dom'

export function CaseStudiesPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Success Stories</p>
        <h1>Case Studies</h1>
        <p className="lead narrow">
          Explore how we have helped companies launch impactful AI and software products.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Featured Projects</h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3>FinTech Platform Modernization</h3>
            <p>
              Rebuilt a legacy banking platform with React, Node.js, and microservices 
              architecture. Reduced transaction processing time by 60% and improved user 
              satisfaction scores by 45%.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>AI-Powered Customer Support</h3>
            <p>
              Developed an intelligent support agent that reduced response time from hours 
              to seconds. Handled 80% of queries automatically, improving customer satisfaction 
              and reducing support costs.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Healthcare Mobile App</h3>
            <p>
              Built a HIPAA-compliant mobile application connecting patients with healthcare 
              providers. Supported 500K+ users with real-time notifications and secure 
              messaging.
            </p>
          </div>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
