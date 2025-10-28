import React from "react";

export default function LogoModal() {
  return (
    <div
      className="modal fade"
      id="logoModal"
      tabIndex="-1"
      aria-labelledby="logoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="logoModalLabel">Ajit Jeweller Logo</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <img
              src="/logo.jpg"
              alt="Ajit Jeweller Logo"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
