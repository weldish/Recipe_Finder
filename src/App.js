import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header'
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import ShoppingList from './ShoppingList';
import './App.css'; 



// It handles state and the API request.
// it is also the global parent

function App() {

  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);


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


  // Function to add ingredients to the shopping list
  const addToShoppingList = (recipe) => {
    const newIngredients = recipe.usedIngredients.concat(recipe.missedIngredients);
    const uniqueIngredients = new Set([...shoppingList, ...newIngredients.map(ing => ing.original)]);
    setShoppingList([...uniqueIngredients]);;
  };



  return (
    <div>
      <Header />
      <SearchForm ingredients={ingredients} setIngredients={setIngredients} fetchRecipes={fetchRecipes} />
      <div className="main-container">
        <div className="recipe-list-container">
          <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
        </div>
      
        {selectedRecipe && (
        <div className="recipe-details-container">
          <RecipeDetails recipe={selectedRecipe} addToShoppingList = {addToShoppingList}/>
        </div>
      )}

        {shoppingList.length > 0 && (
        <div className="shopping-list-container">
          <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />
        </div>
      )}


    </div>
    </div>
  );
}

export default App;
