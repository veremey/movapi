import {
  Box,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import CardMenu from '../CardMenu/CardMenu';

const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2, minHeight: '164px' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        src={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            component="div"
            variant="h5"
            sx={{ lineHeight: '1em', fontSize: 20 }}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          {movie.genres?.length ? (
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Length: {movie.runtime}
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>
            <FormattedMessage id="delete" />
          </MenuItem>
        </CardMenu>
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
