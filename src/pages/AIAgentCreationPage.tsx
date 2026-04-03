import { Link } from 'react-router-dom'

export function AIAgentCreationPage() {
  return (
    <section className="section inner-page">
      <div className="container">
        <p className="eyebrow">Our Services</p>
        <h1>AI Agent Creation</h1>
        <p className="lead narrow">
          Autonomous AI agents for internal operations, support, and knowledge workflows.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Agent Capabilities</h2>
          <ul>
            <li>Knowledge base and document QA agents</li>
            <li>Customer support automation</li>
            <li>Internal process automation</li>
            <li>Multi-turn conversational workflows</li>
            <li>Tool integration and API composition</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            We build agents using the latest LLM technologies with proper context management, 
            error handling, and fallback mechanisms for production reliability.
          </p>

          <Link to="/" className="btn btn-small">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
