import { Box, Container, Paper, Typography } from "@mui/material";
import { homeImages } from "../../public/Images";

export default function HomeBanner() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // Change the size to fit the parent element of this div
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        >
            <Box
                width={{ sm: 800, md: 900, lg: 1600 }}
                height={300}
                backgroundColor="#58179A"
                pr={15}
            >
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
            </Box>
        </div>
    );
}
