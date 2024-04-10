
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';




function App() {

  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=1fca77e2a6d6485fa49af2cc541b9769`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <form onSubmit={fetchRecipes}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          />
        <button type="submit">Find Recipes</button>
      </form>
      <div>
        {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} style={{ width: '100px' }} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
