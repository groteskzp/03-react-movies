import axios from 'axios';
import type { Movie } from '../types/movie';

const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TMDB_URL = 'https://api.themoviedb.org/3/search/movie';

export default async function fetchMovies(query: string):Promise<Movie[]> {
  const cfgObj = {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  };
    const response = await axios.get(TMDB_URL, cfgObj);
    return response.data.results;
};