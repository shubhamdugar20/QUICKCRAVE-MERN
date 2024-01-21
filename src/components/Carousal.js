import React from 'react';

export default function Carousal() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* Your carousel indicators here */}
      </div>

      <div className="carousel-inner" style={{ maxHeight: "500px" }}>
        <div className="carousel-item mt-5">
          <div className="image-container">
          
            <img src="logo-color.png" className="img-fluid" alt="Original Image" />
          </div>
        </div>

        <div className="carousel-item">
          <img src="pizza.jpg" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
        </div>

        <div className="carousel-item">
          <img src="rajma.jpg" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
        </div>

        <div className="carousel-item">
          <img src="burger.jpg" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
        </div>
      </div>

      {/* Your search form can be placed inside the carousel */}
      <div className="carousel-caption d-none d-md-block" style={{ position: "absolute", top: 0, right: 0, zIndex: 10 }}>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
