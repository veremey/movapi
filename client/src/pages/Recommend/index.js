import { MOVIES_BY_IDS_QUERY } from './queries';
import { Typography, Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../../components/MovieCard/MovieCard';

const Recommend = () => {
  const [searchParams] = useSearchParams();
  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get('ids')
        ?.split(',')
        .map((id) => +id),
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error! Try again...</>;
  }

  return (
    <>
      <Typography variant="p" component="h1" gutterBottom>
        {searchParams.get('title')}
      </Typography>
      {data.moviesByIds && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} onCardSelect={() => {}} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Recommend;
