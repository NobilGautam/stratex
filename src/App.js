import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MovieList from './components/MovieList';
import FavoriteMovies from './components/FavoriteMovies';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar/>
          <div className="main-content flex">
            <div className="content w-full">
              <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/favorites" element={<FavoriteMovies />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
