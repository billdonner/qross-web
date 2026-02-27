import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🔲',
    title: 'Grid Navigation',
    description: 'Move through a colorful grid using 8-direction adjacency. Plan your route from corner to corner.',
  },
  {
    icon: '📐',
    title: 'Pick Your Corner',
    description: 'All 4 corners are open at the start. Choose your starting corner — the opposite becomes your goal.',
  },
  {
    icon: '🎯',
    title: '20+ Topics',
    description: 'From Science to Pop Culture, pick the topics you know best. Each topic gets its own color on the board.',
  },
  {
    icon: '💡',
    title: 'Smart Hints',
    description: 'Show a text hint (+1) or eliminate a wrong answer (+2). Use them wisely — they add to your score.',
  },
  {
    icon: '🎭',
    title: 'Game Variants',
    description: 'Face Up (all visible), Face Down (colors only), or Blind (total fog of war). Three ways to play.',
  },
  {
    icon: '🏆',
    title: 'Game Center',
    description: 'Compete on leaderboards, share emoji result grids, and track your stats across board sizes.',
  },
]

function Landing() {
  return (
    <div className="page">
      <section className="hero">
        <span className="hero-badge">iOS Trivia Game</span>
        <h1>Navigate. Answer. Conquer.</h1>
        <p>
          Qross is a grid-based trivia game where strategy meets knowledge.
          Navigate from corner to corner by answering questions — pick your
          path, use hints wisely, and beat your best score.
        </p>
        <Link to="/download" className="hero-cta">
          Download for iOS
        </Link>
      </section>

      <section className="features">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Landing
