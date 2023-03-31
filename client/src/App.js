import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { Box, Container, CssBaseline } from '@mui/material';
import { Home, Recommend, Settings } from './pages';
import { Route, Routes } from 'react-router-dom';

import { AppContext } from './context/appContext';
import I18nProvider from './context/i18n';
import { Navigation } from './components';
import { useContext } from 'react';

function App() {
  const { state } = useContext(AppContext);

  const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
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
    <I18nProvider locale={state.locale}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </I18nProvider>
  );
}

export default App;
