import React from 'react';
import { CarCrash } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import TestimonialSlider from './TestimonialSlider';


const Testimonial = () => {

    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
const isMedium = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
    
    <Box sx={{padding:'3% 10%', marginBottomL:'2rem'}}>
        <Box>
            <Typography sx={{
                color:theme.palette.primary.main,
                fontSize:'1.1rem',
                fontWeight:'400', 
                textAlign:'center',
                fontFamily:'Inter',
                fontFamily:'Inter',
                marginBottom:'.5rem'
                }}>
            Testimonial
            </Typography>
            <Typography sx={{
                color:'#4b4b4b',
                fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
                fontWeight:'600', 
                textAlign:'center',
                fontFamily:'Inter'
                }}>
            What Our Clients Say?
            </Typography>
        </Box>
        <br /><br />    
   
   {/* ======================================CARD SECTION ========================== */}
   



   
   
   <TestimonialSlider/>
    </Box>

    </>
  )
}

export default Testimonial


















// save cards=================================

{/* <Grid container spacing={3}>
   {listData.map((row, id)=>(
    <Grid item key={id} lg={6} md={6} sm={12} xs={12} >
    <Box sx={{
        backgroundColor:'blue',
        paddingBottom:'.6rem',
        borderRadius:'20px'
    }}>
    <Card sx={{
        height:'90%',borderRadius:'10px',
        padding:'2rem', 
        position:'relative',
        backgroundColor:'#f1f1f1'
    }}>
        <Box sx={{ backgroundColor:'green',
            position:'absolute', padding:'1rem',
            top:0,
            right:0,
            borderRadius:" 0 0  0 50px"
        }}>
            <img src="testnimoniallogo.svg" alt="" style={{width:'2rem'}} />
        </Box>
        <Box sx={{
            display:'flex', justifyContent:'center',
            // width:'10rem'
            
        }}>
        <Avatar src={row.avatar} sx={{width:'5rem', height:'5rem'}} />
        </Box>
        <br />
        <Typography sx={{
            fontSize:'1.2rem',
            fontWeight:500,
            color:'green',
            textAlign:'center'

        }}> {row.title} </Typography>

<br /><br />
<Typography sx={{
            fontSize:'1rem',
            fontWeight:400,
            textAlign:'center',
            color:'black',

        }}> {row.des}</Typography>
            
    </Card>
    </Box>
    </Grid>
   ))}
    
   </Grid> */}
