import { Box, Typography, Paper, Container } from '@mui/material';
import SimpleCarousel from '../components/carousel';

const HomePage = () => {
    const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47930.170808336516!2d-85.50198716459593!3d37.82347242481817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88685224eb0a98fb%3A0xa147e5666a735f7a!2sBardstown%2C%20KY%2040004!5e1!3m2!1sen!2sus!4v1768697824833!5m2!1sen!2sus";

  return (
    <Box
            sx={{
                mt: '64px',
                color: 'black',
                padding: '1rem 2rem',
            }}>
            <Typography 
            variant="body1" 
            color="black" 
            sx={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              textAlign: 'center',
              marginTop: '-1rem',
              marginBottom: '2rem' }}>

          Join the Riley Fire and Safety <br /> family today!
           </Typography>
           <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
            }}>
                
              <img 
                src="/truckwithtree.jpg"   // temporary, may change to something else. trying to figure out
                alt="Truck with Tree Photo" 
                style={{ 
                  width: '400px',
                  height: 'auto', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}/>
            
            <Box sx={{
                maxWidth: '600px',
                padding: '2rem',
                backgroundColor: '#f8f8f8',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '3rem' }}>
                    Home Page (Ideas Incorporating Soon)
                </Typography>

                <img src="nafed_logo.jpg" alt="NAFed Logo" style={{ width: '100px', height: '100px', marginTop: '2rem'}} />
            </Box>

            </Box>

            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ borderRadius: '4px', overflow: 'hidden', lineHeight: 0 }}
        >
          <iframe
            src={googleMapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography 
            variant="h2" 
            sx={{ fontWeight: 800, color: '#D32F2F', letterSpacing: '-1px' }}
          >
            74,254
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Potential Lives Saved
          </Typography>
        </Box>
      </Container>
      
        </Box>
    );
}

export default HomePage;
