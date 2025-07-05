import React from "react";
import Navbar from "../components/navbar";
import conferencedata from "../data/conferenceData.json";
import ContactUs from "../components/contactUs";
import { Box, Container, Typography } from "@mui/material";
import ConferenceTracks from "../components/ConferenceTracks";
import TextSec1 from "../components/textsec1";

function Abstract() {
  const { Abst, tracks, footer, abstract } = conferencedata;
  const { abstractSubmission, fullPaperSubmission, plagiarismPolicy } = Abst.submissionGuidelines;

  return (
    <>
      <Navbar data={conferencedata.navLinks} />

      <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: "#f9f9f9" }}>
        <br />
        <Container>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontSize: "1.2rem", lineHeight: 1.6, mb: 4 }}
          >
            Welcome to the abstract submission for the International Conference on{" "}
            <b>TRANSFORMING HIGHER EDUCATION FOR FUTURE: EDUCATION 4.0</b>.
          </Typography>
        </Container>
      </Box>

      {/* Abstract Submission */}
      <Box component="section" sx={{ py: { xs: 6 } }}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color="primary.main"
          >
            {abstractSubmission.title}
          </Typography>
          <Box component="ul">
            {abstractSubmission.description_bullets.map((item, index) => (
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

      {/* Full Paper Submission */}
      <Box component="section" sx={{ py: { xs: 6 } }}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color="primary.main"
          >
            {fullPaperSubmission.title}
          </Typography>
          <Box component="ul">
            {fullPaperSubmission.description_bullets.map((item, index) => (
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

      {/* Plagiarism Guidelines */}
      <Box component="section" sx={{ py: { xs: 6 } }}>
        <Container>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color="primary.main"
          >
            {plagiarismPolicy.title}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.8, mb: 2 }}>
            {plagiarismPolicy.description}
          </Typography>
          <Box component="ul">
            {plagiarismPolicy.description_bullets.map((item, index) => (
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

      {/* Conference Tracks & Best Paper Award */}
      <Container>
        <ConferenceTracks tracks={tracks} />
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          gutterBottom
          color="primary.main"
        >
          BEST PAPER AWARD
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          {abstract.description_bullets.map((item, index) => (
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

      <TextSec1 data={abstract} />
      <ContactUs data={footer} />
    </>
  );
}

export default Abstract;
