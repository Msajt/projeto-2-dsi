import { Paper, Box, Stack, Button, Typography } from "@mui/material";
import FullIcon from "@mui/icons-material/OpenInFull";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#843DCB",
            darker: "#843DCB",
        },
    },
});

export default function GameBox() {
    function MyBox() {
        return (
            <Box
                sx={{
                    width: 562,
                    height: 442,
                    background: "#100E12",
                }}
            />
        );
    }

    return (
        <>
            <Stack spacing={1} alignItems="flex-end" justifyContent="center">
                <Paper
                    sx={{
                        background: "#843DCB",
                        padding: "25px",
                    }}
                    elevation={10}
                >
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <MyBox />
                        <MyBox />
                    </Stack>
                </Paper>
                <ThemeProvider theme={theme}>
                    <Button
                        sx={{
                            width: "280px",
                            height: "50px",
                        }}
                        color="primary"
                        variant="contained"
                    >
                        <Stack direction="row" spacing={5}>
                            <FullIcon sx={{ color: "#B8A0D0" }} />
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    color: "#B8A0D0",
                                }}
                            >
                                tela cheia
                            </Typography>
                        </Stack>
                    </Button>
                </ThemeProvider>
            </Stack>
        </>
    );
}
