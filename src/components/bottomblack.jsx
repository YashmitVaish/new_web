import React from 'react';
import { Box, Typography, Button,Link } from '@mui/material';

const Bottombar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Barlow',
        py: { xs: 2, md: 3 }, 
        px: { xs: 2, md: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      {/* Left: Date with Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          component="img"
          src="/calendar 1.png"
          alt="Calendar Icon"
          sx={{ width: 24, height: 24 }}
        />
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 500 }}>
          September 26–27, 2025
        </Typography>
      </Box>

      {/* Middle: Location with Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          component="img"
          src="/location 1.png"
          alt="Location Icon"
          sx={{ width: 24, height: 24 }}
        />
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 500 }}>
          <Link href="https://www.thapar.edu/" target="_blank" rel="noopener"    underline="none"
    sx={{ color: 'inherit' }}>Thapar Institute of Engineering & Technology</Link>
        </Typography>
      </Box>

      {/* Right: Register Button */}
      <Button
        variant="contained"
        href="/register"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          borderRadius: '33px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: { xs: '0.9rem', md: '1rem' },
          px: 3,
          py: 1,
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        Register Now
      </Button>
    </Box>

  
  );
};

export default Bottombar;
