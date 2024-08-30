import { Rotate90DegreesCcw } from '@mui/icons-material'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const ValueCard = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    
    
   <Box sx={{ 
    padding: isSmall ? '5% 10%' :  '3% 10%',
      display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',

   }}>
   <Typography sx={{
        fontSize: isSmall ? '2rem' : '2.5rem',
         fontWeight:600,
         fontFamily:'Inter',
         color:'#4b4b4b'
    }}>  
        Our Values</Typography>
        <br /><br /><br />

    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        gap:3,
    }}>
        {/* ================================VALUE CARD ONE============================ */}
    <Box sx={{
        width:'14rem',
        height:'14rem',
        border:'2px solid black',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        cursor:'pointer'
    }}>
        <Box sx={{
          position:'absolute',
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    border: '10px solid transparent',
    borderTop: '15px solid transparent', // Top border color
    borderRight: '15px solid transparent', // Right border color
    borderBottom: '15px solid #3d73ec', // Bottom border color
    borderLeft: '15px solid transparent', // Left border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden' ,
    transform:'rotate(130deg)'
}}>
        
        <Box sx={{
        width:'85%',
        height:'85%',
        // borderTop:'10px solid black',
        borderRadius:'50%',
        backgroundColor:'white',display:'flex',
        flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        boxShadow: '0px 0px 6px -1px rgba(0, 0, 0, 0.5)',
        transform:'rotate(230deg)'
    }}>
        <Box>
            <img src="value1.svg" alt="" />
        </Box>
        <Typography sx={{fontFamily:'Inter',color:'#4b4b4b'}}>Honesty</Typography>
    </Box>

    </Box>
        

    </Box>

    {/* ================================VALUE CARD TWO============================ */}
    <Box sx={{
        width:'14rem',
        height:'14rem',
        border:'2px solid black',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        cursor:'pointer'
    }}>
        <Box sx={{
          position:'absolute',
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    border: '10px solid transparent',
    borderTop: '15px solid transparent', // Top border color
    borderRight: '15px solid transparent', // Right border color
    borderBottom: '15px solid #3d73ec', // Bottom border color
    borderLeft: '15px solid transparent', // Left border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden' ,
    transform:'rotate(230deg)'
}}>
        
        <Box sx={{
        width:'85%',
        height:'85%',
        // borderTop:'10px solid black',
        borderRadius:'50%',
        backgroundColor:'white',display:'flex',
        flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        boxShadow: '0px 0px 6px -1px rgba(0, 0, 0, 0.5)',
        transform:'rotate(130deg)'
    }}>
        <Box>
            <img src="value2.svg" alt="" />
        </Box>
        <Typography sx={{fontFamily:'Inter',color:'#4b4b4b'}}>Commitment</Typography>
    </Box>

    </Box>
        

    </Box>

    {/* ================================VALUE CARD THIRD============================ */}
    <Box sx={{
        width:'14rem',
        height:'14rem',
        border:'2px solid black',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        cursor:'pointer'
    }}>
        <Box sx={{
          position:'absolute',
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    border: '10px solid transparent',
    borderTop: '15px solid transparent', // Top border color
    borderRight: '15px solid transparent', // Right border color
    borderBottom: '15px solid  #5dc30f', // Bottom border color
    borderLeft: '15px solid transparent', // Left border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden' ,
    transform:'rotate(360deg)'
}}>
        
        <Box sx={{
        width:'85%',
        height:'85%',
        // borderTop:'10px solid black',
        borderRadius:'50%',
        backgroundColor:'white',display:'flex',
        flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        boxShadow: '0px 0px 6px -1px rgba(0, 0, 0, 0.5)',
        transform:'rotate(0deg)'
    }}>
        <Box>
            <img src="value3.svg" alt="" />
        </Box>
        <Typography sx={{fontFamily:'Inter',color:'#4b4b4b'}}>Focus</Typography>
    </Box>

    </Box>
        

    </Box>

     {/* ================================VALUE CARD FOURTH============================ */}
     <Box sx={{
        width:'14rem',
        height:'14rem',
        border:'2px solid black',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        cursor:'pointer'
    }}>
        <Box sx={{
          position:'absolute',
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    border: '10px solid transparent',
    borderTop: '15px solid transparent', // Top border color
    borderRight: '15px solid transparent', // Right border color
    borderBottom: '15px solid #3d73ec', // Bottom border color
    borderLeft: '15px solid transparent', // Left border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden' ,
    transform:'rotate(130deg)'
}}>
        
        <Box sx={{
        width:'85%',
        height:'85%',
        // borderTop:'10px solid black',
        borderRadius:'50%',
        backgroundColor:'white',display:'flex',
        flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        boxShadow: '0px 0px 6px -1px rgba(0, 0, 0, 0.5)',
        transform:'rotate(230deg)'
    }}>
        <Box>
            <img src="value4.svg" alt="" />
        </Box>
        <Typography sx={{fontFamily:'Inter',color:'#4b4b4b'}} >Integrity</Typography>
    </Box>

    </Box>
        

    </Box>

    {/* ================================VALUE CARD FIFTH============================ */}
    <Box sx={{
        width:'14rem',
        height:'14rem',
        border:'2px solid black',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        cursor:'pointer'
    }}>
        <Box sx={{
          position:'absolute',
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    border: '10px solid transparent',
    borderTop: '15px solid transparent', // Top border color
    borderRight: '15px solid transparent', // Right border color
    borderBottom: '15px solid #3d73ec', // Bottom border color
    borderLeft: '15px solid transparent', // Left border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden' ,
    transform:'rotate(230deg)'
}}>
        
        <Box sx={{
        width:'85%',
        height:'85%',
        // borderTop:'10px solid black',
        borderRadius:'50%',
        backgroundColor:'white',display:'flex',
        flexDirection:'column',
        justifyContent:'center',alignItems:'center',
        boxShadow: '0px 0px 6px -1px rgba(0, 0, 0, 0.5)',
        transform:'rotate(130deg)'
    }}>
        <Box>
            <img src="value5.svg" alt="" />
        </Box>
        <Typography sx={{fontFamily:'Inter',color:'#4b4b4b'}}>Agility</Typography>
    </Box>

    </Box>
        

    </Box>
    </Box>


   </Box>
    
    </>
  )
}

export default ValueCard