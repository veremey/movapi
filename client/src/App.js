import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material';
import { Home, Recommend, Settings } from './pages'

import { Navigation } from './components'

function App() {

  return (
    <BrowserRouter> 
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        
      <Routes >
        <Route index element={<Home />} />
        <Route path='settings' element={<Settings />} />
        <Route path='recommend' element={<Recommend />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
