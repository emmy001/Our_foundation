import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Header/Navigation'; // NavigationBar handles the navigation
import Index from './pages';
import About from "./pages/about";
import Donate from "./pages/donate";
import Impact from "./pages/impact";

function App(){
  return (
  <div className="App">
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </Router>
  </div>);
};

export default App;
