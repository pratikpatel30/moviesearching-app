import React, {useState, useEffect} from 'react'

import './index.css'
import Navbar from './assets/components/Navbar'
import SearchBar from './assets/components/SearchBar'
import MovieCard from './assets/components/MovieCard'


function App() {
    //crete three state
    const [allMovieData, setAllMovieData] = useState9([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [loading, setLoading] = useState(false);
    
    // create function for fetch the data
    const fetchMovieData = async () => {
      try {
            setLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?i=${searchMovie}&apikey=1a28bd87`);
            const data = await res.json();
            setAllMovieData(data.Search);
            setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

  return (
    <>
      <div>
        <Navbar/>
        <div className='bg'>
        <SearchBar/>
        <MovieCard/>
        </div>
        

      </div>
       
     
    </>
  )
}

export default App
