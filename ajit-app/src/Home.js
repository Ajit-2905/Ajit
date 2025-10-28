import React from "react";

export default function Home() {
  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={`${process.env.PUBLIC_URL}/payal.jpg`} className="d-block w-100 banner-img" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/banner2.jpg`} className="d-block w-100 banner-img" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/banner3.jpg`} className="d-block w-100 banner-img" alt="Banner 3" />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/banner4.jpg`} className="d-block w-100 banner-img" alt="Banner 4" />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/banner5.jpg`} className="d-block w-100 banner-img" alt="Banner 5" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
