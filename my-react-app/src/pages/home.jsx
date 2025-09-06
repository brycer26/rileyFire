import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', pt: 8, paddingTop: '50px' }}>
      <Typography variant='h4' color='black'>Riley Fire and Safety</Typography>
    </Box>
  );
};

export default HomePage;
