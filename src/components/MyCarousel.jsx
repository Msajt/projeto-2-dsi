/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import homeImages from "/public/Images.jsx";
console.log(homeImages[0]);

function CarouselPanel(props) {
    const styles = {
        paperStyle: {
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${props.img})`,
            borderRadius: 0,
            height: { xs: "225px" },
            width: { xs: "400px" },
        },
        boxStyle: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
    };

    return (
        <Paper sx={styles.paperStyle} elevation={3}>
            <img alt="elder" src={props.img} style={{ display: "none" }}></img>
            <Box sx={styles.boxStyle} />
            <Box
                sx={{
                    position: "relative",
                    top: 150,
                    pr: 2,
                }}
            >
                <Typography align="right" color="white" variant="h4">
                    {props.title}
                </Typography>
                <Typography align="right" variant="subtitle1">
                    {props.subtitle}
                </Typography>
            </Box>
        </Paper>
    );
}

export default function MyCarousel() {
    return (
        <>
            <Carousel>
                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                >
                    {homeImages.map((item, i) => (
                        <CarouselPanel
                            key={i}
                            img={item}
                            title="Teste1"
                            subtitle="Teste2"
                        />
                    ))}
                </Stack>
            </Carousel>
        </>
    );
}
