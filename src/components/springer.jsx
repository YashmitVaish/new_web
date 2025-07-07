import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import BulletSection from './bullet_text'
import conferencedata from '../data/conferenceData.json'
const SpringerInfo = ({ data }) => {
  return (

<Container component="section" sx={{ mt: 3, mb: 4 }}>
    
    <Box sx={{ mt: 3 , fontWeight: '900'}}>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                  color="primary.main"
                  sx={{ mb: 1.5 }}
                >
                  Paper Publication
                </Typography>
                <Box
      component="img"
            sx={{
            width: '100%',
            height: 'auto',
            mt: 1,
          }}
           src="/springer_head.png"

      >

      </Box>
      {data.map((item, index) => {
        if (item.type === 'text') {
          return (
            <Typography key={index} variant="body1" component="span"sx={{ fontWeight: 'bold' }}>
              {item.value}
            </Typography>
          );
        }
        if (item.type === 'link') {
          return (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener"
              sx={{ mx: 0.5 }}
            >
              {item.value}
            </Link>
          );
        }
        return null;
      })}
    </Box>
    <BulletSection data={conferencedata.journals} />
</Container>
  );
};

export default SpringerInfo;
