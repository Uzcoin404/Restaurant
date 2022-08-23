import React from "react";
import { NavLink as Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuClose } from "../menuToggle";

import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Toolbar,
} from "@mui/material";
import logo from "../../assets/img/logo.png";

export default function MobileNav() {
    const dispatch = useDispatch();
    const drawerWidth = "250px";
    const open = useSelector((state) => state.menuToggle.open);
    const pages = [
        { name: "Home", link: "#" },
        { name: "Explore", link: "#" },
        { name: "Help", link: "#" },
        { name: "Profile", link: "#" },
    ];

    return (
        <Box component="nav" sx={{ flexShrink: { sm: 0 } }}>
            <Drawer
                variant="temporary"
                open={open}
                onClose={() => dispatch(menuClose())}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Link to="/">
                        <Box
                            component="img"
                            src={logo}
                            alt=""
                            sx={{
                                width: 120,
                                height: 40,
                            }}
                        />
                    </Link>
                </Toolbar>
                <List>
                    {pages.map((config, i) => (
                        <ListItem button onClick={() => dispatch(menuClose())}>
                            <ListItemText primary={config.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
