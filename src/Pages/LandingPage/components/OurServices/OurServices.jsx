import { Box, Grid, Typography, useTheme , useMediaQuery } from "@mui/material";
import React from "react";

const OurServices = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
const isMedium = useMediaQuery(theme.breakpoints.down("md"));



  const listData = [
    {
      image: "service1.svg",
      subimage: "servicelogo1.svg",
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
    },
    {
        image: "service2.svg",
        subimage: "servicelogo2.svg",
        title: "App Development",
        des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
      },{
        image: "service3.svg",
        subimage: "servicelogo3.svg",
        title: "UI|UX Design",
        des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
      },
      {
          image: "service4.svg",
          subimage: "servicelogo4.svg",
          title: "Custom Software",
          des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
        },
        {
            image: "service5.svg",
            subimage: "servicelogo5.svg",
            title: "SEO",
            des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
          },
          {
              image: "service6.svg",
              subimage: "servicelogo6.svg",
              title: "Social Media Marketing",
              des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
            },{
              image: "service7.svg",
              subimage: "servicelogonew.svg",
              title: "Content Marketing",
              des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
            },
            {
                image: "service8.svg",
                subimage: "servicelogo8.svg",
                title: "Meta Ad's",
                des: "Lorem ipsum dolor sit amet, conectetur adipiscing elit. Nunc egeposuere augue. Cras ac nibh exMauris eleifend eu justo a sollicit udin. Vivamus semper mollis massa nec lobortis.Praesent eleifend nec nunc maximus eleifend morbi efficitur feugiat leo. Duis veldin. Vivamus semper mollis masvmassa ullamcorper, porta nequesed, elementum magna. ",
              },
  ];

  return (
    <>
      <Box sx={{ padding: isSmall ? "2% 10%" : "1% 10%", marginTop:'1rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}> 
          <Typography
            sx={{
              fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
              fontWeight: 600,
              textAlign: "center",
              fontFamily:'Inter', marginBottom:'0.5rem',
              color:'#4b4b4b'
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 300,
              textAlign: "center",
              width:isSmall ? '100%' : '70%',
              fontFamily:'Inter',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            enim placerat, pharetra neque a, finibus sem Integer faucibus
            dignissim nulla, id pulvinar nisi tempor sit amet.
          </Typography>
        </Box>
        <br /><br />
        {/* ================================== SERVICES CARD ================================= */}
        <Box > 
           <Grid container spacing={2} justifyContent={'center'}>
           {listData.map((row , id)=>(
          <Grid key={id} item  xs={12} sm={6} md={4} lg={3}>
<Box 
sx={{
  backgroundImage: `url(${row.image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "25rem",
  width: "100%",
  display: "flex",
  alignItems: "end",
  // padding: "1rem",
  borderRadius:'10px',
  position: "relative",
  overflow: "hidden",
  cursor:'pointer',
  "&:hover .overplay": {
    transform: "translateY(0%)",
  },
  "&:hover .logo-text-overplay": {
    opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0s ease-in-out, visibility 0s',
  },
}}
>
{/* ========================= FILTER ================== */}
<Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    //   padding:'1rem'
  }}
></Box>

{/* ============================OVERPLAY============================= */}
<Box
  className="overplay"
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
      // width: "100%",
    height: "100%",
    backgroundColor: "rgba(40, 55, 189, 0.5)",
    transform: "translateY(100%)",
    transition: "1s",
    padding: "1rem",
  }}
>
  <img src={row.subimage} alt="" />
  <Typography
    sx={{
      color: "white",
      fontSize:'1.1rem',
      fontFamily:'Inter',
      marginTop:'1rem',
      fontFamily:500
    }}
  >
    {row.title}
  </Typography>
  
  <Typography
    sx={{
      color: "white",
      fontFamily:'Inter',
      marginTop:'.5rem'
    }}
  >
    {row.des}
  </Typography>
</Box>

<Box
  className="logo-text-overplay"
  sx={{
    zIndex: 1,
    height: "100%",
    width:'100%',
    transition: 'opacity 1s ease-in-out, visibility 0s linear .5s',
    display: "flex",
    flexDirection:'column',
    justifyContent:'end',
    padding:'1rem',
    visibility:'visible', 
    opacity:1,
    gap:2

  }}
>
  <img src={row.subimage} alt="" width={ isSmall ? '18%' : '22%'} />
  <Typography
    sx={{
      color: "white",
      fontFamily:'Inter',
      fontFamily:500
    }}
  >
   {row.title}
  </Typography>
</Box>
</Box>
            

          </Grid>
            ))}
           </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OurServices;
