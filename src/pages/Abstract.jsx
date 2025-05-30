import React from "react";
import Navbar from "../components/navbar";
import conferencedata from "../data/conferenceData.json";
import ContactUs from "../components/contactUs";
import { Box,Container,Typography } from "@mui/material";
import ConferenceTracks from "../components/ConferenceTracks";
import TextSec1 from "../components/textsec1";

function Abstract(){
    return(
        <>
            <Navbar data={conferencedata.navLinks} />
            <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
            <br/>
            <Container>
                <Typography
                 variant="body1"
                sx={{ textAlign: 'justify', fontSize: '1.2rem', lineHeight: 1.6, mb: 4 }}
                >
                    Welcome to the abstract submission for the International Conference on <b>TRANSFORMING HIGHER EDUCATION FOR FUTURE: EDUCATION 4.0</b>.
                </Typography>
               <Typography
                 variant="h5"
                 component="h2"
                 fontWeight="bold"
                 gutterBottom
                 color="primary.main"
                 alignSelf={"center"}
               >
                 BEST PAPER AWARD</Typography>
              <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                {conferencedata.abstract.description_bullets.map((item, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body1"
                    sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>


            </Container>
            </Box>
            <Box component= "section" sx={{ py: { xs: 6} }}>
              <Container>
                               <Typography
                 variant="h5"
                 component="h2"
                 fontWeight="bold"
                 gutterBottom
                 color="primary.main"
                 alignSelf={"center"}
               >
                 Plagiarism and Publication Ethics Guidelines
</Typography>
                   <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                          >
                                     {conferencedata.Abst.description} 
                          </Typography>
       
                <Box component="ul">
                        {conferencedata.Abst.description_bullets.map((item, index) => (
                          <Typography
                            key={index}
                            component="li"
                            variant="body1"
                            sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      
                  </Box>
                </Container>
              </Box>
                          <Box component= "section" sx={{ py: { xs: 6} }}>
              <Container>
                               <Typography
                 variant="h5"
                 component="h2"
                 fontWeight="bold"
                 gutterBottom
                 color="primary.main"
                 alignSelf={"center"}
               >
                 Paper Submission Guidelines


</Typography>
 
       
                <Box component="ul">
                        {conferencedata.Abst.description_bullets2.map((item, index) => (
                          <Typography
                            key={index}
                            component="li"
                            variant="body1"
                            sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      
                  </Box>
                </Container>
              </Box>
            <ConferenceTracks tracks = {conferencedata.tracks} />
            <TextSec1 data={conferencedata.abstract} />

            <ContactUs data={conferencedata.footer}/>
            
        </>
    )
}

export default Abstract;