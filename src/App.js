import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Header/Navigation'; // NavigationBar handles the navigation
import Index from './Pages';
import EditProfile from "./Pages/editProfile";
import Auth from "./Components/Modal/Auth";

function App(){
  return (
  <div className="App">
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  </div>);
};

export default App;
