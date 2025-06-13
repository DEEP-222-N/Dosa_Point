import React from 'react';
import '../styles/RecipeModal.css';

const getDosaRecipe = (title) => {
  const recipes = {
    "Masala Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal (black gram)",
        "1/2 tsp fenugreek seeds",
        "2-3 medium potatoes",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1/2 tsp mustard seeds",
        "1/2 tsp turmeric powder",
        "Salt to taste",
        "Oil for cooking"
      ],
      instructions: [
        "Soak rice and urad dal separately for 4-6 hours",
        "Grind them separately to make a smooth batter",
        "Mix both batters, add salt and ferment overnight",
        "For masala: Boil and mash potatoes",
        "Temper mustard seeds, add onions, chilies, and spices",
        "Mix with mashed potatoes",
        "Spread dosa batter on hot tawa",
        "Add potato masala in the center",
        "Fold and serve with sambar and chutney"
      ]
    },
    "Rava Dosa": {
      ingredients: [
        "1 cup semolina (rava)",
        "1/4 cup rice flour",
        "1/4 cup all-purpose flour",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 inch ginger, grated",
        "1/2 tsp cumin seeds",
        "1/2 tsp black pepper",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Mix all dry ingredients together",
        "Add chopped onions, chilies, and ginger",
        "Add water gradually to make a thin batter",
        "Let it rest for 20-30 minutes",
        "Heat tawa and pour batter in circular motion",
        "Add oil around the edges",
        "Cook until crispy and golden",
        "Serve hot with sambar and chutney"
      ]
    },
    "Onion Rava Dosa": {
      ingredients: [
        "1 cup semolina (rava)",
        "1/4 cup rice flour",
        "1/4 cup all-purpose flour",
        "2 onions, finely chopped",
        "2 green chilies, chopped",
        "1 inch ginger, grated",
        "1/2 tsp cumin seeds",
        "1/2 tsp black pepper",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Mix all dry ingredients together",
        "Add chopped onions, chilies, and ginger",
        "Add water gradually to make a thin batter",
        "Let it rest for 20-30 minutes",
        "Heat tawa and pour batter in circular motion",
        "Add extra onions on top",
        "Add oil around the edges",
        "Cook until crispy and golden",
        "Serve hot with sambar and chutney"
      ]
    },
    "Set Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 cup poha (flattened rice)",
        "1/2 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Soak rice, urad dal, and poha separately",
        "Grind them together to make a smooth batter",
        "Add salt and ferment for 8-10 hours",
        "Heat tawa and pour small circles of batter",
        "Cook on low flame until soft and spongy",
        "Serve set of three dosas with sambar and chutney"
      ]
    },
    "Paper Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Soak rice and urad dal separately",
        "Grind them separately to make a smooth batter",
        "Mix both batters, add salt and ferment overnight",
        "Make the batter slightly thinner than regular dosa",
        "Heat tawa and pour thin layer of batter",
        "Cook until extra crispy and paper-thin",
        "Fold and serve with sambar and chutney"
      ]
    },
    "Ghee Roast Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "Pure ghee for roasting"
      ],
      instructions: [
        "Soak rice and urad dal separately",
        "Grind them separately to make a smooth batter",
        "Mix both batters, add salt and ferment overnight",
        "Heat tawa and pour batter",
        "Use pure ghee instead of oil for roasting",
        "Cook until golden and crispy",
        "Serve hot with sambar and chutney"
      ]
    },
    "Ragi Dosa": {
      ingredients: [
        "1 cup ragi flour",
        "1 cup rice flour",
        "1/2 cup urad dal",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1/2 tsp cumin seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Soak urad dal and grind to make a smooth batter",
        "Mix ragi flour and rice flour",
        "Add chopped onions, chilies, and cumin",
        "Add water to make a thin batter",
        "Heat tawa and pour batter",
        "Cook until crispy",
        "Serve hot with sambar and chutney"
      ]
    },
    "Sada Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking"
      ],
      instructions: [
        "Soak rice and urad dal separately",
        "Grind them separately to make a smooth batter",
        "Mix both batters, add salt and ferment overnight",
        "Heat tawa and pour batter",
        "Cook until golden and crispy",
        "Serve hot with sambar and chutney"
      ]
    },
    "Mysore Masala Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "For red chutney:",
        "4-5 dry red chilies",
        "4-5 garlic cloves",
        "1 inch ginger",
        "Salt to taste",
        "For potato masala:",
        "2-3 medium potatoes",
        "1 onion, finely chopped",
        "2 green chilies",
        "1/2 tsp mustard seeds",
        "1/2 tsp turmeric powder",
        "Oil for cooking"
      ],
      instructions: [
        "Prepare regular dosa batter",
        "Make red chutney by grinding chilies, garlic, and ginger",
        "Prepare potato masala with tempering",
        "Spread dosa batter on hot tawa",
        "Apply red chutney on the dosa",
        "Add potato masala in the center",
        "Fold and serve with sambar and chutney"
      ]
    },
    "Podi Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "For podi (gunpowder):",
        "1 cup chana dal",
        "1 cup urad dal",
        "8-10 dry red chilies",
        "1/2 tsp asafoetida",
        "Salt to taste",
        "Ghee for serving"
      ],
      instructions: [
        "Prepare regular dosa batter",
        "Make podi by roasting and grinding ingredients",
        "Heat tawa and pour dosa batter",
        "Cook until crispy",
        "Spread ghee and sprinkle podi",
        "Fold and serve hot"
      ]
    },
    "Jini Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "For filling:",
        "2 cups mixed vegetables",
        "1 cup grated cheese",
        "1 onion, finely chopped",
        "2 green chilies",
        "1/2 tsp garam masala",
        "Salt to taste",
        "Oil for cooking"
      ],
      instructions: [
        "Prepare regular dosa batter",
        "Sauté vegetables with spices",
        "Heat tawa and pour dosa batter",
        "Add vegetable filling and cheese",
        "Fold and cook until crispy",
        "Serve hot with special chutney"
      ]
    },
    "Cheese Dosa": {
      ingredients: [
        "2 cups rice",
        "1 cup urad dal",
        "1/2 tsp fenugreek seeds",
        "2-3 medium potatoes",
        "1 cup grated cheese",
        "1 onion, finely chopped",
        "2 green chilies",
        "1/2 tsp mustard seeds",
        "Salt to taste",
        "Oil for cooking"
      ],
      instructions: [
        "Prepare regular dosa batter",
        "Make potato masala with tempering",
        "Heat tawa and pour dosa batter",
        "Add potato masala and cheese",
        "Fold and cook until crispy",
        "Serve hot with sambar and chutney"
      ]
    }
  };

  return recipes[title] || {
    ingredients: [
      "2 cups rice",
      "1 cup urad dal",
      "1/2 tsp fenugreek seeds",
      "Salt to taste",
      "Water as needed",
      "Oil for cooking"
    ],
    instructions: [
      "Soak rice and urad dal separately",
      "Grind them separately to make a smooth batter",
      "Mix both batters, add salt and ferment overnight",
      "Heat tawa and pour batter",
      "Cook until golden and crispy",
      "Serve hot with sambar and chutney"
    ]
  };
};

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const dosaRecipe = getDosaRecipe(recipe.title);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>{recipe.title}</h2>
        </div>
        <div className="modal-body">
          <img src={recipe.image} alt={recipe.title} className="modal-image" />
          <div className="recipe-details">
            <h3>Description</h3>
            <p>{recipe.description}</p>
            
            <h3>Ingredients</h3>
            <ul>
              {dosaRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h3>Instructions</h3>
            <ol>
              {dosaRecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal; 