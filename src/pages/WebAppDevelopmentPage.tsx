import { Link } from 'react-router-dom'

export function WebAppDevelopmentPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Our Services</p>
        <h1>Web App Development</h1>
        <p className="lead narrow">
          Fast, secure, and maintainable web applications built for product velocity.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Technologies We Use</h2>
          <ul>
            <li>Modern frontend: React, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Python, Go</li>
            <li>Databases: PostgreSQL, MongoDB, Redis</li>
            <li>Infrastructure: AWS, Vercel, Docker</li>
            <li>Testing: Automated testing and performance optimization</li>
          </ul>

          <h2>Our Process</h2>
          <p>
            We follow agile development practices with continuous deployment pipelines. 
            Every project includes monitoring, analytics, and scalability planning.
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
