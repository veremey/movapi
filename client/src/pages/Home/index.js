import { Box, Grid, Pagination, Paper } from '@mui/material';

import { MOVIES_QUERY } from './queries';
import { MovieCard } from '../../components';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState(1);
  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const MAX_PAGES = 500;

  const SelectedSection = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 120px)',
    position: 'sticky',
    top: theme.spacing(2),
  }));

  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });

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
                      <MovieCard movie={movie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={data?.movies?.totalPages > MAX_PAGES ? MAX_PAGES : data?.movies?.totalPages}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedSection>Selected movies</SelectedSection>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
