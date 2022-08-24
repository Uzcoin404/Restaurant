import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import "./hero.scss";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <Box id="hero" sx={{}}>
            <Container>
                <Typography
                    variant="h2"
                    fontSize="60px"
                    lineHeight="73px"
                    color="#fff"
                    sx={{
                        "& span": {
                            fontWeight: 700,
                        },
                        "@media (max-width: 500px)": {
                            fontSize: 44,
                            lineHeight: "60px",
                        },
                    }}
                >
                    Meat <span>Chicken</span>
                </Typography>
                <Link to="/products">
                    <Button
                        variant="outlined"
                        color="white"
                        sx={{
                            mt: 5,
                            px: 9,
                            py: 0,
                            fontSize: 50,
                            lineHeight: "80px",
                            "@media (max-width: 500px)": {
                                fontSize: 30,
                                lineHeight: "56px",
                                px: 6,
                                mt: 4,
                            },
                        }}
                    >
                        More
                    </Button>
                </Link>
            </Container>
        </Box>
    );
}
