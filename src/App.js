import React, { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard';
import SearchIcon from './search.svg'

const API_URL = 'http://omdbapi.com?apikey=9fcc7948';

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&S=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(movies);
    }

    
  return (
     <div className='App'>
        <h1>MyMovies</h1>
        <div className='search'>
            <input placeholder='Search'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            <img src={SearchIcon} alt='search'
            onClick={() => {searchMovies(searchTerm)}}/>
        </div>
        {
            movies?.length > 0 ?
            (
                <div className='container'>
                    {
                         movies.map((data)=>{
                            return (
                                 <MovieCard list_movies = {data}/>
                            )
                         })
                    }
             </div>
            ):(
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
     </div>
  )
}
export default App;
