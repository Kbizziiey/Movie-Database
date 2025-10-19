import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

export default function App() {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);

  async function searchMovies(e) {
    e && e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    setSelected(null);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
      const data = await res.json();
      if (data.Response === 'True') setMovies(data.Search);
      else {
        setMovies([]);
        setError(data.Error || 'No results');
      }
    } catch {
      setError('Failed to fetch');
    }
    setLoading(false);
  }

  async function fetchDetails(imdbID) {
    if (!imdbID) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
      const data = await res.json();
      if (data.Response === 'True') setSelected(data);
      else setError(data.Error || 'Details not found');
    } catch {
      setError('Failed to fetch details');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-cyan-600 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-amber-300">Movie Database</h1>
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={searchMovies}
          loading={loading}
        />

        {error && <div className="text-red-600 text-center my-3">{error}</div>}

        <div className="flex flex-col md:flex-row gap-6">
          <MovieList movies={movies} fetchDetails={fetchDetails} />
          <MovieDetails movie={selected} onClose={() => setSelected(null)} />
        </div>
      </div>
    </div>
  );
}

