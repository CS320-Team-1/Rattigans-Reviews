
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage.js'
import Movies from './pages/Movies.js'
import TVShows from './pages/TVShows.js'
import Results from './pages/Results.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/movies" element={<Movies/>} />
          <Route exact path="/tv-shows" element={<TVShows/>} />
          <Route exact path="/search" element={<Results/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
