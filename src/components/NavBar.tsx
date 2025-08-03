'use client';

import { useState } from 'react';
import Link from 'next/link';
import './NavBar.css';export default function NavBar() {
  const [navCoverVisible, setNavCoverVisible] = useState(false);

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
          <Link href="/">
            <i className="fa-solid fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <i className="fa-solid fa-user"></i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <i className="fa-solid fa-file-lines"></i>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link href="/didyouknow">
            <i className="fa-solid fa-pills"></i>
            <span>Did you know</span>
          </Link>
        </li>
      </ul>
      <a href="https://calendly.com/nganduntita" target="_blank" rel="noopener noreferrer">
        <button className="contact-btn">Book Consultation</button>
      </a>

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
              <Link href="/">
                <button>
                  <i className="fa-solid fa-home"></i>
                  <span>Home</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button>
                  <i className="fa-solid fa-user"></i>
                  <span>About</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <button>
                  <i className="fa-solid fa-file-lines"></i>
                  <span>Products</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/didyouknow">
                <button>
                  <i className="fa-solid fa-pills"></i>
                  <span>Did you know</span>
                </button>
              </Link>
            </li>
          </ul>
          <Link href="https://calendly.com/nganduntita">
            <button className="light menu-contact-btn">Book Consultation</button>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}