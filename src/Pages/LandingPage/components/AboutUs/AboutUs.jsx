import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const AboutUs = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      <Box sx={{ padding: "1% 10%" }}>
        {/* ========================HEADING======================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMedium ? 'column' : 'row', 
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{width: isMedium ? '100%' : "50%",}}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 400,
                color: theme.palette.primary.main,
                fontFamily:'Inter'
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : "2.5rem",
                fontWeight: 600,
                color:'#4b4b4b',
                fontFamily:'Inter'
              }}
            >
              Creative Business Solutions
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems:'center',
              width: isMedium ? '100%' : "50%",
              gap: 5,
            }}
          >
            <Divider
              sx={{ width: "2px", height: "100%", backgroundColor: "gray" , 
                display: isMedium ? 'none' : 'flex',
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "black",
                fontFamily:'Inter'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
              mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsu
              suspendisse ultrices gravida.
            </Typography>
          </Box>
        </Box>
        <br /><br />

        <Box sx={{width:'100%'}}>
          <Grid container spacing={5}>

            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box sx={{width:'100%'}}>
                <img src="aboutus.svg" alt="" style={{width:'100%'}}/>
              </Box>
            </Grid>

            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{
                    fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : "2.5rem",
                    fontWeight: 600,
                   color:'#4b4b4b',
                    fontFamily:'Inter'
                  }}
                >
                  Creative Solutions to Improve your Business
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "black",
                    textAlign:'justify',
                    fontFamily:'Inter'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do ei mod temp or incididunt ut labore et dolore magna aliqua.
                  Quis ipsu suspendisse ultrice is gravida.
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    textAlign:'justify',
                    color: "black",
                    fontFamily:'Inter'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do ei mod temp or incididunt ut labore et dolore magna aliqua.
                  Quis ipsu suspendisse ultrice is gravida. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do ei mod tempor
                  incididunt ut labore et dolore magna aliqua.
                  ultrice is gravida. Lorem ipsum dolor
                  
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "black",
                    textAlign:'justify',
                    fontFamily:'Inter'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do ei mod temp or incididunt ut labore et dolore magna aliqua.
                  Quis ipsu suspendisse ultrice is gravida. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do ei mod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Grid>

          </Grid>

        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
