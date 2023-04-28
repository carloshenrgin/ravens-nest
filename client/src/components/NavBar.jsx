import { Link } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import LogoDesktop from "../assets/images/logo-desktop.png";
import "../assets/styles/NavBar.css";

function NavBar() {
  const [nav, toggleNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <header>
      <nav className={`navbar ${nav && "nav-open"}`}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={LogoDesktop} alt="Raven's Nest Logo" />
            </Link>
          </div>

          <button
            type="button"
            className="mobile-button"
            onClick={() => toggleNav((prevNav) => !prevNav)}
          >
            <List
              className="mobile-nav-icon mobile-nav-icon--closed"
              style={{ color: "#ebdbfe" }}
              size={32}
            />
            <X
              className="mobile-nav-icon mobile-nav-icon--open"
              style={{ color: "#ebdbfe" }}
              size={32}
            />
          </button>

          <div className="nav">
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className="nav-link link"
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/characterbuilder"
                  className="nav-link link"
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  Character Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/charactermanager"
                  className="nav-link link"
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  Character Manager
                </Link>
              </li>
              <li>
                <Link
                  to="/dice"
                  className="nav-link link"
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  Dice Roller
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
