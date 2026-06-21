
import './App.module.css'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import fetchMovies from '../../services/movieService'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import MovieGrid from '../MovieGrid/MovieGrid'
import MovieModal from '../MovieModal/MovieModal'

import toast, { Toaster } from 'react-hot-toast'
import type { Movie } from '../../types/movie'



function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query:string) => { 
    setError(false);
    setLoading(true);
    setMovies([]);
    try {
      const results = await fetchMovies(query);
      if (results.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }
      setMovies(results);
    } catch {
      setError(true);
      
       
    } finally {
      setLoading(false);
    }
    
  };
  const onSelect = (movie:Movie) => {
    setSelectedMovie(movie);
  }
  const onClose = () => {
    setSelectedMovie(null);
  }
  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <Toaster></Toaster>
      {loading && <Loader></Loader>}
      {error && <ErrorMessage />}

      {!error && !loading && movies.length > 0 && <MovieGrid onSelect={onSelect} movies={movies}></MovieGrid>}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={onClose}></MovieModal>}
    </>
  );
}

export default App
