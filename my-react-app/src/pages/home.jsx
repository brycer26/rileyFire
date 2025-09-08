import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SimpleCarousel from '../components/carousel';

const HomePage = () => {
  return (
    <Box
      sx={{
        mt: '64px',
        minHeight: 'calc(100vh - 64px)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <SimpleCarousel />
    </Box>
  );
};

export default HomePage;
