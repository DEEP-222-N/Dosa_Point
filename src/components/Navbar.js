import React, { useState } from 'react';
import '../styles/Navbar.css';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';
import RecipeGuide from './RecipeGuide';

const Navbar = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showRecipeGuide, setShowRecipeGuide] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAboutModal(true);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleRecipeGuideClick = (e) => {
    e.preventDefault();
    setShowRecipeGuide(true);
  };

  const handleCloseAbout = () => {
    setShowAboutModal(false);
  };

  const handleCloseContact = () => {
    setShowContactModal(false);
  };

  const handleCloseRecipeGuide = () => {
    setShowRecipeGuide(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.webp" alt="Dosa Point Logo" />
        <h1>Dosa Point</h1>
      </div>
      <ul className="nav-links">
        <li><button onClick={handleAboutClick} className="nav-button">About</button></li>
        <li><button onClick={handleRecipeGuideClick} className="nav-button">Tips & Chutneys</button></li>
        <li><button onClick={handleContactClick} className="nav-button">Contact</button></li>
      </ul>
      {showAboutModal && <AboutModal onClose={handleCloseAbout} />}
      {showContactModal && <ContactModal onClose={handleCloseContact} />}
      {showRecipeGuide && <RecipeGuide onClose={handleCloseRecipeGuide} />}
    </nav>
  );
};

export default Navbar;

