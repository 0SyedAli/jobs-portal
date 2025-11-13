"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  my-navbar"
    >
      <div className="container px-4">
        <Link className="navbar-brand fw-bold" href="/">
          LOGO
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/educators">
                Educators
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mentorship">
                Mentorship
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/careers">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className=" btn btn-primary text-white ms-2" href="#register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
