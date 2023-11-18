import React from 'react';
import './App.css';

const FilmCard=({ title, description, posterURL, rating})=> {
  return (
    <div className="film-card">
      <img src={posterURL} alt={`${title} Affiche`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Note : {rating}</p>
     
    </div>
  );
}

export default FilmCard;
