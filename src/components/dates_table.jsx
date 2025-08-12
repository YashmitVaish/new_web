import React from "react";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

function DatesTable({ data }) {
  if (!data || !data.events || !data.headers) return null;

  return (
    <Box
      component="section"
      id={data.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}
      sx={{ py: { xs: 6, md: 10 }, background: "#f9f9f9" }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="left"
          fontWeight="bold"
          gutterBottom
          color="primary.main"
        >
          {data.title}
        </Typography>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: 650 }} aria-label="important dates table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                {data.headers.map((header, idx) => (
                  <TableCell
                    key={idx}
                    align={idx === 0 ? "left" : "right"}
                    sx={{ fontWeight: "bold", color: "#0d47a1" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.events.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.event}
                  </TableCell>
                  <TableCell align="right">
                    {row.newDate ? (
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            color: "rgba(255, 0, 0, 0.7)"
                          }}
                        >
                          {row.date}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          {row.newDate}
                        </Typography>
                      </Box>
                    ) : (
                      row.date
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default DatesTable;
