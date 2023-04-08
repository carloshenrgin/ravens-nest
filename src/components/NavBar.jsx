import { Link } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";
import { useState } from "react";
import LogoDesktop from "../assets/images/logo-desktop.png";
import "../assets/styles/NavBar.css";

function NavBar() {
  const [nav, toggleNav] = useState(false);

  return (
    <nav className={`navbar ${nav && "nav-open"}`}>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LogoDesktop} alt="Raven's Nest Logo" />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-button"
          onClick={() => toggleNav(!nav)}
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
                className="nav-link"
                onClick={() => {
                  toggleNav(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/char"
                className="nav-link"
                onClick={() => {
                  toggleNav(false);
                }}
              >
                Character Builder
              </Link>
            </li>
            <li>
              <Link
                to="/dice"
                className="nav-link"
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
  );

  // return (
  //   <header className={`header ${nav ? "nav-open" : ""}`}>
  //     <Link to="/">
  //       <img className="logo" src={LogoDesktop} alt="Raven's Nest Logo" />
  //     </Link>

  //     <nav className="main-nav">
  //       <ul className="main-nav-list">
  //         <li>
  //           <Link
  //             to="/"
  //             className="nav-link"
  //             onClick={() => {
  //               toggleNav(false);
  //             }}
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/char"
  //             className="nav-link"
  //             onClick={() => {
  //               toggleNav(false);
  //             }}
  //           >
  //             Character Builder
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/dice"
  //             className="nav-link"
  //             onClick={() => {
  //               toggleNav(false);
  //             }}
  //           >
  //             Dice Roller
  //           </Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <button
  //       type="button"
  //       className="mobile-button"
  //       onClick={() => {
  //         toggleNav(!nav);
  //       }}
  //     >
  //       {/* <List className="mobile-nav-icon mobile-nav-icon--closed" size={36} /> */}
  //       {/* <X className="mobile-nav-icon mobile-nav-icon--open" size={36} /> */}
  //     </button>
  //   </header>
  // );
}

export default NavBar;
