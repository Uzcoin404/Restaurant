import React from "react";

import { Box, Container, Button, Grid, Typography } from "@mui/material";

import Nav from "../../components/nav/nav";
import Hero from "../../components/hero/hero";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import productData from "../../components/productData";

export default function Products() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const pages = [
        { name: "Home", link: "#" },
        { name: "Explore", link: "#" },
        { name: "Help", link: "#" },
        { name: "Profile", link: "#" },
    ];
    const catalogs = ["Cusines", "Diet", "Bakery"];

    return (
        <>
            <Nav />
            <Hero />
            <Box id="products" sx={{ mt: 4 }}>
                <Container sx={{ display: "flex" }}>
                    <Filter modalOpen={modalOpen} setModalOpen={setModalOpen} />
                    <Box sx={{ width: "100%" }}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-evenly",
                                py: 1,
                                borderTop:
                                    "1.5px solid rgba(208, 197, 197, 0.5)",
                                borderBottom:
                                    "1.5px solid rgba(208, 197, 197, 0.5)",
                            }}
                        >
                            {pages.map((page, i) => (
                                <Button
                                    key={i}
                                    href={page.link}
                                    color="success"
                                    sx={{
                                        py: 1,
                                        px: 3,
                                        display: "block",
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            color="success"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 1, display: { xs: "block", md: "none" } }}
                            onClick={() => setModalOpen(true)}
                        >
                            Filter
                        </Button>
                        <Box sx={{ mt: 3 }}>
                            {catalogs.map((catalog, i) => (
                                <Box sx={{ mb: 4 }} key={i}>
                                    <Typography
                                        variant="h3"
                                        fontSize={50}
                                        lineHeight="65px"
                                        color="#84BD00"
                                        fontFamily="'Montez', cursive"
                                        sx={{
                                            textAlign: {
                                                mb: 1,
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
                                            .slice(i * 3, i * 3 + 3)
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
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
