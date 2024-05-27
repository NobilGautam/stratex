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
  try {
    const serializedState = localStorage.getItem('favoriteMovies');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Could not load favorite movies from local storage:', e);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites) => {
  try {
    const serializedState = JSON.stringify(favorites);
    localStorage.setItem('favoriteMovies', serializedState);
  } catch (e) {
    console.warn('Could not save favorite movies to local storage:', e);
  }
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: loadFavoritesFromLocalStorage(),
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      const movie = state.movies.find((movie) => movie.id === movieId);
      if (movie) {
        movie.isFavorite = !movie.isFavorite;
      }
      const favorites = state.movies.filter((movie) => movie.isFavorite);
      state.favorites = favorites;
      saveFavoritesToLocalStorage(favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.map((movie) => ({
          ...movie,
          isFavorite: state.favorites.some((fav) => fav.id === movie.id),
        }));
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
