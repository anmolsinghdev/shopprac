import React from 'react';
import './styles/card.css';
function Card({ title, image, rating, description, price }) {
  return (
    <div
      className=" card card2"
      style={{
        width: '15rem',
        height: '30rem',
        textAlign: 'centre',
        // padding: '1rem',
      }}
    >
      <img
        className="card-img-top"
        src={image}
        alt=""
        style={{ height: '10rem', padding: '.5rem' }}
      />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        {/* <p className="card-text">{description}</p> */}
        <p className="card-text">
          Rating : <span className="active">{rating.rate}</span>
        </p>
        <p className="card-text">
          Price : <span className="active">{price}</span>
        </p>
        <a href="/" className="btn btn-primary btnsub">
          See Product
        </a>
      </div>
    </div>
  );
}

export default Card;
