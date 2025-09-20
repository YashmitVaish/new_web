import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";

import { Container, Box, Typography, Button, Stack } from "@mui/material";
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
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            fontSize: "1.2rem",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          {schedule.description}
        </Typography>

        {/* Items (Text & Button sequentially) */}
        <Stack spacing={3} alignItems="center">
          {schedule.items.map((item, index) => {
            if (item.type === "text") {
              return (
                <Typography key={index} variant="subtitle1" sx={{ textAlign: "center" }}>
                  {item.content}
                </Typography>
              );
            } else if (item.type === "button") {
              return (
                <Button
                  key={index}
                  component="a"
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    boxShadow: 2,
                    minWidth: "200px",
                  }}
                >
                  {item.title}
                </Button>
              );
            }
            return null;
          })}
        </Stack>
      </Container>

      {/* Footer */}
      <ContactUs data={conferencedata.footer} />
    </>
  );
}
