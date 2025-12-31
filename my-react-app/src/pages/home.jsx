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
      <Typography variant="body1" color="black" 
      sx={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem' }}>
          Join the Riley Fire and Safety <br /> family today!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <img 
              src="/truckwithtree.jpg"   // temporary, may change to something else. trying to figure out
              alt="Truck with Tree Photo" 
              style={{ 
                width: '400px',
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }} 
            />
            <SimpleCarousel />
          </Box>
        </Box>
    );
}

export default HomePage;
