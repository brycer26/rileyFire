import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    // Adjust the `sx` prop to align the content to the top.
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', pt: 8 }}>
      <Typography variant='h4' color='white'>Riley Fire and Safety</Typography>
    </Box>
  );
};

export default HomePage;
