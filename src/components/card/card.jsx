import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Card as MuiCard,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Rating,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmsIcon from "@mui/icons-material/Sms";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Card({data}) {
    const noWrapper = {
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box",
    };
    return (
        <MuiCard sx={{ maxWidth: 360, boxShadow: 'none', margin: {xs: '0 auto', sm: 0}}}>
            <Link to={"/product/" + data.id}>
            <CardMedia component="img" height="140" image={data.image} alt="" />
            </Link>
            <CardContent
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 0,
                    py: 1,
                }}
            >
                <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={noWrapper}
                >
                    {data.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={12}
                    sx={{
                        backgroundColor: "#84BD00",
                        p: 0.5,
                        whiteSpace: "nowrap",
                        "& span": {
                            fontWeight: 700,
                        },
                        ml: 1,
                    }}
                >
                    <span>$</span> {data.price}
                </Typography>
            </CardContent>
            <CardActions sx={{p: 0, justifyContent: 'space-between'}}>
                <Box>
                    <Typography
                        fontSize={12}
                        sx={{ display: "flex", alignItems: "center", whiteSpace: 'nowrap', mb: 0.5 }}
                    >
                        <AccessTimeIcon
                            fontSize="small"
                            sx={{ width: 15, height: 15, mr: 0.5 }}
                        />
                        {data.time}
                    </Typography>
                    <Typography
                        fontSize={12}
                        sx={{ display: "flex", alignItems: "center", whiteSpace: 'nowrap' }}
                    >
                        <SmsIcon
                            fontSize="small"
                            sx={{ width: 12, height: 12, mr: 0.5 }}
                        />
                        35
                        <ThumbUpIcon
                            fontSize="small"
                            sx={{ width: 12, height: 12, ml: 1.5, mr: 0.5 }}
                        />
                        55
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize={12} style={noWrapper} textAlign="right">
                        Super Dry
                    </Typography>
                    <Rating name="rating" value={data.rating} size="small" readOnly />
                </Box>
            </CardActions>
        </MuiCard>
    );
}
