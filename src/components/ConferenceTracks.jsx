import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import BulletSection from './bullet_text'
import conferencedata from '../data/conferenceData.json'
import SpringerInfo from './springer';



const TracksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'space-between',
  marginTop: theme.spacing(3)
}));

const TrackColumn = styled(Box)(({ theme }) => ({
  flex: '1 1 45%',
  minWidth: '300px',
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 100%'
  }
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  boxShadow: 'none',
  border: '1px solid #ddd',
  borderRadius: '10px !important',
  '&.Mui-expanded': {
    margin: theme.spacing(2, 0),
  }
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1, 0),
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#fff'
}));

const ConferenceTracks = ({ tracks }) => {
  return (
  <Container component="section">
    <Box id="Conference_Tracks">
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

      <Typography id="conference-tracks-section" variant="body1" align="left" sx={{ mt: 3, fontSize: '1.2rem' , scrollMarginTop: '100px' ,textAlign: 'justify'}}>
        <SpringerInfo data={conferencedata.springerInfo} />

      </Typography>
      <BulletSection data={conferencedata.journals} />
      <Typography variant="h4" component="h2" align="left" gutterBottom>
        CONFERENCE TRACKS
      </Typography>      
      <Typography variant="body1" paragraph align="left">
        This conference invites original research papers on diverse topics as mentioned below-
      </Typography>

      <TracksContainer>
        {tracks.map((column, columnIndex) => (
          <TrackColumn key={columnIndex}>
            {column.map((track, index) => (
              <StyledAccordion key={index}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {track.title}
                  </Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <List dense>
                    {track.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ py: 0.5 }}>
                        <Typography variant="body2">
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </TrackColumn>
        ))}
      </TracksContainer>
      
      
      <br />
    </Box>
  </Container>
  );
};

export default ConferenceTracks; 