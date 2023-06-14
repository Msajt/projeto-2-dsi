import { Paper, Stack, Typography, Box } from "@mui/material";

import { homeImages } from "../../public/Images";

const paperStyle = {
    backgroundColor: "#9A67CD",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${homeImages[0][0]})`,
    borderRadius: 0,
    height: { xs: "auto", sm: "338px" },
    width: { xs: "100%", sm: "600px" },
};

const titleStyle = {
    color: "#100E12",
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "40px",
    lineHeight: "60px",
    letterSpacing: "0.25rem",
};

const textStyle = {
    color: "#100E12",
    paddingLeft: 4,
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: { sm: "1.5rem" },
    lineHeight: { sm: "1.5rem", md: "1.9rem", lg: "2.5rem" },
    paddingRight: 1,
};

export default function Content() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#D9D9D9",
                    position: "relative",
                }}
            >
                <Stack direction="row">
                    <Paper sx={paperStyle}>
                        <img
                            src={homeImages[0][1]}
                            style={{ display: "none" }}
                        />
                    </Paper>
                    <Stack direction="column">
                        <div style={{ maxWidth: "575px" }}>
                            <Typography align="right" sx={titleStyle}>
                                teste
                            </Typography>
                            <Typography align="justify" sx={textStyle}>
                                the quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog,
                            </Typography>
                        </div>
                    </Stack>
                </Stack>
            </div>
            <div
                style={{
                    backgroundColor: "#D9D9D9",
                    marginTop: 25,
                    marginBottom: 25,
                }}
            >
                <Stack direction="row">
                    <Stack direction="column">
                        <div style={{ maxWidth: "575px" }}>
                            <Typography align="right" sx={titleStyle}>
                                teste
                            </Typography>
                            <Typography align="justify" sx={textStyle}>
                                the quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog, the
                                quick brown fox jumps over the lazy dog,
                            </Typography>
                        </div>
                    </Stack>
                    <Paper sx={paperStyle}>
                        <img
                            src={homeImages[0][1]}
                            style={{ display: "none" }}
                        />
                    </Paper>
                </Stack>
            </div>
        </>
    );
}
