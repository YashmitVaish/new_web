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
    <Box component="section" id={data.title.replace(/\s+/g, '-').toLowerCase()} sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
          {data.title}
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="fee table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                {data.headers.map((header, idx) => (
                  <TableCell
                    key={idx}
                    align={idx === 0 ? 'left' : 'right'}
                    sx={{ fontWeight: 'bold', color: '#0d47a1' }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
  {data.events.map((row, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">{row.event}</TableCell>
      <TableCell align="right">
        {(row.event === "Abstract Submission" || row.event === "Acceptance of Abstract") ? (        
          <Box>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'red' }}>
              {row.date}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {row.event === "Abstract Submission" ? "25 July 2025" : "15 July 2025"}
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
