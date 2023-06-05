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
                maxWidth: "100vw",
                height: "100%",
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
