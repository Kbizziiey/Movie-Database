import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, fetchDetails }) {
    if (!movies.length) return <p className="text-center text-gray-500">No movies found</p>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {movies.map((m) => (
                <MovieCard key={m.imdbID} movie={m} fetchDetails={fetchDetails} />
            ))}
        </div>
    );
}