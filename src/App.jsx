// import { useState } from 'react'
import './App.css'

function App() {
  const data = [{ 
    name : "leo",
    img: "https://www.pinkvilla.com/pics/640x360/990020216_thalapathy-vijay-leo-first-single-naa-ready-poster_202306.jpg",
    rating: 70,
  },
 { 
    name : "Vikram",
    img: "https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_QL75_UX190_CR0,28,190,281_.jpg",  
    rating: 95
  }]
  return (
   
    <div className = 'app'>
    {
      data.map((movie, idx) =>(
        <MovieCard key={idx}
        img={movie.img}
        name={movie.name}
        rating={movie.rating}
        />
      ) )
    }
    

  </div>
  
  )
}

export default App

// props img,name,rating this is a props we can use a letter or 
function MovieCard({img,name,rating}){
  
  return(
    <div className="Moviecard">
    <div className ="movieImg">
      <img src={img}/>
      </div>
      <div className="move-name">
        <h3>{name}</h3>
      </div>
      <div className="movie-detail">
      <buttuon>Watch Now</buttuon>
      <p>Rating:{rating}%</p>
      </div>
      </div>

  )
}