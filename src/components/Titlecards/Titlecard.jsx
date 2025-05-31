import React, { useEffect,useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/assets/cards/Cards_data'




const Titlecard = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmE4YTFhM2QzYTlhODZmOTQ4ZDRiOGRhODQzM2Q2MiIsIm5iZiI6MTczODI1NDEzNS45OTUwMDAxLCJzdWIiOiI2NzliYTczNzQ0NDhkYTNkMmFiZDk1NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PyZJXPM481MMSqhG1_YXalhYRXsVzBoSjjN6B9sXiT8'
    }
  };
  
  

const handleWheel =(event)=>{
  event.preventDefault();
  const scrollSpeed=15;
  cardsRef.current.scrollLeft+=event.deltaY * scrollSpeed;
}

useEffect(()=>{
  const categoryParam = category ? category.toLowerCase() : "now_playing";

  fetch(`https://api.themoviedb.org/3/movie/${categoryParam}?language=en-US&page=1`, options)
  
  //fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel);},[])
  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
        return <div className="card" key={index}>
           <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
           <p>{card.original_title}</p>
        </div>
})}
        
      </div>
    </div>
  )
}

export default Titlecard