import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import { heroStats, partnerNames, services, testimonials } from '../data/content'
import { fetchBlogPosts } from '../services/blogService'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function HomePage() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  })

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-bg-ai" />
        <div className="container hero-grid">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="hero-copy"
          >
            <p className="eyebrow">Advanced digital engineering</p>
            <h1>AI-powered solutions for web, mobile, and intelligent agents.</h1>
            <p className="lead">
              We build modern products that blend AI, product strategy, and
              scalable engineering for growth-stage and enterprise teams.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#services">
                Explore services <ArrowRight size={16} />
              </a>
              <a className="btn btn-ghost" href="#contact-cta">
                Free consultation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-panel"
          >
            {/* <img
              src="https://assets-global.website-files.com/64c9f2789e4862de1ee69764/64d9eb38f9dc556c3999e7c7_ai-chip-artificial-intelligence-future-technology-innovation%201.webp"
              alt="AI technology background"
            /> */}
            <div className="stat-grid">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our specialties</p>
            <h2>What we build</h2>
          </div>
          <div className="cards-grid">
            {services.map((service, idx) => {
              const Icon = service.icon

              return (
                <motion.article
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <Icon size={24} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Happy customers</p>
            <h2>Testimonials</h2>
          </div>
          <div className="cards-grid three-cols">
            {testimonials.map((item) => (
              <article key={item.name} className="quote-card">
                <p>{item.quote}</p>
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </article>
            ))}
          </div>

          <div className="partners-row" aria-label="Partner companies">
            {partnerNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">News and insights</p>
            <h2>Company blog</h2>
          </div>

          <div className="cards-grid three-cols">
            {isLoading
              ? [1, 2, 3].map((item) => (
                  <article key={item} className="blog-card loading-card">
                    Loading latest article...
                  </article>
                ))
              : posts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <button type="button" className="read-more">
                      Read more <ArrowRight size={14} />
                    </button>
                  </article>
                ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="contact-cta">
        <div className="container cta-wrap">
          <h2>Ready to build your next AI product?</h2>
          <p>
            Let us help you design, ship, and scale your next generation web or
            mobile solution.
          </p>
          <a className="btn" href="/contact">
            Book a free consultation
          </a>
        </div>
      </section>
    </>
  )
}
