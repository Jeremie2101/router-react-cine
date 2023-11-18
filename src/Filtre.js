import React from 'react'

function Filtre() {
  const onTitleChange = (value) => {
    // Logique à exécuter lorsqu'il y a un changement dans le champ de titre
    console.log('Titre changé :', value);
  };

  const onRatingChange = (value) => {
    // Logique à exécuter lorsqu'il y a un changement dans le champ de note
    console.log('Note changée :', value);
  };
  return (
    <div className="filtre">
    <input
    type="text"
    placeholder="Filtrer par titre"
    onChange={(e) => onTitleChange(e.target.value)}
    />
    <input
    type="number"
    placeholder="Filtrer par note"
    onChange={(e) => onRatingChange(e.target.value)}
    />
</div>
  )
}

export default Filtre;

{/* const Filtre = (e) => {
    const search = e.target.value.toLowerCase();
    const filmsFiltres = Movie.filter((film) => {
      const titreCorrespond = film.title.toLowerCase().includes(search);
      const noteCorrespond = film.note.toLowerCase().includes(search);;
      return titreCorrespond || noteCorrespond;
    });

    setItems(filmsFiltres);
  };*/}