import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Avatar,
    Stack,
} from "@mui/material";

import GamesPlayedIcon from "@mui/icons-material/PlayArrow";
import TimePlayedIcon from "@mui/icons-material/AccessTime";
import CoinIcon from "@mui/icons-material/Toll";
import EnergyIcon from "@mui/icons-material/FlashOn";
import CollisionIcon from "@mui/icons-material/CompareArrows";
import PrecisionIcon from "@mui/icons-material/CrisisAlert";

export default function Pacients() {
    return (
        <>
            <h1>Hello World</h1>
            <Paper
                sx={{
                    background: "#9A67CD",
                    padding: "25px",
                    maxWidth: "300px",
                }}
            >
                <Accordion>
                    <AccordionSummary sx={{ background: "#843DCB" }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            align="center"
                        >
                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                }}
                            >
                                T
                            </Avatar>
                            <Stack direction="column">
                                <Typography align="right">
                                    Nome Sobrenome
                                </Typography>
                                <Typography align="right">
                                    email@email.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#843DCB" }}>
                        <Paper sx={{ padding: "5px", background: "#B8A0D0" }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Stack direction="row" alignItems="center">
                                    <GamesPlayedIcon
                                        sx={{ fontSize: 30, color: "#58179A" }}
                                    />
                                    <Typography
                                        align="left"
                                        sx={{
                                            fontFamily: "Poppins",
                                            fontWeight: 700,
                                            fontSize: 20,
                                            color: "#58179A",
                                        }}
                                    >
                                        Vezes jogadas
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{
                                        fontFamily: "Poppins",
                                        fontWeight: 700,
                                        fontSize: 20,
                                        color: "#843DCB",
                                    }}
                                >
                                    00000
                                </Typography>
                            </Stack>
                        </Paper>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </>
    );
}
