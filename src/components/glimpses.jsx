import React, { useState, useEffect, useCallback } from 'react';
import { IconButton, Box, Typography, Paper } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const Slideshow = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.images.map((image) => `${process.env.PUBLIC_URL}${image}.webp`);

  // Move to the next slide
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Move to the previous slide
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', maxWidth: '100%', margin: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: 'primary.main' }}>
        {data.title}
      </Typography>

      <Paper
        sx={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          maxWidth: '100%',
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowBack />
        </IconButton>

        <img
          src={images[currentIndex]}
          alt={`Slideshow ${currentIndex + 1}`}
          style={{
            width: '75%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '10px',
            transition: 'all 0.3s ease-in-out',
          }}
        />

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Slideshow;