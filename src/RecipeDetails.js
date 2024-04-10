import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.usedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.original}
            <img src={ingredient.image} alt={ingredient.name} style={{ width: '50px' }} />
          </li>
        ))}
        {recipe.missedIngredients.map((ingredient) => (
          <li key={ingredient.id} style={{listStyleType: "none"}}>
            {ingredient.original}
            <img src={ingredient.image} alt={ingredient.name} style={{ width: '50px' }} />
          </li>
        ))}
      </ul>
      <p><strong>Note:</strong> This recipe includes ingredients you have and some that you might miss. Missed ingredients are also listed.</p>
    </div>
  );
}

export default RecipeDetails;
