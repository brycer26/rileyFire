import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ServicesPage = () => {
    return (
        <Box
            sx={{
                mt: '64px',
                color: 'black',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Our Services
            </Typography>
            <Typography variant="body1">
                We offer a wide range of services to meet your needs.
            </Typography>
        </Box>
    )
}

export default ServicesPage;