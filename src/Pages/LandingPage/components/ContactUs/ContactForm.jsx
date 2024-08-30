import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { styled } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    backgroundColor: "white",
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "black",
    fontFamily: "Inter",
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "black",
    opacity: 1, // Ensure the placeholder is fully opaque
  },
});
const ContactForm = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "mailto:info@jarobtech.com";
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          padding: "3% 10%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: "1.1rem",
              fontWeight: "400",
              fontFamily: "Inter",
              // textAlign:'center'
            }}
          >
            CONTACT US
          </Typography>
          <br />
        </Box>

        <Grid container spacing={10}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.6rem" : isMedium ? "2rem" : "2.5rem",
                  fontWeight: 600,
                  // color: theme.palette.primary.main,
                  fontFamily: "Inter",
                  color: "#4b4b4b",
                }}
              >
                Contact With Us
              </Typography>
              <br />

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  // color: "white",
                  textAlign: "justify",
                  marginBottom: "1rem",
                  fontFamily: "Inter",
                }}
              >
                Ready to turn your business vision into reality? Let's talk
                about your next project. Our team of experienced IT
                professionals is eager to discuss your unique needs and provide
                tailored solutions. Get in touch with your trusted team that
                meets your desires.
              </Typography>
              <br />

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: isSmall
                        ? "1.3rem"
                        : isMedium
                        ? "1.6rem"
                        : "1.8rem",
                      fontWeight: 600,
                      color: "#4b4b4b",
                      // color: theme.palette.primary.main,
                      fontFamily: "Inter",
                      "&:hover": {
                        color: "#5dc30f",
                      },
                    }}
                  >
                    Head Office
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    marginLeft: "-0.8rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover .formlink1, &:hover .formtext1": {
                        color: "#5dc30f",
                      },
                    }}
                  >
                    <IconButton>
                      <IoLocationOutline
                        className="formlink1"
                        color={"#3d73ec"}
                      />
                    </IconButton>
                    <Typography
                      className="formtext1"
                      sx={{ fontFamily: "Inter" }}
                    >
                      Tech City Township, Lahore-Pakistan
                    </Typography>
                  </Box>

                  <a
                    href="tel: +92 (307) 067 3595"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IconButton>
                        <LuPhone color={"#3d73ec"} />
                      </IconButton>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          "&:hover": {
                            color: "#5dc30f",
                          },
                        }}
                      >
                        +92 (307) 067 3595
                      </Typography>
                    </Box>
                  </a>

                  <a
                    href="mailto: info@jarobtech.com"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={handleClick}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IconButton>
                        <AiOutlineMail color={"#3d73ec"} />
                      </IconButton>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          "&:hover ": {
                            color: "#5dc30f",
                          },
                        }}
                      >
                        info@jarobtech.com
                      </Typography>
                    </Box>
                  </a>
                </Box>
                {/* ===============================SOCIAL LINKS==================================================== */}
                {/* <Box
                sx={{
                  display: "flex",
                  // justifyContent:'space-between',
                  gap: 2,
                }}
              >
                <a href="https://www.google.com/">
                  <Typography
                    variant="i"
                    sx={{
                      color: theme.palette.primary.main,
                      border: "2px solid #98c447",
                      padding: ".3rem .2rem 0rem .2rem",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                    }}
                  >
                    <FaFacebookF />
                  </Typography>
                </a>

                <a href="https://www.google.com/">
                  <Typography
                    variant="i"
                    sx={{
                      color: theme.palette.primary.main,
                      border: "2px solid #98c447",
                      padding: ".3rem .2rem 0rem .2rem",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                    }}
                  >
                    <FaInstagram />
                  </Typography>
                </a>

                <a href="https://www.google.com/">
                  <Typography
                    variant="i"
                    sx={{
                      color: theme.palette.primary.main,
                      border: "2px solid #98c447",
                      padding: ".3rem .2rem 0rem .2rem",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                    }}
                  >
                    <FaXTwitter />
                  </Typography>
                </a>

                <a href="https://www.google.com/">
                  <Typography
                    variant="i"
                    sx={{
                      color: theme.palette.primary.main,
                      border: "2px solid #98c447",
                      padding: ".3rem .2rem 0rem .2rem",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                    }}
                  >
                    <FaThreads />
                  </Typography>
                </a>
              </Box> */}
              </Box>
            </Box>
          </Grid>

          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.6rem" : isMedium ? "2rem" : "2.5rem",
                  fontWeight: 600,
                  // color: theme.palette.primary.main,
                  fontFamily: "Inter",
                  color: "#4b4b4b",
                }}
              >
                Reach Us Quickly
              </Typography>
              <br />
            </Box>
            <form action="">
              <Grid container spacing={2} marginBottom={"1rem"}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    placeholder="Full Name"
                    size="small"
                    varient="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    placeholder="Phone Number"
                    size="small"
                    varient="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} marginBottom={"1rem"}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    placeholder="Email Address"
                    size="small"
                    varient="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    placeholder="Company Name"
                    size="small"
                    varient="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <CustomTextField
                placeholder="Your Message"
                size="small"
                varient="outlined"
                fullWidth
                multiline
                rows={5}
              />
              <Button
                variant="contained"
                sx={{
                  marginTop: "3rem",
                  color: "white",
                  textTransform: "none",
                  fontFamily: "Inter",
                  fontWeight: 200,
                  backgroundColor: "#3d73ec",
                  padding: "1rem 3rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>

        <Box width={"100%"} marginTop={"3rem"}>
          <img src="contactmap1.svg" alt="" width={"100%"} />
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;

{
  /* <Box >
            <CustomTextField 
            placeholder="Full Name"
            size="small"
            varient ='outlined'
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
            <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            rows={10}
            fullWidth
            />
            </Box> */
}
