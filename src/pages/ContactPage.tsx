import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact</h1>
        <p className="lead narrow">
          Share your product goals and we will map a delivery plan with clear milestones.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Let's Work Together</h2>
          <p>
            Whether you're exploring AI opportunities, building a new product, or modernizing 
            existing systems, we'd love to hear about your project.
          </p>

          <h2>Contact Information</h2>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Email</strong>
            <p><a href="mailto:hello@senome.com">hello@senome.com</a></p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Phone</strong>
            <p>+1 (555) 123-4567</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Office</strong>
            <p>San Francisco, California</p>
          </div>

          <h2>Project Inquiry</h2>
          <p>
            For project inquiries, share:
          </p>
          <ul>
            <li>Your product vision and goals</li>
            <li>Timeline and budget range</li>
            <li>Current tech stack (if applicable)</li>
            <li>Team size and structure</li>
          </ul>

          <p style={{ marginTop: '2rem' }}>
            We typically respond within 24 hours.
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
