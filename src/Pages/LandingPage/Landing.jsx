import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero/Hero";
import ValueCard from "./components/ValueCard/ValueCard";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import Testimonial from "./components/Testimonial/Testimonial";
import Header2 from "../Components/Header2";
import { blue } from "@mui/material/colors";
import { Brightness1, Filter, Gradient } from "@mui/icons-material";
import TechStacks from "./components/TechStacks/TechStacks";
import ContactForm from "./components/ContactUs/ContactForm";
import Footer from "../Components/Footer/Footer";
import Page from "../../components/page";
// import Page from "../../components/Page/Page";
// import { Route, Router, Routes } from "react-router-dom";

const Landing = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const stackRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const [ColorChange, setColorChange] = useState(false);




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <>
      <Page title="JaRob Tech" >
    <Box sx={{
      width:'100%'
    }}>

{/* <Router> */}

<Box sx={{
  backgroundColor:ColorChange ? 'white' : "transparent",
      width:'100%',
      position:'fixed',
      transition:'0.5s',
      top : ColorChange ? 0 :20,
      zIndex:3,
      boxShadow:ColorChange ? '1px 1px 10px green' : 'transparent',
      }}>

      <Box sx={{
        // padding:'1rem',
      width:'80%',
      margin:'0 auto',
      borderRadius:'10px',
      transition:'0.5s',
      // backgroundColor:'#53555488',
      backgroundColor:ColorChange ?  'white'  : 'rgba(184, 179, 179, 0.103)', // Semi-transparent white background
      backdropFilter: ColorChange ? 'none' : 'blur(10px)', // Blur effect for the watery look
      backgroundImage:ColorChange ? 'white' :  'linear-gradient(135deg, rgba(211, 211, 211, 0.26) 25%, rgba(200, 200, 255, 0.164) 75%)',
      color: ColorChange ? 'black' : 'white',

}}>
    <Header2 
         scrollToHero={() => scrollToSection(heroRef)}
         scrollToAbout={() => scrollToSection(aboutRef)}
         scrollToService={() => scrollToSection(servicesRef)}
         scrollToStacks={() => scrollToSection(stackRef)}
         scrollToTestimonial={() => scrollToSection(testimonialRef)}
         scrollToContact={() => scrollToSection(contactRef)}
    />
    </Box>
      </Box>

 
      <div ref={heroRef}>
          <Hero />
        </div>
        <ValueCard/>
        <div ref={aboutRef}>
          <AboutUs/>
        </div>
        <div ref={servicesRef}>
        <OurServices/>
        </div>
        <div ref={stackRef}>
        <TechStacks/>
        </div>
        <div ref={testimonialRef}>
        <Testimonial/>
        </div>
        <div ref={contactRef}>
        <ContactForm/>
        </div>
    
    
    
    <Footer
    scrollToHero={() => scrollToSection(heroRef)}
    scrollToAbout={() => scrollToSection(aboutRef)}
    scrollToService={() => scrollToSection(servicesRef)}
    scrollToStacks={() => scrollToSection(stackRef)}
    scrollToTestimonial={() => scrollToSection(testimonialRef)}
    scrollToContact={() => scrollToSection(contactRef)}
    />

    </Box>

    </Page>
    
    </>
  );
};

export default Landing;
