import React from 'react';
import './App.css';
import ListeFilms from './Filter';
import { Route, Routes } from 'react-router-dom';
import FilmDetails from './FilmDetails'; // Utilisation d'un chemin relatif

function App() {
  return (
    <>
      <div className="App">
        {/*pour la navigation entre chaque page du site*/}
        <Routes>
          {/*naviger à l'accueil de la page*/}
          <Route path="/" element={<ListeFilms />} />
          {/* naviger aux détails du film */}
          <Route path='/descr/:id' element={<FilmDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
