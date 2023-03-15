import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import CardMenu from '../CardMenu';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 200, position: 'relative' }}>
      <CardMenu onAddClick={onCardSelect} />
      <CardMedia component="img" height="194" image={movie.image} alt={movie.title} />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          Sonic the Hedgehog 2
        </Typography>
        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          Apr 08, 2022
        </Typography>
      </CardInfo>
    </Card>
  );
};
export default MovieCard;
