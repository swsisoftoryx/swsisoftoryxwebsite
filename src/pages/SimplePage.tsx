import { Link } from 'react-router-dom'

type SimplePageProps = {
  title: string
  description: string
}

export function SimplePage({ title, description }: SimplePageProps) {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Company section</p>
        <h1>{title}</h1>
        <p className="lead narrow">{description}</p>
        <Link to="/" className="btn btn-small">
          Back to home
        </Link>
      </div>
    </section>
  )
}
