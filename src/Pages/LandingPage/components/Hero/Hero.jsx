import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import video from "../../../../assets/hero.mp4";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import Header2 from "../../../Components/Header2";

const Hero = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
const isMedium = useMediaQuery(theme.breakpoints.down("md"));
const isTwelve =useMediaQuery('(max-width:1200px)');

  return (
    <>
    
      <Box 
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          
        }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </Box>

      <Box sx={{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        width:'100%',  
        height:'100vh',
        backgroundColor:'rgba(0, 0, 0, 0.45)',
        // filter:'blur(100px)'
    }}>
        
    </Box>

      <Box
        sx={{
          position: "absolute",
          height: "100vh",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          padding: "0% 10%",
        }}
      >

        

        <Box sx={{width:'100%', height:'100%',
          display:'flex',
          flexDirection:'column' ,
          justifyContent:'end',
          marginBottom:'2rem',height:'100%'
                  }}>
          <Box sx={{
            // height:'100%'
          }}>
            <Typography
              sx={{
                
                fontSize: isSmall ? '1.8rem' : isMedium ? '3rem' : '4rem',
                fontWeight:700,
                color: "white",
                width: 'md ? "80%" : "60%"',
                fontFamily:'Inter',
              }}
            >
              Digital Agency That 
            </Typography>
            <Typography
              sx={{
                
                fontSize: isSmall ? '1.8rem' : isMedium ? '3rem' : '4rem',
                fontWeight:700,
                color: "white",
                width: 'md ? "80%" : "60%"',
                fontFamily:'Inter',
              }}
            >
             Thrives on Your Success 
            </Typography>
          </Box>
          <br />
          <Box sx={{ display: "flex", justifyContent: "end",
          // height:'100%',
            flexDirection:'column',
            alignItems:'end',
            marginBottom: isTwelve ? '5rem' : '9rem' }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: 400,
                color: "white",
                width: isMedium ? '100%' : "50%",
                fontFamily:'Inter',
              }}
            >
              If you are looking for an agency to help you create a remarkable
              
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: 400,
                color: "white",
                width: isMedium ? '100%' : "50%",
                fontFamily:'Inter',
              }}
            >
              presence online, you’ve come to the right place. We can help you
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: 400,
                color: "white",
                width: isMedium ? '100%' : "50%",
                fontFamily:'Inter',
              }}
            >
              take your business to the next level.
            </Typography>
          </Box>

          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , width:'100%',
          }}>

            <IconButton >
            <LiaLongArrowAltDownSolid  color={'white'}/>
            </IconButton>
          <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: 400,
                color: "white",
                fontFamily:'Inter',
                cursor:'pointer'
              }}
            >
             Find this now!
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Hero;
