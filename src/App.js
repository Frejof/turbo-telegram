import React, { useState } from 'react';
import RecipeSelector from './RecipeSelector';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const App = () => {
  const [culture, setCulture] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipeData = {
    Italian: [
      { name: 'Pasta Carbonara', ingredients: ['Pasta', 'Eggs', 'Pancetta'], instructions: 'Cook pasta. Mix eggs and pancetta.' },
      { name: 'Margherita Pizza', ingredients: ['Dough', 'Tomatoes', 'Mozzarella'], instructions: 'Assemble and bake.' },
      // add 8 more Italian recipes
    ],
    Indian: [
      { name: 'Butter Chicken', ingredients: ['Chicken', 'Butter', 'Tomato'], instructions: 'Cook chicken in butter sauce.' },
      { name: 'Chole Bhature', ingredients: ['Chickpeas', 'Flour', 'Spices'], instructions: 'Make chickpea curry and fried bread.' },
      // add 8 more Indian recipes
    ],
    Mexican: [
      { name: 'Tacos', ingredients: ['Tortilla', 'Meat', 'Cheese'], instructions: 'Fill tortillas with meat and cheese.' },
      { name: 'Guacamole', ingredients: ['Avocados', 'Tomatoes', 'Onions'], instructions: 'Mash and mix ingredients.' },
      // add 8 more Mexican recipes
    ],
    Chinese: [
      { name: 'Sweet and Sour Chicken', ingredients: ['Chicken', 'Sweet sauce', 'Vegetables'], instructions: 'Fry chicken and mix with sauce.' },
      { name: 'Fried Rice', ingredients: ['Rice', 'Eggs', 'Vegetables'], instructions: 'Stir-fry rice with eggs and veggies.' },
      // add 8 more Chinese recipes
    ],
  };

  return (
    <div>
      <h1>Recipe Blog</h1>
      <RecipeSelector setCulture={setCulture} />
      {culture && <RecipeList recipes={recipeData[culture]} setSelectedRecipe={setSelectedRecipe} />}
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
