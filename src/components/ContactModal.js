import React from 'react';
import '../styles/ContactModal.css';

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content contact-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>Contact Us</h2>
        </div>
        <div className="modal-body">
          <div className="contact-content">
            <div className="contact-section">
              <h3>Get in Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div className="info">
                    <h4>Phone</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <div className="info">
                    <h4>Email</h4>
                    <p>dosapoint@gmail.com</p>
                    <p>info@dosapoint.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">📍</span>
                  <div className="info">
                    <h4>Location</h4>
                    <p>123 Dosa Street</p>
                    <p>Foodie City, State - 123456</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/" className="social-link">
                  <span className="icon">📱</span>
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/" className="social-link">
                  <span className="icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a href="https://x.com/" className="social-link">
                  <span className="icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="https://wa.me/919876543210" className="social-link">
                  <span className="icon">📸</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="contact-section">
              <h3>Quick Contact</h3>
              <p className="note">For any queries or feedback, feel free to reach out to us through any of the above channels. We'll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 