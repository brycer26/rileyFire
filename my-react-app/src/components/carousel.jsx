import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const images = [
  '/amerex_logo.gif',
  '/logo.png',
  '/nafed_logo.jpg'
];

function SimpleCarousel() {
  const [current, setCurrent] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh'
    }}>
      <div style={{
        width: '500px',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '1rem'
      }}>
        <img
          src={images[current]}
          alt="carousel"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div>
        {/* pagination under images */}
          <Stack spacing={2}>
            <Pagination count={images.length} page={current + 1} onChange={(event, value) => setCurrent(value - 1)} color='error' />
          </Stack>
      </div>
    </div>
  );
}

export default SimpleCarousel;