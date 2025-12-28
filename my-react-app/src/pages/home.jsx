import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SimpleCarousel from '../components/carousel';

const HomePage = () => {
  return (
    <Box
      sx={{
        mt: '64px',
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h1" color="black" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Welcome to Riley Fire and Safety</Typography>
      <SimpleCarousel />
    </Box>
  );
};

export default HomePage;
