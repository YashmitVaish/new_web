import React from "react";
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";

export default function AnnouncementsCard({ data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const items = data?.announcements || [];

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        maxWidth: 700,
        backgroundColor: "#FFF0EA",
        borderRadius: "12px",
        boxShadow: 2,
        p: 2,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          borderBottom: "2px solid",
          borderColor: "primary.main",
          pb: 0.5,
        }}
      >
        Announcements
      </Typography>

      {/* Marquee container */}
      <Box
        sx={{
          overflow: "hidden",
          height: isMobile ? "120px" : "160px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            animation: `marquee 15s linear infinite`,
            "@keyframes marquee": {
              "0%": { transform: "translateY(0%)" },
              "100%": { transform: "translateY(-50%)" },
            },
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                p: 1,
                mb: "2em",
              }}
            >
              {/* Bullet */}
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  mt: 1, // aligns with first line of text
                  mr: 1.5,
                  flexShrink: 0,
                }}
              />

              {/* Inline text + links */}
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {item.content.map((c, i) =>
                  c.type === "link" ? (
                    <Link
                      key={i}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        textDecoration: "underline",
                        mx: 0.5,
                      }}
                    >
                      {c.value}
                    </Link>
                  ) : (
                    <Typography
                      key={i}
                      component="span"
                      sx={{ display: "inline" }}
                    >
                      {c.value}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
