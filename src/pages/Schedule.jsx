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
          paddingBlockEnd: { xs: 6 , md: 5 },
          paddingBlockStart:{ xs: 6 , md: 10 }
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
        <Stack spacing={2} width="100%">
          {schedule.items.map((item, index) => {
            if (item.type === "text") {
              const next = schedule.items[index + 1];

              if (next && next.type === "button") {
                return (
                  <Stack
                    key={index}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="subtitle1">{item.content}</Typography>
                    <Link
                      href={next.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                      sx={{ fontWeight: "bold", fontSize: "1rem" }}
                    >
                      {next.title}
                    </Link>
                  </Stack>
                );
              }

              return (
                <Typography
                  key={index}
                  variant="subtitle1"
                  sx={{ textAlign: "left" }}
                >
                  {item.content}
                </Typography>
              );
            }

            if (item.type === "button" && schedule.items[index - 1]?.type === "text") {
              return null;
            }

            if (item.type === "button") {
              return (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="flex-end"
                  width="100%"
                >
                  <Link
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    color="primary"
                    sx={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    {item.title}
                  </Link>
                </Stack>
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
