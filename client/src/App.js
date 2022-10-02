import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import React from 'react';
import ChampDetails from './details/ChampDetails';
import Header from './header/Header';

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/" element={<Header />}></Route>
      <Route exact path = '/champs/:id' element={<ChampDetails/>}></Route>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
