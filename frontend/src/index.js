import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Play from './pages/Play.jsx';
import Home from './pages/Home.jsx';
import Information from './pages/Information.jsx';
import PlayerDetails from './pages/PlayerDetails.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/play' element={<Play/>}></Route>
      <Route path='/information' element={<Information/>}></Route>
      <Route path='/playerDetails' element={<PlayerDetails/>}></Route>
    </Routes>
  </BrowserRouter>
);


