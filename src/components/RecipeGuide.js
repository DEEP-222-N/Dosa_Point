import React from 'react';
import '../styles/RecipeGuide.css';

const RecipeGuide = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content recipe-guide" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>Dosa Master Guide</h2>
        </div>
        <div className="modal-body">
          <div className="guide-content">
            {/* Dosa Batter Section */}
            <div className="guide-section">
              <h3>Perfect Dosa Batter Preparation</h3>
              <div className="recipe-card">
                <h4>Ingredients</h4>
                <ul>
                  <li>2 cups raw rice</li>
                  <li>1 cup urad dal (black gram)</li>
                  <li>1/4 cup poha (flattened rice)</li>
                  <li>1/4 cup chana dal (optional)</li>
                  <li>1/2 tsp fenugreek seeds</li>
                  <li>Salt to taste</li>
                </ul>

                <h4>Preparation Steps</h4>
                <ol>
                  <li>Wash rice and urad dal separately until water runs clear</li>
                  <li>Soak rice, urad dal, and fenugreek seeds separately for 6-8 hours</li>
                  <li>Grind urad dal first until smooth and fluffy</li>
                  <li>Grind rice separately until fine</li>
                  <li>Mix both batters with salt</li>
                  <li>Add water to achieve pouring consistency</li>
                </ol>

                <h4>Fermentation Tips</h4>
                <ul className="tips-list">
                  <li>Keep batter in a warm place (25-30°C)</li>
                  <li>Use a large container (batter doubles in volume)</li>
                  <li>Ferment for 8-12 hours in summer, 12-16 hours in winter</li>
                  <li>Add a pinch of sugar to speed up fermentation</li>
                  <li>Don't refrigerate before fermentation</li>
                  <li>Perfect fermentation shows small bubbles and slight sour smell</li>
                </ul>
              </div>
            </div>

            {/* Chutney Recipes Section */}
            <div className="guide-section">
              <h3>Signature Chutneys</h3>
              
              {/* Red Onion Chutney */}
              <div className="recipe-card">
                <h4>Red Onion Chutney</h4>
                <div className="recipe-details">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>2 large red onions, chopped</li>
                    <li>4-5 dry red chilies</li>
                    <li>2 tbsp oil</li>
                    <li>1/2 tsp mustard seeds</li>
                    <li>1/2 tsp urad dal</li>
                    <li>Salt to taste</li>
                    <li>1/4 tsp asafoetida</li>
                  </ul>
                  <h5>Method</h5>
                  <ol>
                    <li>Heat oil, add mustard seeds and urad dal</li>
                    <li>Add red chilies and fry until crisp</li>
                    <li>Add onions and sauté until translucent</li>
                    <li>Cool and grind to a coarse paste</li>
                    <li>Season with salt and asafoetida</li>
                  </ol>
                </div>
              </div>

              {/* White Coconut Chutney */}
              <div className="recipe-card">
                <h4>White Coconut Chutney</h4>
                <div className="recipe-details">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>1 cup fresh coconut, grated</li>
                    <li>2-3 green chilies</li>
                    <li>1 inch ginger</li>
                    <li>1/2 cup curd</li>
                    <li>Salt to taste</li>
                    <li>For tempering: mustard seeds, curry leaves</li>
                  </ul>
                  <h5>Method</h5>
                  <ol>
                    <li>Grind coconut, chilies, and ginger to a smooth paste</li>
                    <li>Add curd and salt, mix well</li>
                    <li>Heat oil, add tempering ingredients</li>
                    <li>Pour tempering over chutney</li>
                  </ol>
                </div>
              </div>

              {/* Green Coconut Chutney */}
              <div className="recipe-card">
                <h4>Green Coconut Chutney</h4>
                <div className="recipe-details">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>1 cup fresh coconut, grated</li>
                    <li>1 cup coriander leaves</li>
                    <li>2-3 green chilies</li>
                    <li>1 inch ginger</li>
                    <li>1/2 lemon juice</li>
                    <li>Salt to taste</li>
                  </ul>
                  <h5>Method</h5>
                  <ol>
                    <li>Grind all ingredients to a smooth paste</li>
                    <li>Add lemon juice and salt</li>
                    <li>Adjust consistency with water if needed</li>
                  </ol>
                </div>
              </div>

              {/* Sambar */}
              <div className="recipe-card">
                <h4>Classic Sambar</h4>
                <div className="recipe-details">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>1 cup toor dal</li>
                    <li>2 cups mixed vegetables (carrot, beans, pumpkin)</li>
                    <li>1 small onion, chopped</li>
                    <li>1 tomato, chopped</li>
                    <li>2 tbsp sambar powder</li>
                    <li>1/2 tsp turmeric</li>
                    <li>For tempering: mustard seeds, curry leaves, asafoetida</li>
                    <li>2 tbsp tamarind paste</li>
                    <li>Salt to taste</li>
                  </ul>
                  <h5>Method</h5>
                  <ol>
                    <li>Pressure cook dal with turmeric until soft</li>
                    <li>Cook vegetables until tender</li>
                    <li>Mix dal, vegetables, sambar powder, and tamarind</li>
                    <li>Simmer for 10-15 minutes</li>
                    <li>Add tempering and serve hot</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGuide; 