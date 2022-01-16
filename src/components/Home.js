import React, { useState, useEffect } from 'react';
import Api from '../Apis/Api';
import Card from './Card';
import './styles/card.css';
function Home() {
  const [services, setservices] = useState([]);

  useEffect(() => {
    Api.get('/products').then(({ data }) => setservices(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-centre align-items-center procard">
      <h3 className="productHeading">Products</h3>
      {services.map(({ image, title, rating, description, price }, index) => {
        return (
          <Card
            key={index}
            image={image}
            title={title}
            rating={rating}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
}

export default Home;
