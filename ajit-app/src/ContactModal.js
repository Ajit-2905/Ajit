import React from 'react'
import  { useState } from "react";

export default function ContactModal() {
    const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
    console.log(formData);
    setFormData({
      name: "",
      contact: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
     <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="contactModalLabel">
              Contact Us
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">

              {/* Left side: Info */}
              <div className="col-md-6">
                <div className="p-3 border rounded test-center">
                  <img
                    src="Logo.png"
                    alt="AJ Logo"
                    className="d-block mx-auto"
                    style={{ width: "300px", marginBottom: "15px" }}
                  />
                <h5>Ajit Jewell</h5>
                <p>Mfg. & Wholesaler All Kind of Silver Ornaments</p>
                <p>
                  <strong>Prop.:</strong> Suresh Bapuso Valivade
                  <br />
                  Mahaveer Colony, Shahu Nagar,
                  <br />
                  Pattan Kodoli.
                  <br />
                  Tal. Hatkanangale, Dist. Kolhapur, Maharashtra
                </p>
                <p>
                  <strong>Mobile:</strong> 08624941205, 09822040108
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:ajitvalivade1008@gmail.com">
                    ajitvalivade1008@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="http://ajitjewell.com"
                      target="_blank" rel="noreferrer">
                        ajitjewell.com
                      </a>
                </p>
                </div>
              </div>

            {/* Right side: Map */}
          <div className="col-md-6">
            <div className="p-3 border rounded h-100">
              <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
      <div className="container mt-5 mb-5">
      <div className="card shadow-sm">
        <div className="card-header text-center bg-light">
          <h4 className="fw-bold mb-0">ENQUIRY</h4>
          <small className="text-muted">Required fields are bold</small>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3 row align-items-center">
              <label className="col-sm-3 fw-bold">Your Name:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Contact */}
            <div className="mb-3 row align-items-center">
              <label className="col-sm-3 fw-bold">Contact No.:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3 row align-items-center">
              <label className="col-sm-3 fw-bold">E-mail:</label>
              <div className="col-sm-9">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-3 row align-items-center">
              <label className="col-sm-3 fw-bold">Subject:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Your comments / Enquiry:</label>
              <div className="col-sm-9">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-light px-5">
                Send it!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


            
          </div>
        </div>
      </div>
    
  );
}
