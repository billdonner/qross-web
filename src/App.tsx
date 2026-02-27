import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Landing from './pages/Landing'
import HowToPlay from './pages/HowToPlay'
import Download from './pages/Download'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" className="nav-logo">Qross</NavLink>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/how-to-play">How to Play</NavLink></li>
          <li><NavLink to="/download">Download</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/download" element={<Download />} />
      </Routes>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Qross. Built by Bill Donner.
      </footer>
    </BrowserRouter>
  )
}

export default App
