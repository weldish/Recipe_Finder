import React from 'react';

// This component handles the input field for ingredients and the submission form.

function SearchForm({ ingredients, setIngredients, fetchRecipes }) {
  return (
    <form onSubmit={fetchRecipes}>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma separated)"
      />
      <button type="submit">Find Recipes</button>
    </form>
  );
}

export default SearchForm;
