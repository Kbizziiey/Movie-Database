import React from 'react';
export default function MovieCard({ movie, fetchDetails }) {
    return (
        <div className="bg-white rounded-lg shadow p-3 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x150?text=No+Poster'}
                alt={movie.Title}
                className="w-24 h-36 object-cover rounded"
            />
            <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-lg">{movie.Title}</h3>
                <p className="text-sm text-gray-500">{movie.Year}</p>
                <button
                    onClick={() => fetchDetails(movie.imdbID)}
                    className="mt-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 text-sm"
                >
                    View Details
                </button>
            </div>
        </div>
    );
}