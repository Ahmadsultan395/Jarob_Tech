import {
    Box,
    Divider,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    useTheme, useMediaQuery,
    Link as MuiLink,
    IconButton,
  } from "@mui/material";
  import React from "react";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import { Link } from "react-router-dom";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import PinterestIcon from "@mui/icons-material/Pinterest";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
  import { useLocation } from "react-router-dom";
  import { FaFacebookF } from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import "./Footer.css"




  const Footer = ({scrollToHero, scrollToAbout, scrollToService, scrollToStacks, scrollToTestimonial, scrollToContact }) => {
    
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  
    // const location = useLocation()
  
  
    // const currentPath = location.pathname;
  
    // const isHidden =
    //   currentPath === "/";
  
    // if (isHidden) {
    //   return null;
    // }
    return (
      <>
        <Box sx={{
            backgroundImage:'url(footerbg.svg)',
            backgroundPosition:'center',
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat', 
            // padding:'2rem',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            overflow:'hidden'
        }}>
         
         <Box  sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            padding:'2rem'
         }}>
            <Box sx={{
                width:'70%'
            }}>
                <img src="footerlogo.svg" alt="" width={'100%'} />
            </Box>
            <br /><br />
            <Box sx={{
                display:'flex', width:'100%',
                justifyContent:'center',

            }}>
                <ul className="footer-links" style={{
                    display:'flex',
                    color:'White', gap: isSmall ? 20  : 25,
                     fontFamily:'Inter',
                     fontSize: isSmall ? '0.7rem' : '1rem',cursor:'pointer',
                }}>
                    <li onClick={scrollToHero} >Home</li>
                    <li onClick={scrollToAbout} >About</li>
                    <li onClick={scrollToService} >Services</li>
                    <li onClick={scrollToStacks} >Stacks</li>
                    <li onClick={scrollToTestimonial} >Testimonial</li>
                    <li onClick={scrollToContact} >Contact</li>
                </ul>
            </Box>
            <br /><br />
            <Box>
               <a href="https://www.facebook.com/people/JaRob-Tech/61564026085056/">
               <IconButton sx={{
                    border:'1px solid white', 
                    borderRadius:'0px',
                    color:'white',
                    fontSize:'1.5rem',
                    '&:hover' : {
                      color:'#5dc30f'
                    }
                }}> 
                    <FaFacebookF/>
                </IconButton>
               </a>

                <a href="https://www.linkedin.com/company/jarob-tech/">
                <IconButton sx={{
                    border:'1px solid white', 
                    borderRadius:'0px',
                    color:'white',
                    fontSize:'1.5rem',
                    '&:hover' : {
                      color:'#5dc30f'
                    }
                }}>
                    <FaLinkedinIn/>
                </IconButton>
                </a>

                <a href="https://www.linkedin.com/company/jarob-tech/">
                <IconButton sx={{
                    border:'1px solid white', 
                    borderRadius:'0px',
                    color:'white',
                    fontSize:'1.5rem',
                    '&:hover' : {
                      color:'#5dc30f'
                    }
                }}>
                    <FaInstagram/>
                </IconButton>
                </a>
            </Box>
         </Box>
         <br />
          <Divider sx={{backgroundColor:'white', width:'80%'}} />
  
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem", 
            }}
          >
            <Typography sx={{ fontSize: isSmall ? '0.7rem' : "0.9rem", color: "White", fontFamily:'Inter', fontWeight:500 }}>
            © Terms of Use | Privacy Policy | © 2024 JaRob Tech
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Footer;
  