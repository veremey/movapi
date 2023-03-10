import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import CardMenu from '../CardMenu';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = () => {
  const onAddClick = (movie) => alert('movie is added');

  return (
    <Card sx={{ maxWidth: 200, position: 'relative' }}>
      <CardMenu onAddClick={onAddClick} />
      <CardMedia
        component="img"
        height="194"
        image="https://www.themoviedb.org/t/p/w440_and_h660_face/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
        alt="Paella dish"
      />
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
