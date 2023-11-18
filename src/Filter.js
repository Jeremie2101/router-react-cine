// ListeFilms Component
import React from 'react';
import FilmCard from './FilmCard';
import Movie from './FilmsListe';
import { useState } from 'react';
import Film from './AddFilms';
import { Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';






const ListeFilms = () => {
  const [item, setItems] = useState(Movie);
  const [nouveauFilm, setNouveauFilm] = useState(Film);

  const handleNouveauFilmChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value })
  };

  const ajouterFilm = (e) => {
    e.preventDefault()
    setItems([...item, { ...nouveauFilm }]);
    setNouveauFilm({ title: '', description: '', rating: '', posterURL: ''})
  };


  
  



  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <form onSubmit={ajouterFilm}>
        <div className="app">
          <h2 className='ti'>application de cinéma </h2>
          
          <div className="ajouter-film">
            <h2>Ajouter un Film</h2>
            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={nouveauFilm.title}
              onChange={handleNouveauFilmChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={nouveauFilm.description}
              onChange={handleNouveauFilmChange}
            />
            <input
              type="text"
              name="posterURL"
              placeholder="URL de l'affiche"
              value={nouveauFilm.posterURL}
              onChange={handleNouveauFilmChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Note"
              value={nouveauFilm.rating}
              onChange={handleNouveauFilmChange}
            />
            <button>Ajouter un Film</button>
          </div>
            </div>
      </form>
            <div className=''>
                <div className="liste-films"> 
                    {item.map((descr) => (
                        <div key={descr.id} >
                        {/*lien qui permet de regarder le trailer du film*/}
                        <Link to={`descr/${descr.id}`} > 
                        <FilmCard {...descr} />
                        </Link>
                        </div>
                    ))}
                </div>
              </div>
</>
  );
}

export default ListeFilms; 