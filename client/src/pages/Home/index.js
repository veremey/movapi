import { Box, Grid, Paper } from '@mui/material';

import { styled } from '@mui/material/styles';

const Home = () => {
  const SelectedSection = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 120px)',
    position: 'sticky',
    top: '16px',
  }));

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
          <Paper>List of movies</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedSection>Selected movies</SelectedSection>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
