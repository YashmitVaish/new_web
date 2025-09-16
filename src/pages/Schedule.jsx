import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";
import { Box, Container, Typography} from "@mui/material";
import conferencedata from "../data/conferenceData.json";

export default function Schedule(){
    return(
        <>
            <Navbar data={conferencedata.navLinks} />
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
                {conferencedata.Schedule.title}
                </Typography>
            </Box>

            <Box>
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
                    {conferencedata.Schedule.description}
                </Typography>
                </Container>
            </Box>

            <ContactUs data={conferencedata.footer} />
        </>
    )
}
