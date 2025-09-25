import React from 'react'

export default function ContactModal() {
  return (
     <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">
              Contact Us to Order
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>📞 +91 8624941205</p>
            <p>📧 ajit.silver@gmail.com</p>
            <p>📍 Kolhapur, Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  )
}
