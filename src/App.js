import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header'
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import './App.css'; 



// It handles state and the API request.
// it is also the global parent

function App() {

  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  const fetchRecipes = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=1fca77e2a6d6485fa49af2cc541b9769`);
      setRecipes(response.data);
      setSelectedRecipe(null); // This is to reset selected recipe on a new search
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  return (
    <div className="app">
      <Header />
      <SearchForm ingredients={ingredients} setIngredients={setIngredients} fetchRecipes={fetchRecipes} />
      <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
}

export default App;
