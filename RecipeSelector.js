import React from 'react';

const RecipeSelector = ({ setCulture }) => {
  return (
    <div>
      <h2>Select a Cultural Recipe</h2>
      <select onChange={(e) => setCulture(e.target.value)}>
        <option value="">-- Select Culture --</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
        <option value="Mexican">Mexican</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
};

export default RecipeSelector;
