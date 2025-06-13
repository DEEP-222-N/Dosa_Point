import React from 'react';
import '../styles/AboutModal.css';

const AboutModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content about-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>About Dosa Point</h2>
        </div>
        <div className="modal-body">
          <div className="about-content">
            <div className="about-section">
              <h3>Our Mission</h3>
              <p>Dosa Point is your one-stop digital cookbook for exploring the diverse and delicious world of dosas. Whether you're a beginner or an experienced cook, we provide easy-to-follow recipes, tips, and regional variations of this iconic South Indian dish.</p>
            </div>

            <div className="about-section">
              <h3>What We Offer</h3>
              <ul>
                <li>Step-by-step dosa recipes from classic to fusion</li>
                <li>Tips on batter preparation and fermentation</li>
                <li>Cooking guides for various dosa types like Masala, Rava, Ragi, Cheese, and more</li>
                <li>Nutrition information and serving suggestions</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Why Dosa?</h3>
              <p>Dosa is not just food—it's a tradition. At Dosa Point, we celebrate this heritage by sharing recipes that bring people together, one crisp bite at a time. From breakfast to dinner, dosas are a wholesome and flavorful choice for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
