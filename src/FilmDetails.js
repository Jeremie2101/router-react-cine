import React from 'react'
import Movie from './FilmsListe'
import { Link, useParams } from 'react-router-dom'
import { FaHome  } from "react-icons/fa";
import './App.css';




function FilmDetails() {
  const {id}=useParams(); /*utilisation de useparams pour pouvoir recuperer l'id de chaque film*/
  const trailerURL = Movie.trailerURL ?? 'https://www.youtube.com/embed/Xd3cgHuJ3uM?si=kwkIStDHHQ-FjyfJ';
  const description = Movie.description ?? 'Dans un monde ancien et mystique, une légende raconte l';


  const descr=Movie.find((m)=>m.id===id);{/*utilasation de la methode find pour pouvoir trouver l'id de chaque film*/}
  return (
      <>
      {/*utilisation du link de react router pour pouvoir retourner a l'acceuil*/}
      <div className='flex flex-col items-center '>
      <Link to="/">
    <a href="" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
      <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
      <span class="relative flex items-center"> <FaHome class="mr-2" /> Home </span>
    </a>
  </Link>
  {/*affichage du trailer et du description pour les films*/}
      </div>
      <div className='flex flex-col items-center  '>
        <h1 className='font-serif text-xl text-center font-semibold'>Trailer</h1>
          <iframe className='rounded lg' width="550" height="300" src={trailerURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
          <h1 className='font-serif text-xl text-center font-semibold'>Description:</h1>
          <h2 className='font-serif text-xl text-center font-semibold tracking-wide w-[20%]'>{description}</h2>
      </div>
      </>
  
 ) 
}

export default FilmDetails;