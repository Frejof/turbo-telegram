import React from 'react';

const RecipeList = ({ recipes, setSelectedRecipe }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} onClick={() => setSelectedRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
