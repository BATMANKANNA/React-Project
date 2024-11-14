import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout operations if needed
    // For now, just navigate to the signup page
    navigate('/');
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to the Grocery Shop!</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <section className="homepage-intro">
        <p>Browse our products and shop the freshest groceries online.</p>
      </section>
      <section className="product-list">
        <h2>Featured Products</h2>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <div className="product-details">
            <h3>Product 1</h3>
            <p>Description for Product 1</p>
            <p>$10.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 2" />
          <div className="product-details">
            <h3>Product 2</h3>
            <p>Description for Product 2</p>
            <p>$15.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 3" />
          <div className="product-details">
            <h3>Product 3</h3>
            <p>Description for Product 3</p>
            <p>$20.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
      <section className="promotions">
        <h2>Special Offers</h2>
        <div className="promotion-item">
          <h3>Offer 1</h3>
          <p>Get 20% off on your first order!</p>
        </div>
        <div className="promotion-item">
          <h3>Offer 2</h3>
          <p>Buy one, get one free on select items.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
