import React, { useState } from 'react';
import RecipeModal from './RecipeModal';
import "../styles/Card.css";

const Card = ({ id, title, description, image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {showModal && (
        <RecipeModal 
          recipe={{ id, title, description, image }}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Card;
