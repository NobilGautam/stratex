import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-card flex items-center justify-between p-4 bg-[#181a1d] rounded-xl shadow-lg mb-2 my-4">
      <div className="movie-details">
        <h3 className="text-lg font-bold text-white">{movie.movie}</h3>
        <p>{movie.genre}</p>
        <p className='text-gray-400'>{movie.rating}</p>
        <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
          View on IMDb
        </a>
      </div>
      <button
        onClick={() => dispatch(toggleFavorite(movie.id))}
        className={`favorite-button p-2 rounded ${movie.isFavorite ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {movie.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
