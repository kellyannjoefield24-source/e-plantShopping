import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Paradise Nursery</h1>
      <p className="about-us-description">
        At Paradise Nursery, we are passionate about bringing the beauty of nature into your home. 
        Our mission is to provide high-quality, sustainably sourced plants that not only enhance your 
        living space but also promote a healthier, greener lifestyle.
      </p>
      <p className="about-us-content">
        Our team of expert botanists and plant lovers is dedicated to ensuring each plant we sell 
        is healthy and ready to thrive in its new environment. Whether you are a seasoned gardener 
        or a first-time plant parent, we are here to support you every step of the way.
      </p>
      <div className="about-us-values">
        <h3>Our Core Values</h3>
        <ul>
          <li>Quality: Only the healthiest plants for our customers.</li>
          <li>Sustainability: Eco-friendly practices in everything we do.</li>
          <li>Community: Sharing the joy of gardening with everyone.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
