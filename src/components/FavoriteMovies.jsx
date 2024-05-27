import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoriteMovies = () => {
  const favoriteMovies = useSelector((state) =>
    state.movies.movies.filter((movie) => movie.isFavorite)
  );

  return (
    <div className="favorite-movies bg-[#0e0f10] pt-10 px-8 max-h-screen">
      {favoriteMovies.length === 0 ? (
        <div>No favorite movies found</div>
      ) : (
        favoriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default FavoriteMovies;
