import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

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
        
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/exitSign.JPG"
                                alt="exit sign"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                    Emergency Exit Lighting
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                                    We ensure your facilities path of safety is clearly visibile and illuminated while in compliance with **NFPA 101 Life Safety Code** standards!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/onSite.jpg"
                                alt="on site"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                    On-Site Services!
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                                    We offer on-site services for your convience! View more about our on-site services below.                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="/exitSign.JPG"
                                alt="exit sign"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                    Emergency Exit Lighting
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                                    We ensure your facilities path of safety is clearly visibile and illuminated while in compliance with **NFPA 101 Life Safety Code** standards!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServicesPage;