import React from 'react';
export default function SearchBar({ query, setQuery, onSearch, loading }) {
    return (
        <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-2 mb-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
                type="submit"
                className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60"
                disabled={loading}
            >
            {loading ? 'Searching...' : 'Search'}
        </button>
    </form>
    );
}