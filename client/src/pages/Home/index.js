import { Box, Grid, Pagination, Paper } from '@mui/material';
import { MovieCard, SelectedMoviesSection } from '../../components';

import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies/useMovie';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const MAX_PAGES = 500;

  if (error) {
    console.log(error);
    return 'Error';
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 2,
      }}
    >
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && <div>Loading ...</div>}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCard
                        movie={movie}
                        onCardSelect={() => selectMovie(movie)}
                        isPreviewMode={true}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box
              mt={2}
              pb={2}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Pagination
                count={
                  data?.movies?.totalPages > MAX_PAGES
                    ? MAX_PAGES
                    : data?.movies?.totalPages
                }
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
