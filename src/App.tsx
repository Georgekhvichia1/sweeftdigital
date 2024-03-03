import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from '../src/Components/MainPage';
import HistoryPage from '../src/Components/HistoryPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Main</Link> | <Link to="/history">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Use element instead of component */}
          <Route path="/history" element={<HistoryPage />} /> {/* Use element instead of component */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
