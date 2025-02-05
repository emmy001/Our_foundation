import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Header/Navigation'; // NavigationBar handles the navigation
import Index from './pages';
import EditProfile from "./pages/editProfile";
import Auth from "./Components/Modal/Auth";
import About from "./pages/about";
import Impact from "./pages/impact";

function App(){
  return (
  <div className="App">
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </Router>
  </div>);
};

export default App;
