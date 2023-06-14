import { Box, Container, Paper, Typography } from "@mui/material";
import { homeImages } from "../../public/Images";

export default function HomeBanner() {
    return (
        <div
            style={{
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "calc(100% + 100px)",
                    background: "#58179A",
                    height: "300px",
                }}
                justifyContent="flex-end"
                alignItems="center"
            >
                <Typography
                    fontSize={{ xs: 80, sm: 110 }}
                    fontFamily="Poppins"
                    fontWeight="bold"
                    align="right"
                >
                    Virtualter
                </Typography>
                <Typography
                    fontSize={{ xs: 80, sm: 110 }}
                    fontFamily="Poppins"
                    fontWeight="bold"
                    align="right"
                >
                    Web
                </Typography>
            </Box>
            {/* <Box height={300} backgroundColor="#58179A" pr={15}>
                <Typography
                    variant="h1"
                    fontFamily="Poppins"
                    fontWeight="bold"
                    align="right"
                >
                    Virtualter
                </Typography>
                <Typography
                    variant="h1"
                    fontFamily="Poppins"
                    fontWeight="bold"
                    align="right"
                >
                    Web
                </Typography>
            </Box> */}
        </div>
    );
}
