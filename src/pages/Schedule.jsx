import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";

import { Container, Box, Typography, Stack, Link } from "@mui/material";
import conferencedata from "../data/conferenceData.json";

export default function Schedule() {
  const schedule = conferencedata.Schedule; // <--- define schedule

  return (
    <>
      {/* Navbar */}
      <Navbar data={conferencedata.navLinks} />

      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, md: 10 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="primary.main"
        >
          {schedule.title}
        </Typography>
      </Box>

      {/* Description */}
      <Container sx={{ py: { xs: 1, md: 0.1 } }}>
        {/* Items (Text & Hyperlinks sequentially) */}
        <Stack spacing={3} alignItems="center">
          {schedule.items.map((item, index) => {
            if (item.type === "text") {
              return (
                <Typography
                  key={index}
                  variant="subtitle1"
                  sx={{ textAlign: "center" }}
                >
                  {item.content}
                </Typography>
              );
            } else if (item.type === "button") {
              return (
                <Link
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="primary"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {item.title}
                </Link>
              );
            }
            return null;
          })}
        </Stack>
      </Container>

      <br />

      {/* Footer */}
      <ContactUs data={conferencedata.footer} />
    </>
  );
}
