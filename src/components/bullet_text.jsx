
import React from "react";
import { Container, Box, Typography} from "@mui/material";


function BulletSection({data}){
    if (!data){
        return null;
    }   
    return (  
           <Box component= "section" sx={{ py: { xs: 6} }}>
              <Container>
                    <Typography
                    variant="h5"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                    color="primary.main"
                    alignSelf={"center"}>
                        {data.title}
                    </Typography>
                   
                   <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                          >
                                     {data.description} 
                          </Typography>
       
                <Box component="ul">
                        {data.description_bullets.map((item, index) => (
                          <Typography
                            key={index}
                            component="li"
                            variant="body1"
                            sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      
                  </Box>
                </Container>
              </Box>)
}
export default BulletSection;
