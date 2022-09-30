import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
