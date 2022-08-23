import React from "react";

import { Box, Container, Typography, Grid } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Nav from "../../components/nav/nav";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import productData from "../../components/productData";

import "@splidejs/react-splide/css";
import partners1 from "../../assets/img/download.png";
import partners2 from "../../assets/img/download (1).png";
import partners3 from "../../assets/img/download (2).png";
import partners4 from "../../assets/img/download (3).png";
import partners5 from "../../assets/img/download (4).png";

export default function Home() {
    const catalogs = ["Popular products"];
    return (
        <>
            <Nav />
            <Hero />
            <Box sx={{ mt: 3 }}>
                <Container>
                    {catalogs.map((catalog, i) => (
                        <Box sx={{ mb: 4 }} key={i}>
                            <Typography
                                variant="h3"
                                fontSize={50}
                                lineHeight="65px"
                                color="#84BD00"
                                fontFamily="'Montez', cursive"
                                sx={{
                                    mb: 1,
                                    textAlign: {
                                        xs: "center",
                                        sm: "start",
                                    },
                                }}
                            >
                                {catalog}
                            </Typography>
                            <Grid
                                container
                                rowSpacing={{ xs: 2, sm: 4 }}
                                columnSpacing={{ xs: 2, md: 4 }}
                            >
                                {productData
                                    .slice(i * 6, i * 3 + 6)
                                    .map((row, i) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            lg={4}
                                            key={i}
                                        >
                                            <Card data={row} />
                                        </Grid>
                                    ))}
                            </Grid>
                        </Box>
                    ))}
                    <Box
                        sx={{
                            my: 6,
                            "& .splide__slide": {
                                display: "flex",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontSize={44}
                            lineHeight="55px"
                            color="#84BD00"
                            fontFamily="'Montez', cursive"
                            sx={{
                                mb: 3,
                                textAlign: "center",
                            }}
                        >
                            Our partners
                        </Typography>
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 4,
                                gap: "5rem",
                                autoplay: true,
                                breakpoints: {
                                    768: {
                                        perPage: 3,
                                    },
                                    500: {
                                        perPage: 2,
                                    },
                                },
                            }}
                        >
                            <SplideSlide>
                                <img
                                    src={partners1}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    src={partners2}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    src={partners3}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    src={partners4}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <img
                                    src={partners5}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </SplideSlide>
                        </Splide>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
