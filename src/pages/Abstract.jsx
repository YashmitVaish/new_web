import React from "react";
import Navbar from "../components/navbar";
import conferencedata from "../data/conferenceData.json";
import ContactUs from "../components/contactUs";
import { Box, Container, Typography } from "@mui/material";
import ConferenceTracks from "../components/ConferenceTracks";
import TextSec1 from "../components/textsec1";
import SpringerInfo from "../components/springer";

function Abstract() {
  const { Abst, tracks, footer, abstract } = conferencedata;
  const { abstractSubmission, fullPaperSubmission, plagiarismPolicy } =
    Abst.submissionGuidelines;

  const sectionStyle = {
    pt: { xs: 2, md: 3 },
    pb: { xs: 2, md: 3 },
  };

  return (
    <>
      <Navbar data={conferencedata.navLinks} />

      {/* Intro Text */}
      <Box
        component="section"
        sx={{
          pt: { xs: 4, md: 6 },
          pb: { xs: 2, md: 3 },
          background: "#f9f9f9",
        }}
      >
        <Container>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          ><br></br><br></br>
            Welcome to the abstract submission for the International Conference
            on <b>TRANSFORMING HIGHER EDUCATION FOR FUTURE: EDUCATION 4.0</b>.
          </Typography>
        </Container>
      </Box>

      {/* Abstract Submission */}
      <Box component="section" sx={sectionStyle}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            color="primary.main"
            sx={{ mb: 1.5 }}
          >
            {abstractSubmission.title}
          </Typography>
          <Box component="ul" sx={{ pl: 0, ml: 2 }}>
            {abstractSubmission.description_bullets.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.7, mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Full Paper Submission */}
      <Box component="section" sx={sectionStyle}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            color="primary.main"
            sx={{ mb: 1.5 }}
          >
            {fullPaperSubmission.title}
          </Typography>
          <Box component="ul" sx={{ pl: 0, ml: 2 }}>
            {fullPaperSubmission.description_bullets.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.7, mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Plagiarism Guidelines */}
      <Box component="section" sx={sectionStyle}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            color="primary.main"
            sx={{ mb: 1.5 }}
          >
            {plagiarismPolicy.title}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.7, mb: 2 }}>
            {plagiarismPolicy.description}
          </Typography>
          <Box component="ul" sx={{ pl: 0, ml: 2 }}>
            {plagiarismPolicy.description_bullets.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.7, mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Springer Info */}
      <Box component="section" sx={sectionStyle}>
        <Container>
      <Typography id="conference-tracks-section" variant="body1" align="left" sx={{ mt: 3, fontSize: '1.2rem' , scrollMarginTop: '300px' ,textAlign: 'justify' , fontWeight: 'bold'}}>
      <SpringerInfo data={conferencedata.springerInfo} />

      </Typography>
        </Container>
      </Box>

      {/* Best Paper Award */}
      <Box component="section" sx={sectionStyle}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            color="primary.main"
            sx={{ mb: 1.5 }}
          >
            BEST PAPER AWARD
          </Typography>
          <Box component="ul" sx={{ pl: 0, ml: 2 }}>
            {abstract.description_bullets.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.7, mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Conference Tracks */}
      <Box component="section" sx={sectionStyle}>
        <Container>
          <ConferenceTracks tracks={tracks} />
        </Container>
      </Box>

      {/* Submission Section (TextSec1) */}
      <Box component="section" sx={{ pt: 1, pb: { xs: 2, md: 3 } }}>
        <Container>
          <TextSec1 data={abstract} />
        </Container>
      </Box>

      {/* Contact Us */}
      <Box component="section" sx={{ background: "#ff9966", py: { xs: 3, md: 5 } }}>
        <Container>
          <ContactUs data={footer} />
        </Container>
      </Box>
    </>
  );
}

export default Abstract;
