import { ThemeContext } from '@emotion/react'
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const TechStacks = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <Box sx={{backgroundColor:'#3d73ec', marginTop:'2rem'}}>
        <Box sx={{ padding: isSmall ? '5% 10%': '3% 10%'}}>
            
    <Box >
        <Typography sx={{
            color:'white',
            fontSize:'1.1rem',
            fontWeight:400,
            textAlign:'center',
            fontFamily:'Inter',
        }}>
            TECH STACKS
        </Typography>
        <br />
        <Typography sx={{
            color:'white',
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            fontWeight:600,
            textAlign:'center',
            fontFamily:'Inter',
        }}>
            Explore The Tech Stack Ensured by JAROB TECH
        </Typography>
    </Box>
    <br /><br />
    <Grid container 
    // spacing={isMedium ? '10' : '0'}
    >
        {/* ===========================GIRD ITEM ONE============================= */}
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Box sx={{
                backgroundColor:'#e1eafc',
                padding:'2rem',
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600,
                
            }}>
                <Typography sx={{
                color:theme.palette.primary.main
,                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600,fontFamily:'Inter'
            }}>
                    Web Development
                </Typography>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                 backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', cursor:'pointer'
            }} >
                    <img src="techstack1.svg" alt=""  />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',cursor:'pointer'
            }}>
                    <img src="techstack2.svg" alt="" />
                </Box>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                 backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', cursor:'pointer'
            }} >
                    <img src="techstack3.svg" alt="" />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',cursor:'pointer'
            }}>
                    <img src="techstack4.svg" alt="" />
                </Box>
            </Box>  
        </Grid>

        {/* ===========================GIRD ITEM TWO============================= */}
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Box sx={{
                backgroundColor: isMedium ? '#e1eafc' : '#c2d5f9',
                padding:'2rem',
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600
            }}>
                <Typography sx={{
                color:'#3d73ec',  
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600,fontFamily:'Inter'
            }}>
                    App Development
                </Typography>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                //  backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', cursor:'pointer'
            }} >
                    <img src="techstack5.svg" alt="" />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',cursor:'pointer'
            }}>
                    <img src="techstack6.svg" alt="" />
                </Box>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                //  backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', 
            }} >
                    {/* <img src="techstack1.svg" alt="" style={{width:'50%'}} /> */}
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem'
            }}>
                    {/* <img src="techstack1.svg" alt="" style={{width:'50%'}}/> */}
                </Box>
            </Box>  
        </Grid>

         {/* ===========================GIRD ITEM THIRD============================= */}
         <Grid item lg={3} md={6} sm={12} xs={12}>
            <Box sx={{
                backgroundColor:'#e1eafc',
                padding:'2rem',
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600
            }}>
                <Typography sx={{
                color:theme.palette.primary.main
,                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600,
                fontFamily:'Inter'
            }}>
                    Backend
                </Typography>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                 backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', cursor:'pointer'
            }} >
                    <img src="techstack7.svg" alt="" />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',cursor:'pointer'
            }}>
                    <img src="techstack8.svg" alt="" />
                </Box>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                 backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', 
            }} >
                    {/* <img src="techstack1.svg" alt="" /> */}
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem'
            }}>
                    {/* <img src="techstack1.svg" alt="" /> */}
                </Box>
            </Box>  
        </Grid>

        {/* ===========================GIRD ITEM FOUR============================= */}
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Box sx={{
                    backgroundColor: isMedium ? '#e1eafc' : '#c2d5f9',
                padding:'2rem',
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600
            }}>
                <Typography sx={{
                color:'#3d73ec',  
                textAlign:'center',
                fontSize:'1.4rem',
                fontFamily:600,
                fontFamily:'Inter'
            }}>
                    UI | UX Design
                </Typography>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                //  backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', 
                cursor:'pointer'
            }} >
                    <img src="techstack9.svg" alt="" />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',cursor:'pointer'
            }}>
                    <img src="techstack10.svg" alt="" />
                </Box>
            </Box>

            <Box sx={{
                width:'100%',
                display:'flex',
                //  backgroundColor:'#c2d5f9',
                 borderBottom: ' 1px solid white',
                 height:'7rem'
            }}>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem', cursor:'pointer'
            }} >
                    <img src="techstack11.svg" alt="" />
                </Box>
                <Box sx={{
                width:'50%',
                display:'flex',
                justifyContent:'center', alignItems:'center',
                padding:'1rem',
                cursor:'pointer'
            }}>
                    <img src="techstack12.svg" alt="" />
                </Box>
            </Box>  
        </Grid>

    </Grid>
    </Box>

    </Box>
    
    </>
  )
}

export default TechStacks