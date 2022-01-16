import React from 'react';
import image1 from '../images/photo1.jpeg';
import image2 from '../images/photo2.jpeg';
import image3 from '../images/photo3.jpeg';
function Carousel() {
  return (
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={image1}
            alt="Los Angeles"
            class="d-block w-100"
            style={{ height: '100vh' }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={image2}
            alt="Chicago"
            class="d-block w-100"
            style={{ height: '100vh' }}
          />
        </div>
        <div class="carousel-item">
          <img
            src={image3}
            alt="New York"
            class="d-block w-100"
            style={{ height: '100vh' }}
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
