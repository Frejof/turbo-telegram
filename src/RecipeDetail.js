import React, { useState } from 'react';

const RecipeDetail = ({ recipe }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>

      <div>
        <button onClick={handleLike}>Like ({likes})</button>
      </div>

      <div>
        <h3>Comments</h3>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Add a comment..."
        />
        <button onClick={handleComment}>Post Comment</button>
        <div>
          {comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
