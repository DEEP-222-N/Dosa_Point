import React, { useState } from "react";
import "../styles/Carousel.css";

const images = [
  "/images/classic-masala-dosa.jpg",
  "/images/sada dosa.jpg",
  "/images/Onion Rava.webp",
  "/images/Ghee Dosa.jpg",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <h2>Our Delicacies!</h2>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[index]} alt="Dish" />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel;
