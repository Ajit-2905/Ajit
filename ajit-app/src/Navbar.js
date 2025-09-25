import React from 'react'
import "./Navbar.css";
import ContactModal from "./ContactModal";

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar bg-body-tertiary">
      <a className="navbar-brand" href="/">
      <img src="/logo.jpg" alt="Logo" width="120" height="120" className="d-inline-block align-text-top"/>
      Ajit Jeweller
    </a>
      <div className="flex-grow-1 d-flex flex-column">

          {/* Top Layer */}
          <div className="top-layer d-flex justify-content-center py-2">
            <a href="/brochure.pdf" className="btn btn-warning fw-bold" download>
              Download Brochure <i className="bi bi-download ms-1"></i>
            </a>
          </div>

          {/* Separator */}
          <div className="separator"></div>

          {/* Bottom Layer */}
          <div className="bottom-layer d-flex justify-content-center">
            <ul className="nav nav-pills">

              {/* Home */}
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
            </ul>

                <li className="nav-item position-static dropdown">
                    <a className="nav-link dropdown-toggle" href="/" 
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Dark Dropdown link
                    </a>

                <div className="dropdown-menu mega-menu p-4 border-0 shadow">
                    <div className="row">
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Category 1</h6>
                        <a className="dropdown-item" href="/">Aarti Set</a>
                        <a className="dropdown-item" href="/">Agarbatti Stand</a>
                        <a className="dropdown-item" href="/">Animal</a>
                        <a className="dropdown-item" href="/">Diya</a>
                        <a className="dropdown-item" href="/">Doodh Bodla</a>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Category 2</h6>
                        <a className="dropdown-item" href="/">Glass</a>
                        <a className="dropdown-item" href="/">Lota</a>
                        <a className="dropdown-item" href="/">Matka Bowl</a>
                        <a className="dropdown-item" href="/">Plate</a>
                        <a className="dropdown-item" href="/">Pokal Murti</a>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Category 3</h6>
                        <a className="dropdown-item" href="/">Bracelet</a>
                        <a className="dropdown-item" href="/">Chain</a>
                        <a className="dropdown-item" href="/">Ferva</a>
                        <a className="dropdown-item" href="/">Payal</a>
                        <a className="dropdown-item" href="/">Solid Murti</a>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Category 4</h6>
                        <a className="dropdown-item" href="/">Mor Jodkamal</a>
                        <a className="dropdown-item" href="/">Loose Kamal</a>
                        <a className="dropdown-item" href="/">Dandi Jodkamal</a>
                        <a className="dropdown-item" href="/">Karanda</a>
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
                  Contact US
                </button>
                <ContactModal />
              </li>
        </div>
  </div>
  </div>
  </div>
</nav>
  )
}
