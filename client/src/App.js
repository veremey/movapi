import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home, Settings} from './pages'

import { CssBaseline } from '@mui/material';
import { Navigation } from './components'
import {useState} from 'react';

function App() {

  return (
    <BrowserRouter> 
      <CssBaseline />
      <Navigation />
      <Routes >
        <Route index element={<Home />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
