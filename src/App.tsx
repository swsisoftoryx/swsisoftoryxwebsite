import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AIRecommendationsPage } from './pages/AIRecommendationsPage'
import { MobileAppDevelopmentPage } from './pages/MobileAppDevelopmentPage'
import { WebAppDevelopmentPage } from './pages/WebAppDevelopmentPage'
import { AIAgentCreationPage } from './pages/AIAgentCreationPage'
import { AboutPage } from './pages/AboutPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { CareersPage } from './pages/CareersPage'
import { BlogPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="page-loader">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/ai-solutions" element={<AIRecommendationsPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopmentPage />} />
          <Route path="/services/ai-agent-creation" element={<AIAgentCreationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
