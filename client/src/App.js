import './App.css';
import Header from './header/Header';
import Menu from './menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
