import React from 'react'

import './index.css'
import Navbar from './assets/components/Navbar'
import SearchBar from './assets/components/SearchBar'
import MovieCard from './assets/components/MovieCard'


function App() {
  

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
