import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
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
      des: "Your digital vision, our expertise. Jarob Tech bridges the gap between front-end, back-end, and architecture to deliver tailored web solutions that drive your business forward. With a proven track record, we'll craft innovative software that exceeds your expectations. Contact us to discuss your project.",
    },
    {
      image: "service2.svg",
      subimage: "servicelogo2.svg",
      title: "App Development",
      des: "Turn your ideas into reality. Our full-cycle app development experts create stunning, stable, and scalable apps for Android, iOS, mobile TV, and tablets. From concept to launch and beyond, we're your trusted partner.",
    },
    {
      image: "service3.svg",
      subimage: "servicelogo3.svg",
      title: "UI|UX Design",
      des: "Need a digital platform that stands out? Our UI/UX experts will craft a captivating design tailored to your audience. Let's build a user-friendly experience that sets you apart. Contact us today to discuss your project.",
    },
    {
      image: "service4.svg",
      subimage: "servicelogo4.svg",
      title: "Custom Software",
      des: "Need custom software? Jarob Tech offers tailored solutions for startups and enterprises. With flexible outsourcing, budget-friendly options, and a focus on quality, we'll guide you from concept to implementation. Let's maximize your potential together.",
    },
    {
      image: "service5.svg",
      subimage: "servicelogo5.svg",
      title: "SEO",
      des: "Boost your online visibility with Jarob Tech. Our expert team offers tailored SEO solutions to help you reach more customers. From basic campaigns to advanced strategies, we’ll optimize your website for search engines and drive organic traffic. Contact us to learn more.",
    },
    {
      image: "service6.svg",
      subimage: "servicelogo6.svg",
      title: "Social Media Marketing",
      des: "Identify your target customers with Jarob Tech. Our social media experts offer tailored services to boost your brand's visibility and engage your audience. From account setup to paid ads, we'll help you build a strong online presence. Let Jarob Tech drive results for your business.",
    },
    {
      image: "service7.svg",
      subimage: "servicelogonew.svg",
      title: "Content Marketing",
      des: "Tired of treating customers like wallets? Jarob Tech builds meaningful connections through high-quality content. Our strategies combine SEO, social media, email marketing, PR, and CRO to create content that resonates and drives conversions. Let Jarob Tech help you build a strong brand story and improve your customer experience.",
    },
    {
      image: "service8.svg",
      subimage: "servicelogo8.svg",
      title: "Meta Ad's",
      des: "Unlock the power of Meta ads with Jarob Tech. Our experts deliver targeted campaigns that drive results. We offer audits, compelling creatives, optimized strategies, and scalable growth. Partner with us for a high ROI..",
    },
  ];

  return (
    <>
      <Box
        sx={{
          padding: isSmall ? "2% 10%" : "1% 10%",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Inter",
              marginBottom: "0.5rem",
              color: "#4b4b4b",
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 300,
              textAlign: "center",
              width: isSmall ? "100%" : "70%",
              fontFamily: "Inter",
            }}
          >
            We deliver exceptional customer satisfaction through high-quality
            products and services at affordable prices. We provide a wide range
            of services. Let’s connect your idea with digital maturity. Discover
            our services.
          </Typography>
        </Box>
        <br />
        <br />
        {/* ================================== SERVICES CARD ================================= */}
        <Box>
          <Grid container spacing={2} justifyContent={"center"}>
            {listData.map((row, id) => (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
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
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover .overplay": {
                      transform: "translateY(0%)",
                    },
                    "&:hover .logo-text-overplay": {
                      opacity: 0,
                      visibility: "hidden",
                      transition: "opacity 0s ease-in-out, visibility 0s",
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
                        fontSize: "1.1rem",
                        fontFamily: "Inter",
                        marginTop: "1rem",
                        fontFamily: 500,
                      }}
                    >
                      {row.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Inter",
                        marginTop: ".5rem",
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
                      width: "100%",
                      transition:
                        "opacity 1s ease-in-out, visibility 0s linear .5s",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      padding: "1rem",
                      visibility: "visible",
                      opacity: 1,
                      gap: 2,
                    }}
                  >
                    <img
                      src={row.subimage}
                      alt=""
                      width={isSmall ? "18%" : "22%"}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Inter",
                        fontFamily: 500,
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
