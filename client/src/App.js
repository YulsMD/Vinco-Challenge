import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import ChampDetails from './components/details/ChampDetails';
import CreateChamp from './components/createChamp/CreateChamp';
import EditChamp from './components/editChamp/EditChamp';


function App() {
  return (
    /* This is the router. It is telling the app which component to render based on the url. */
    <React.Fragment>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/" element={<Header />}></Route>
      <Route exact path = '/champs/:id' element={<ChampDetails/>}></Route>
      <Route exact path = '/create' element={<CreateChamp/>}></Route>
      <Route exact path = '/update/:id' element={<EditChamp/>}></Route>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
