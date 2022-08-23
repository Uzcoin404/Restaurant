import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    TextField,
    IconButton,
} from "@mui/material";

import logo from "../../assets/img/logo.png";
import emailSend from "../../assets/img/icon/email-send.svg";
import facebook from "../../assets/img/icon/facebook.svg";
import instagram from "../../assets/img/icon/instagram.svg";
import twitter from "../../assets/img/icon/twitter.svg";
import youtube from "../../assets/img/icon/youtube.svg";
import "./footer.scss";

export default function Footer() {
    const recipes = [
        "Recipes",
        "Winter salads",
        "Organic chicken",
        "Beef and Mutton",
        "Flavoured Milk",
    ];
    const news = [
        "Our Blogs",
        "Contests/Sweepsatkes",
        "Video",
        "New Releases",
        "Newsletters",
    ];
    const about = ["FAQ", "Our Board", "Out Staff", "Contact Us"];
    return (
        <Box component="footer" className="footer">
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                    }}
                >
                    <img src={logo} alt="" className="footer__logo" />
                    <Typography fontSize={20}>All Rights Reserved</Typography>
                </Box>
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                backgroundColor: "transparent",
                                color: "#C9C9C9",
                                p: 0,
                                fontSize: 20,
                                lineHeight: "24px",
                                fontWeight: 400,
                            }}
                        >
                            Fresh Recipe
                        </ListSubheader>
                    }
                >
                    {recipes.map((row, i) => (
                        <ListItem disablePadding key={i}>
                            <Link to="/#">
                                <ListItemText
                                    primary={row}
                                    sx={{
                                        color: "#C9C9C9",
                                        lineHeight: "18px",
                                        "& span": {
                                            fontSize: 15,
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                backgroundColor: "transparent",
                                color: "#C9C9C9",
                                p: 0,
                                fontSize: 20,
                                lineHeight: "24px",
                                fontWeight: 400,
                            }}
                        >
                            In News
                        </ListSubheader>
                    }
                >
                    {news.map((row, i) => (
                        <ListItem disablePadding key={i}>
                            <Link to="#">
                                <ListItemText
                                    primary={row}
                                    sx={{
                                        color: "#C9C9C9",
                                        lineHeight: "18px",
                                        "& span": {
                                            fontSize: 15,
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                backgroundColor: "transparent",
                                color: "#C9C9C9",
                                p: 0,
                                fontSize: 20,
                                lineHeight: "24px",
                                fontWeight: 400,
                            }}
                        >
                            About Us
                        </ListSubheader>
                    }
                >
                    {about.map((row,i) => (
                        <ListItem disablePadding key={i}>
                            <Link to="#">
                                <ListItemText
                                    primary={row}
                                    sx={{
                                        color: "#C9C9C9",
                                        lineHeight: "18px",
                                        "& span": {
                                            fontSize: 15,
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Box>
                    <Typography
                        variant="h4"
                        lineHeight="52px"
                        fontFamily="'Montez', cursive"
                    >
                        Join Our Newsletter
                    </Typography>
                    <form
                        action="#"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            color="white"
                            sx={{
                                "& fieldset": {
                                    borderColor: "#fff !important",
                                },
                                "& label": { color: "#fff" },
                                "& input": { color: "#fff" },
                            }}
                        />
                        <IconButton type="submit" color="white">
                            <img src={emailSend} alt="" />
                        </IconButton>
                    </form>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: 1.5,
                            mt: 3,
                        }}
                    >
                        <Link to="#">
                            <img src={facebook} alt="" />
                        </Link>
                        <Link to="#">
                            <img src={instagram} alt="" />
                        </Link>
                        <Link to="#">
                            <img src={twitter} alt="" />
                        </Link>
                        <Link to="#">
                            <img src={youtube} alt="" />
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
