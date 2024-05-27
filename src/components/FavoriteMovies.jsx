import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoriteMovies = () => {
  const movies = useSelector((state) => state.movies.movies);
  const favoritesOrder = useSelector((state) => state.movies.favoritesOrder);

  const favoriteMovies = favoritesOrder
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie) => movie && movie.isFavorite); // Add a check for null values

  return (
    <div className="favorite-movies bg-[#0e0f10] pt-10 px-8 min-h-screen">
      {favoriteMovies.length === 0 ? (
        <div className='text-white font-bold'>No favorite movies added. Maybe try going back to home screen</div>
      ) : (
        favoriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default FavoriteMovies;
