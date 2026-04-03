import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>SWSI Softoryx</h3>
          <p>
            AI and product engineering company delivering intelligent web and
            mobile platforms.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/ai-solutions">AI Solutions</Link>
            </li>
            <li>
              <Link to="/services/mobile-app-development">Mobile Apps</Link>
            </li>
            <li>
              <Link to="/services/web-app-development">Web Apps</Link>
            </li>
            <li>
              <Link to="/services/ai-agent-creation">AI Agents</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 SWSI Softoryx Labs. All rights reserved.</p>
      </div>
    </footer>
  )
}
