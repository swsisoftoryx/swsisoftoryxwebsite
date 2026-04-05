import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navSections } from '../data/content'
import { useUiStore } from '../store/uiStore'

const serviceLinks = [
  { label: 'AI Solutions', to: '/services/ai-solutions' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'Web App Development', to: '/services/web-app-development' },
  { label: 'AI Agent Creation', to: '/services/ai-agent-creation' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
]

// ✅ NEW: Finance links
const financeLinks = [
  { label: 'Stock Analysis', to: '/finance/stock-analysis' },
  { label: 'Stock Screener', to: '/finance/stock-screener' },
  { label: 'Important Links', to: '/finance/important-links' },
  { label: 'Stock Analysis using AI', to: '/finance/ai-analysis' },
]

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUiStore()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const closeDropdown = () => setOpenDropdown(null)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={closeMobileMenu}>
          <span className="brand-dot" />
          SWSI Softoryx
        </Link>

        <nav className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          
          {/* Services */}
          <div 
            className={`nav-dropdown ${openDropdown === 'services' ? 'active' : ''}`}
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="nav-trigger" type="button">
              Services <ChevronDown size={16} />
            </button>
            <div className="nav-dropdown-menu">
              {serviceLinks.map((item) => (
                <NavLink 
                  key={item.to} 
                  to={item.to} 
                  onClick={() => {
                    closeMobileMenu()
                    closeDropdown()
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Company */}
          <div 
            className={`nav-dropdown ${openDropdown === 'company' ? 'active' : ''}`}
            onMouseEnter={() => setOpenDropdown('company')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="nav-trigger" type="button">
              Company <ChevronDown size={16} />
            </button>
            <div className="nav-dropdown-menu">
              {companyLinks.map((item) => (
                <NavLink 
                  key={item.to} 
                  to={item.to} 
                  onClick={() => {
                    closeMobileMenu()
                    closeDropdown()
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ✅ Finance Dropdown */}
          <div 
            className={`nav-dropdown ${openDropdown === 'finance' ? 'active' : ''}`}
            onMouseEnter={() => setOpenDropdown('finance')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="nav-trigger" type="button">
              Finance <ChevronDown size={16} />
            </button>
            <div className="nav-dropdown-menu">
              {financeLinks.map((item) => (
                <NavLink 
                  key={item.to} 
                  to={item.to} 
                  onClick={() => {
                    closeMobileMenu()
                    closeDropdown()
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className="btn btn-small" onClick={closeMobileMenu}>
            Contact
          </NavLink>

          {/* Mobile Menu */}
          <div className="mobile-only nav-mobile-groups">
            
            <h4>Service Options</h4>
            <ul>
              {navSections.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Company Sections</h4>
            <ul>
              {navSections.company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* ✅ Finance in Mobile */}
            <h4>Finance</h4>
            <ul>
              {financeLinks.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} onClick={closeMobileMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>
        </nav>

        <button className="menu-btn" type="button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}