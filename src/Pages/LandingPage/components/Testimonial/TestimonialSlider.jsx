import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Card, Typography,useTheme } from '@mui/material';
// import { useTheme } from '@emotion/react';

const TestimonialSlider = () => {

  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust according to your layout
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const listData = [
    {
      avatar: 'testimonial.svg',
      title: 'Jos Buttler',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel hend rerit lacus. Nam at turpis augue. Duis sed efficitur ligula. Vestib ulum nibh mauris, hendrerit et magna.'
    },
    {
      avatar: 'testimonial.svg',
      title: 'Steve Smith',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel hend rerit lacus. Nam at turpis augue. Duis sed efficitur ligula. Vestib ulum nibh mauris, hendrerit et magna.'
    },
    {
      avatar: 'testimonial.svg',
      title: 'Virat Kohli',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel hend rerit lacus. Nam at turpis augue. Duis sed efficitur ligula. Vestib ulum nibh mauris, hendrerit et magna.'
    },
    {
      avatar: 'testimonial.svg',
      title: 'Kane Williamson',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel hend rerit lacus. Nam at turpis augue. Duis sed efficitur ligula. Vestib ulum nibh mauris, hendrerit et magna.'
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {listData.map((row, id) => (
          <Box key={id} sx={{ paddingX: 1, display: 'flex', justifyContent: 'center', }}>
            <Box>
                <Card sx={{
              width: '95%', // Adjust width as necessary
              borderRadius: '10px',
              position: 'relative',
              backgroundColor: '#3d73ec',
              boxSizing: 'border-box',cursor:'pointer'
            }}>
             <Box sx={{
                backgroundColor: '#f5f5f5',
                padding: '2rem',
                marginBottom:'.7rem'
                // height:'90%'
             }} >
             <Box sx={{
                backgroundColor: theme.palette.primary.main,
                position: 'absolute',
                padding: '1rem',
                top: 0,
                right: 0,
                borderRadius: "0 0 0 50px",
              }}>
                <img src="testnimoniallogo.svg" alt="" style={{ width: '2rem' }} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar src={row.avatar} sx={{ width: '5rem', height: '5rem' }} />
              </Box>
              <br />
              <Typography sx={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: theme.palette.primary.main,
                textAlign: 'center',
              fontFamily:'Inter'
              }}>
                {row.title}
              </Typography>
              <br /><br />
              <Typography sx={{
                fontSize: '1rem',
                fontWeight: 400,
                textAlign: 'center',
                color: 'black',
                fontFamily:'Inter'
              }}>
                {row.des}
              </Typography>
             </Box>
            </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
