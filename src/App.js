import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header'
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import './App.css'; 



// It handles state and the API request.
// it is also the global parent

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
      <Header />
      <SearchForm ingredients={ingredients} setIngredients={setIngredients} fetchRecipes={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
