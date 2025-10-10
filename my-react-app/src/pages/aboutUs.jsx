import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
    return (
        <Box
            sx={{
                mt: '64px',
                color: 'black',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                We are a team of passionate developers dedicated to building high-quality web applications.
            </Typography>
        </Box>
    )
}

export default AboutUs;