import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (order = 'highest') => {
    const response = await axios.get(API_URL);
    const sortedMovies = response.data.sort((a, b) =>
      order === 'highest' ? b.rating - a.rating : a.rating - b.rating
    );
    return sortedMovies;
  }
);

const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favoritesOrder: loadFavoritesFromLocalStorage(), 
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.isFavorite = !movie.isFavorite;
        if (movie.isFavorite) {
          state.favoritesOrder.push(movie.id);
        } else {
          state.favoritesOrder = state.favoritesOrder.filter(
            (id) => id !== movie.id
          );
        }
        localStorage.setItem('favorites', JSON.stringify(state.favoritesOrder));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const moviesWithFavorites = action.payload.map((movie) => ({
          ...movie,
          isFavorite: state.favoritesOrder.includes(movie.id),
        }));
        state.movies = moviesWithFavorites;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
