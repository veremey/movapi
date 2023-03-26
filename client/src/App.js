import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client';
import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Recommend, Settings } from './pages';

import { Navigation } from './components';
import { AppContext } from './context/appContext';
import { useContext } from 'react';

function App() {
  const { state } = useContext(AppContext);

  const httpLink = new HttpLink({ uri: 'http://localhost:4000/' });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    // eslint-disable-next-line no-prototype-builtins
    const customHeaders = operation.getContext().hasOwnProperty('headers')
      ? operation.getContext().headers
      : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
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
