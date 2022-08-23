import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    MenuItem,
    Menu,
    Tooltip,
    Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { menuToggle } from "../menuToggle";
import MobileNav from "./mobileNav";

import Search from "../search/search";
import logo from "../../assets/img/logo.png";

export default function Nav() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const dispatch = useDispatch();
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings = ["Profile", "Account", "Dashboard", "Logout"];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <Link to="/">
                            <Box
                                component="img"
                                src={logo}
                                alt=""
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    width: 120,
                                    height: 40,
                                    mr: 2,
                                }}
                            />
                        </Link>
                        <IconButton
                            size="large"
                            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
                            onClick={() => dispatch(menuToggle())}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Search />

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton size="large">
                            <Badge badgeContent={4} color="success">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <Box sx={{ flexGrow: 0, ml: 3 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar src="" alt="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: 5 }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <MobileNav />
        </Box>
    );
}
