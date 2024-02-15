import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-title">
              <span>BCLC</span>
            </Link>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/#contact">Contact</HashLink>
          </li>
          <li>
            <HashLink to="/team">Team</HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
