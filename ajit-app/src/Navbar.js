import React from "react";
import "./Navbar.css";
//import Home from "./Home"
import ContactModal from "./ContactModal";
// import LogoModal from "./LogoModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Left Side - Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/Logo.png"
            alt="Logo"
            width="150"
            height="150"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold">Ajit Jewell</span>
        </a>
        
        {/* <a
            className="navbar-brand me-4"
            href="/"
            data-bs-toggle="modal"
            data-bs-target="/logoModal"
>
          <img
            src="/logo.jpg"
            alt="Logo"
            width="auto"
            height="150"
            // className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold">Ajit Jeweller</span>
        </a>
          {/* Include the logo modal at the end of Navbar */}
          {/* <LogoModal />  */}

        {/* Right Side - Layers */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Top Layer */}
          <div className="top-layer">
            <a href="/brochure.pdf" className="btn btn-warning fw-bold" download>
              Download Brochure <i className="bi bi-download ms-1"></i>
            </a>
          </div>

          {/* Separator */}
          <div className="separator"></div>

          {/* Bottom Layer */}
          <div className="bottom-layer">
            <ul className="nav nav-pills justify-content-center align-items-center">

              {/* Home */}
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
               
              </li>

              {/* About Us */}
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>

                {/* Mega Menu */}
                <div className="dropdown-menu mega-menu p-4 border-0 shadow">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Fancy Item</h6>
                      <a className="dropdown-item" href="/">Aarti Set</a>
                      <a className="dropdown-item" href="/">Agarbatti Stand</a>
                      <a className="dropdown-item" href="/">Animal</a>
                      <a className="dropdown-item" href="/">Diya</a>
                      <a className="dropdown-item" href="/">Doodh Bodla</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Plate Item</h6>
                      <a className="dropdown-item" href="/">Glass</a>
                      <a className="dropdown-item" href="/">Lota</a>
                      <a className="dropdown-item" href="/">Matka Bowl</a>
                      <a className="dropdown-item" href="/">Plate</a>
                      <a className="dropdown-item" href="/">Karanda</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Regular Item</h6>
                      <li><Link className="dropdown-item" to="/Pages/Payal">Payal</Link></li>
                      <li><Link className="dropdown-item" to="/Pages/Chain">Chain</Link></li>
                      <li><Link className="dropdown-item" to="/Pages/Ferva">Ferva</Link></li>
                      <li><Link className="dropdown-item" to="/Pages/Bracelet">Bracelet</Link></li>
                      <li><Link className="dropdown-item" to="/Pages/Vala">Vala</Link></li>
                    </div>
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Designer Item</h6>
                      <a className="dropdown-item" href="/">Mor Jodkamal</a>
                      <a className="dropdown-item" href="/">Loose Kamal</a>
                      <a className="dropdown-item" href="/">Dandi Jodkamal</a>
                      <a className="dropdown-item" href="/">Murti</a>
                      <a className="dropdown-item" href="/">Niranjan</a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Contact Modal */}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Contact Us
                </button>
                <ContactModal />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
