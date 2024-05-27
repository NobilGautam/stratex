import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-card flex items-center justify-between p-4 bg-[#181a1d] rounded-xl shadow-lg mb-2 my-4">
      <div className="movie-info">
        <h3 className="text-lg font-bold text-white">{movie.movie}</h3>
        <p className="text-gray-400">Rating: {movie.rating}</p>
      </div>
      <button
        className="ml-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch(toggleFavorite(movie.id))}
      >
        {movie.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
