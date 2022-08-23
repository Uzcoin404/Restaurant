import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Rating,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import productData from "../../components/productData";

export default function ProuductPage() {
    const { id } = useParams();
    const data = productData[id - 1];
    const price = data.price;

    const [amount, setAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);
    const [rating, setRating] = useState(data.rating);

    const incrementAmount = () => {
        setAmount(amount + 1);
    };
    const decrementAmount = () => {
        if (amount != 0) {
            setAmount(amount - 1);
        }
    };
    useEffect(() => {
        setTotalPrice(amount * price);
    }, [amount]);

    return (
        <>
            <Nav />
            <Box>
                <Container
                    sx={{
                        display: { xs: "block", md: "flex" },
                        alignItems: "center",
                        py: { xs: 4, md: 6 },
                    }}
                >
                    <Box
                        sx={{
                            mr: { xs: 0, md: 15 },
                            backgroundColor: "#15ff004a",
                            py: 5,
                            px: 4,
                            pr: { xs: 4, md: 0 },
                            borderRadius: 12,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={data.image}
                            alt=""
                            sx={{
                                width: { xs: "100%", md: 360 },
                                maxWidth: "500px",
                                maxHeight: { xs: 250, sm: 300, md: 400 },
                                transform: {
                                    xs: "inherit",
                                    md: "translateX(60px)",
                                },
                                borderRadius: 12,
                            }}
                        />
                    </Box>
                    <Box sx={{ mt: { xs: 4, md: 0 } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 1,
                                pb: 1,
                                borderBottom: "1px solid #D9D9D9",
                            }}
                        >
                            Fresh Tomatoes
                        </Typography>
                        <Typography maxWidth={500}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa ad deserunt dolore cumque
                            perspiciatis mollitia excepturi velit beatae.
                            Tempore.
                        </Typography>
                        <Rating
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <Typography variant="h5" color="orange" sx={{ my: 2 }}>
                            ${price}
                        </Typography>
                        <Box
                            sx={{
                                width: "max-content",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #D9D9D9",
                                borderRadius: 2,
                            }}
                        >
                            <Button color="error" onClick={decrementAmount}>
                                <RemoveIcon />
                            </Button>
                            <TextField
                                value={amount}
                                type="number"
                                size="small"
                                min="0"
                                sx={{
                                    width: 80,
                                    height: "100%",
                                    "& fieldset": {
                                        border: "none",
                                    },
                                    "& input": {
                                        textAlign: "center",
                                        p: 0,
                                        height: 36,
                                    },
                                    "& input[type=number]": {
                                        "-moz-appearance": "textfield",
                                    },
                                    "& input[type=number]::-webkit-outer-spin-button":
                                        {
                                            "-webkit-appearance": "none",
                                            margin: 0,
                                        },
                                    "& input[type=number]::-webkit-inner-spin-button":
                                        {
                                            "-webkit-appearance": "none",
                                            margin: 0,
                                        },
                                }}
                                onChange={(e) =>
                                    setAmount(Number(e.target.value))
                                }
                            />

                            <Button color="success" onClick={incrementAmount}>
                                <AddIcon />
                            </Button>
                        </Box>
                        <Typography fontWeight={700} sx={{ mb: 0.5, mt: 2 }}>
                            Total
                        </Typography>
                        <Typography variant="h5" color="orange">
                            ${totalPrice}
                        </Typography>
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{ my: 3 }}
                        >
                            Buy now
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
