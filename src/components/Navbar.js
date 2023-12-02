import React from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={logo} height="40px" width="40px"></img>
        {/* <a className="navbar-brand" href="/">
          Manage Wise
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse header-item" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Pricing
              </a>
            </li>
            {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            <li className="nav-item">
              <a className="nav-link active">Testimonials </a>
            </li>
            <li className="nav-item">
            <button type="button" class="btn bg-white">Buy Template</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
