import React from 'react'

export default function MovieCard({ list_movies }) {
  return (
    <div className='movie'>
        <div>
          <p>{list_movies.Year}</p>
        </div>
        <div>
            <img src={list_movies.Poster!= 'N/A'? list_movies.Poster: 'https://via.placeholder.com/400' }
             alt={list_movies.Title}/>
        </div>
        <div>
            <span>{list_movies.Title}</span>
            <h3>{list_movies.Title}</h3>
        </div>
    </div>
  )
}
