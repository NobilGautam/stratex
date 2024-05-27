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

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.isFavorite = !movie.isFavorite;
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
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
