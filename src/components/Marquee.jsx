// components/Marquee.jsx
import React from "react";
import { Box, Link, keyframes } from "@mui/material";

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function Marquee({ data }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        backgroundColor: "#FFF0EA",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: `${scroll} 30s linear infinite`, // Adjust speed here
          fontSize: "1rem",
          fontWeight: "bold",
          px: 2,
        }}
      >
        {data.map((item, index) => {
          if (item.type === "link") {
            const isInternal = item.href.startsWith("#");
            return (
              <Link
                key={index}
                href={item.href}
                // Open in new tab only if it's an external link
                {...(!isInternal ? { target: "_blank", rel: "noopener" } : {})}
                sx={{ mx: 0.5, color: "#1976d2", textDecoration: "underline", cursor: "pointer" }}
                component="a"
              >
                {item.value}
              </Link>
            );
          }

          return <span key={index}>{item.value}</span>;
        })}
      </Box>
    </Box>
  );
}
