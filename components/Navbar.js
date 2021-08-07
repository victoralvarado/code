import Link from "next/link";
import {publics} from "../profile"
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#252E3C'}}>
    <div className="container">
      {publics.map(({nav},i)=>(
        <Link href="/" key={i}>
        <img src={nav} alt="VA" height="45px" />
      </Link>
      ))}
      

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">Github</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contactar</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
