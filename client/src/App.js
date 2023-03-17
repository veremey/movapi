import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Recommend, Settings } from './pages';

import { Navigation } from './components';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    // connectToDevTools: true,
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Container maxWidth="xl">
            <Routes>
              <Route index element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
