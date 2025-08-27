'use client';

import { useState } from 'react';
import Link from 'next/link';
import './NavBar.css';

export default function NavBar() {
  const [navCoverVisible, setNavCoverVisible] = useState(false);

  const handleNavClick = () => {
    setNavCoverVisible(false); // close menu when user clicks
  };

  return (
    <nav className="navBar">
      <div className="logo">
        <span className="logo-main">RARE</span>
        <br />
        <span className="logo-sub">
          SPECIALISED <b>NUTRITION</b>
        </span>
      </div>

      <ul className="navLinks">
        <li>
          <Link href="/" onClick={handleNavClick}>
            <i className="fa-solid fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleNavClick}>
            <i className="fa-solid fa-user"></i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/products" onClick={handleNavClick}>
            <i className="fa-solid fa-file-lines"></i>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link href="/didyouknow" onClick={handleNavClick}>
            <i className="fa-solid fa-pills"></i>
            <span>Did you know</span>
          </Link>
        </li>
      </ul>

      {/* Removed Book Consultation button */}

      <button
        className="menu-btn light bordered"
        onClick={() => {
          setNavCoverVisible(!navCoverVisible);
          window.scrollTo(0, 0);
        }}
      >
        Menu
      </button>

      {navCoverVisible ? (
        <div className="nav-cover">
          <ul className="navLinks">
            <li>
              <Link href="/" onClick={handleNavClick}>
                <button>
                  <i className="fa-solid fa-home"></i>
                  <span>Home</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleNavClick}>
                <button>
                  <i className="fa-solid fa-user"></i>
                  <span>About</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={handleNavClick}>
                <button>
                  <i className="fa-solid fa-file-lines"></i>
                  <span>Products</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/didyouknow" onClick={handleNavClick}>
                <button>
                  <i className="fa-solid fa-pills"></i>
                  <span>Did you know</span>
                </button>
              </Link>
            </li>
          </ul>
          {/* Removed Book Consultation button */}
        </div>
      ) : null}
    </nav>
  );
}
