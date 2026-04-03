import { Link } from 'react-router-dom'

export function MobileAppDevelopmentPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Our Services</p>
        <h1>Mobile App Development</h1>
        <p className="lead narrow">
          Native-feel mobile applications for iOS and Android with robust backend integration.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Our Approach</h2>
          <ul>
            <li>Cross-platform development with React Native and SwiftUI</li>
            <li>Intuitive UX design optimized for mobile</li>
            <li>Real-time synchronization and offline support</li>
            <li>Security-first architecture</li>
            <li>App Store and Play Store deployment management</li>
          </ul>

          <h2>Recent Projects</h2>
          <p>
            We've delivered high-performance mobile apps for fintech, healthcare, and 
            e-commerce sectors with millions of active users.
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
