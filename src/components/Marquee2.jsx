import React from "react";
import { Box, Link, keyframes, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Keyframes with pause at the end (no jumpy reset)
const scrollWithPause = keyframes`
  0%   { transform: translateX(100%); }
  100%  { transform: translateX(-100%); }
  100% { transform: translateX(-100%); }
`;

export default function Marquee2({ data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderItems = () =>
    data.map((item, index) => {
      if (item.type === "link") {
        const isInternal = item.href.startsWith("#");
        return (
          <Link
            key={index}
            href={item.href}
            {...(!isInternal ? { target: "_blank", rel: "noopener" } : {})}
            sx={{
              mx: 0.5,
              color: "#1976d2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            component="a"
          >
            {item.value}
          </Link>
        );
      }
      return <span key={index}>{item.value}</span>;
    });

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#FFF0EA",
        py: 1,
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: `${scrollWithPause} ${isMobile ? "15s" : "30s"} linear infinite`,
          minWidth: "100vw",
        }}
      >
        <Box
          component="span"
          sx={{ px: 2, fontWeight: "bold", fontSize: "1rem" }}
        >
          {renderItems()}
        </Box>
      </Box>
    </Box>
  );
}
