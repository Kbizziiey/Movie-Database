import React from 'react';
export default function MovieDetails({ movie, onClose }) {
    if (!movie) return (
        <div className="md:w-1/3 bg-white rounded-lg shadow p-4 h-fit text-center text-gray-500">
            Select a movie to view details.
        </div>
);
return (
    <div className="md:w-1/3 bg-white rounded-lg shadow p-4 h-fit">
        <h2 className="font-bold text-lg mb-2">{movie.Title}</h2>
        <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Poster'}
            alt={movie.Title}
            className="w-full h-auto rounded mb-3"
        />
        <p className="text-sm text-gray-700 mb-2">{movie.Plot}</p>
        <p className="text-sm text-gray-600">Director: {movie.Director}</p>
        <p className="text-sm text-gray-600">Actors: {movie.Actors}</p>
        <p className="text-sm text-gray-600">IMDB Rating: {movie.imdbRating}</p>
        <button
            onClick={onClose}
            className="mt-3 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
        >
            Close
        </button>
    </div>
    );
}