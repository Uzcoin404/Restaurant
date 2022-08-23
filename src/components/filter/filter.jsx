import React, { useState } from "react";
import {
    Box,
    Typography,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Modal,
} from "@mui/material";

export default function Filter({modalOpen, setModalOpen}) {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: 400,
        minWidth: 300,
        height: "100vh",
        bgcolor: "#fff",
        boxShadow: 24,
        px: 4,
        display: { xs: "block", md: "none" },
        overflowY: "scroll",
    };

    const [diet, setDiet] = useState([
        "Dairy Free",
        "Egg Free",
        "Sugar Free",
        "Gluten Free",
    ]);
    const [allergies, setAllergies] = useState([
        "Glutten",
        "Glutten",
        "Glutten",
        "Glutten",
    ]);
    const [goals, setGoals] = useState([
        "Weight loss",
        "Freshness",
        "Activeness",
        "Rich Nutritions",
    ]);

    function FilterContent({ modal = false }) {
        return (
            <>
                <Typography
                    variant="h3"
                    lineHeight="65px"
                    color="#84BD00"
                    sx={{
                        mb: {xs: 2, md: 5},
                        "@media (max-width: 500px)": {
                            fontSize: 36,
                            lineHeight: "60px",
                        },
                    }}
                    fontFamily="'Montez', cursive"
                >
                    Filter Recipes
                </Typography>
                <form
                    action="#"
                    style={!modal ? { position: "sticky", top: 15 } : {}}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormGroup sx={{ mb: 4, display: "inline-block" }}>
                            <Typography
                                variant="h4"
                                color="#84BD00"
                                fontSize="30px"
                                lineHeight="37px"
                            >
                                Diet
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    ml: 2,
                                }}
                            >
                                {diet.map((row, i) => (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox
                                                size="large"
                                                color="success"
                                            />
                                        }
                                        label={row}
                                        sx={{
                                            "& span": {
                                                fontSize: "20px",
                                                lineHeight: "24px",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </FormGroup>
                        <FormGroup sx={{ mb: 4, display: "inline-block" }}>
                            <Typography
                                variant="h4"
                                color="#84BD00"
                                fontSize="30px"
                                lineHeight="37px"
                            >
                                Allergies
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    ml: 2,
                                }}
                            >
                                {allergies.map((row, i) => (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox
                                                size="large"
                                                color="success"
                                            />
                                        }
                                        label={row}
                                        sx={{
                                            "& span": {
                                                fontSize: "20px",
                                                lineHeight: "24px",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </FormGroup>
                        <FormGroup sx={{ mb: 4, display: "inline-block" }}>
                            <Typography
                                variant="h4"
                                color="#84BD00"
                                fontSize="30px"
                                lineHeight="37px"
                            >
                                Goals
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    ml: 2,
                                }}
                            >
                                {goals.map((row, i) => (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox
                                                size="large"
                                                color="success"
                                            />
                                        }
                                        label={row}
                                        sx={{
                                            "& span": {
                                                fontSize: "20px",
                                                lineHeight: "24px",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </FormGroup>
                    </Box>
                </form>
            </>
        );
    }

    return (
        <>
            <Box
                id="filter"
                sx={{
                    maxWidth: 240,
                    mr: 5,
                    display: { xs: "none", md: "block" },
                }}
            >
                <FilterContent />
            </Box>
            <Modal open={modalOpen} onClose={() => {setModalOpen(false)}} keepMounted>
                <Box sx={style}>
                    <FilterContent modal={true} />
                </Box>
            </Modal>
        </>
    );
}
