import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./styles/Navbar.css";
import "./styles/Carousel.css";
import "./styles/Card.css";
import "./styles/Footer.css";

const cardData = [
  { id: 1, title: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato masala, served with sambar and chutney.", image: "/images/classic-masala-dosa.jpg" },
  { id: 2, title: "Rava Dosa", description: "Crispy semolina crepe with a unique texture, served with sambar and coconut chutney.", image: "/images/rava Dosa.jpg" },
  { id: 3, title: "Onion Rava Dosa", description: "Crispy semolina crepe with caramelized onions, served with sambar and chutney.", image: "/images/Onion Rava.webp" },
  { id: 4, title: "Set Dosa", description: "Soft and spongy mini dosas served in a set of three with sambar and chutney.", image: "/images/Set-Dosa.jpg" },
  { id: 5, title: "Paper Dosa", description: "Extra thin and crispy dosa, served with sambar and chutney.", image: "/images/paper.jpeg" },
  { id: 6, title: "Ghee Roast Dosa", description: "Crispy dosa roasted in pure ghee for rich flavor, served with sambar and chutney.", image: "/images/Ghee Dosa.jpg" },
  { id: 7, title: "Ragi Dosa", description: "Healthy finger millet dosa with a unique taste, served with sambar and chutney.", image: "/images/ragi dosa.jpeg" },
  { id: 8, title: "Sada Dosa", description: "Classic plain dosa, crispy and golden, served with sambar and chutney.", image: "/images/sada dosa.jpg" },
  { id: 9, title: "Mysore Masala Dosa", description: "Dosa with spicy red chutney spread and potato masala filling.", image: "/images/Mysore Masala Dosa.jpeg" },
  { id: 10, title: "Podi Dosa", description: "Dosa sprinkled with aromatic spice powder (gunpowder), served with ghee.", image: "/images/Podi Dosa.jpeg" },
  { id: 11, title: "Jini Dosa", description: "Fusion dosa with a unique blend of spices, vegetables, and cheese, served with special chutney.", image: "/images/jini dosa.jpeg" },
  { id: 12, title: "Cheese Dosa", description: "Dosa filled with melted cheese and potato masala, served with sambar and chutney.", image: "/images/cheese Dosa.jpg" },
];

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="card-container">
        {cardData.map((card) => <Card key={card.id} {...card} />)}
      </div>
      
       <Footer/>
    </div>
  );
}

export default App;
