import { Card, CardContent, CardMedia, MenuItem, Typography } from '@mui/material';

import CardMenu from '../CardMenu/CardMenu';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <CardMedia component="img" height="250" image={movie.image} alt={movie.title} />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};
export default MovieCard;
