import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-title">
              <span>BC Linguistics Club</span>
            </Link>
            </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/eboard">Executive Board</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar