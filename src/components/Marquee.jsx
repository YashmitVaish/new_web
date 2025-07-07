import React from "react";
import { Box, Link, keyframes, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const scrollOnce = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function Marquee({ data }) {
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
          animation: `${isMobile ? scroll : scrollOnce} ${isMobile ? "15s" : "30s"} linear infinite`,
        }}
      >
        <Box
          component="span"
          sx={{ px: 2, fontWeight: "bold", fontSize: "1rem" }}
        >
          {renderItems()}
        </Box>

        {isMobile && (
          <Box
            component="span"
            sx={{ px: 2, fontWeight: "bold", fontSize: "1rem" }}
          >
            {renderItems()}
          </Box>
        )}
      </Box>
    </Box>
  );
}
