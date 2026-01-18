import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
    return (
        <Box
            sx={{
                mt: '64px',
                color: 'black',
                padding: '1rem',
            }}
        >
           <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
            }}>
                
            <img src="/2ext.jpg" 
            alt="Two Fire Extinguishers" 
            style={{ 
                width: '400px', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }} />
            
            <Box sx={{
                maxWidth: '600px',
                padding: '2rem',
                backgroundColor: '#f8f8f8',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '3rem' }}>
                    About Us
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'left' }}> Unparalleled Service and Pricing! </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.6, textAlign: 'left', marginBottom: '1.5rem' }}>
                Riley Fire and Safety is a small family owned business based out of Bardstown, KY with over 21 years of experience in the Fire Protection industry!
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.6, textAlign: 'left' }}>
                    Riley Fire and Safety is your One-Stop-Shop for <Box component="span" sx={{ fontStyle: 'italic' }}>everything </Box> 
                    fire safety related. From fire extinguishers and emergency exit lights, to first aid training and supplies,
                    we've got you covered!
                </Typography>

                <img src="nafed_logo.jpg" alt="NAFed Logo" style={{ width: '100px', height: '100px', marginTop: '2rem'}} />
            </Box>

            </Box>
        </Box>
    );
};

export default AboutUs;