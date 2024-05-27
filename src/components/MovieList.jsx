import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesSlice';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies('highest'));
    }
  }, [status, dispatch]);

  return (
    <div className="movie-list bg-[#0e0f10] pt-10 px-8 min-h-screen">
      {status === 'loading' && <div className='text-white font-bold'>Loading...</div>}
      {status === 'failed' && <div className='text-white font-bold'>{error}</div>}
      {status === 'succeeded' && (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
