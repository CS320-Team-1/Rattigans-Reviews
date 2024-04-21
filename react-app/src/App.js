
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage.js'
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

      </Routes>
      </Router>

      <LandingPage>
      </LandingPage>
    </div>
  );
}

export default App;
