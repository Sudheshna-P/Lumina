import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './ProductList.css';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-container">
      {products.map((p) => (
        <div className="card" key={p._id}>
          <img src={p.image} alt={p.name} className="image" />
          <div className="info">
            <h3 className="title">{p.name}</h3>
            <p className="des">{p.description}</p>
            <p className="price">₹{p.price}</p>
            <button className="button" onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
