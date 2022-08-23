import React from "react";
import {
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
    const categories = [
        { name: "All Categories", selected: true },
        { name: "Fruits" },
        { name: "Cookies" },
        { name: "Pizza" },
        { name: "Burgers" },
    ];
    return (
        <Box
            id="search"
            sx={{
                display: { xs: "none", sm: "block" },
            }}
        >
            <form action="/products">
                <Box
                    sx={{
                        display: "flex",
                        borderRadius: 8,
                        overflow: "hidden",
                        border: "1px solid #D9D9D9",
                        height: 45,
                    }}
                >
                    <FormControl sx={{ width: "100%" }}>
                        <Select
                            id="filter__select"
                            sx={{
                                height: 45,
                                minWidth: 175,
                                backgroundColor: "rgba(208, 197, 197, 0.2)",
                                borderRadius: 8,
                                "& fieldset": {
                                    border: "none",
                                },
                            }}
                            // InputLabelProps={{ shrink: false }}
                            defaultValue="0"
                        >
                            {categories.map((category, i) => (
                                <MenuItem key={i} value={i}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box
                        component="input"
                        type="search"
                        placeholder="Search"
                        sx={{ pl: 3.5, pr: 1.5, border: "none", width: "100%" }}
                    />
                    <IconButton
                        type="submit"
                        sx={{ backgroundColor: "#D9D9D9 !important", pl: 1.25 }}
                    >
                        <SearchIcon color="#000" />
                    </IconButton>
                </Box>
            </form>
        </Box>
    );
}
