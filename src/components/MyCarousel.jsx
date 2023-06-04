/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import { homeImages, homeTitles, homeSubtitles } from "/public/Images.jsx";

function Panel(props) {
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
                    backgroundColor: "rgba(132,61,203,.3)",
                    top: { sm: 0, md: 120 },
                }}
            >
                <Typography
                    position="relative"
                    //top={{ sm: 0, md: 130 }}
                    variant="h5"
                    align="right"
                    color="#F5F5F5"
                    fontWeight="bold"
                    fontFamily="Poppins"
                    backgroundColor="rgba(132,61,203,.3)"
                    pr={1}
                >
                    {props.title}
                </Typography>
                <Typography
                    position="relative"
                    //top={{ sm: 0, md: 130 }}
                    align="right"
                    color="#F5F5F5"
                    variant="subtitle1"
                    fontFamily="Poppins"
                    pr={1}
                >
                    {props.subtitle}
                </Typography>
            </Box>
        </Paper>
    );
}

export default function MyCarousel() {
    return (
        <>
            <Carousel
                navButtonsAlwaysInvisible={true}
                indicators={false}
                autoPlay={true}
                animation="fade"
                interval={3000}
            >
                {homeImages.map((images, i) => (
                    <Stack key={i} direction="row">
                        {images.map((image, j) => (
                            <Panel
                                key={uuidv4()}
                                img={image}
                                title={homeTitles[i][j]}
                                subtitle={homeSubtitles[i][j]}
                            />
                        ))}
                    </Stack>
                ))}
            </Carousel>
        </>
    );
}
