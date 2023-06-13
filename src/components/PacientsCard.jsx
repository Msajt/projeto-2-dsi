import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Avatar,
    Stack,
    Grid,
    Container,
    Box,
} from "@mui/material";

import GamesPlayedIcon from "@mui/icons-material/PlayArrow";
import TimePlayedIcon from "@mui/icons-material/AccessTime";
import CoinIcon from "@mui/icons-material/Toll";
import EnergyIcon from "@mui/icons-material/FlashOn";
import CollisionIcon from "@mui/icons-material/CompareArrows";
import PrecisionIcon from "@mui/icons-material/CrisisAlert";

const iconsArray = [
    {
        icon: <GamesPlayedIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Vezes jogadas",
    },
    {
        icon: <TimePlayedIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Tempo jogado",
    },
    {
        icon: <CoinIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Moedas totais",
    },
    {
        icon: <EnergyIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Energias totais",
    },
    {
        icon: <CollisionIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Colisões totais",
    },
    {
        icon: <PrecisionIcon sx={{ fontSize: 30, color: "#58179A" }} />,
        name: "Precisão total",
    },
];

function CardData({ iconComponent, dataType }) {
    return (
        <>
            <Grid item xs={12}>
                <Paper sx={{ padding: "5px", background: "#B8A0D0" }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack direction="row" alignItems="center">
                            {iconComponent}
                            <Typography
                                align="left"
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    fontSize: 20,
                                    color: "#58179A",
                                }}
                            >
                                {dataType}
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
            </Grid>
        </>
    );
}

function Card() {
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Accordion sx={{ maxWidth: "330px" }}>
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
                            <Stack
                                direction="column"
                                ml={2}
                                useFlexGap
                                flexWrap="wrap"
                            >
                                <Typography
                                    align="right"
                                    sx={{
                                        fontFamily: "Poppins",
                                        fontWeight: 700,
                                        fontSize: 20,
                                        color: "#39056D",
                                    }}
                                    flexWrap="wrap"
                                >
                                    Nome Sobrenome
                                </Typography>
                                <Typography
                                    align="right"
                                    sx={{
                                        fontFamily: "Poppins",
                                        fontWeight: 700,
                                        fontSize: 15,
                                        color: "#B8A0D0",
                                    }}
                                >
                                    email@email.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#843DCB" }}>
                        <Grid container rowSpacing={1}>
                            {/* //TODO Trocar por um array com os dados da pessoa */}
                            {iconsArray.map((item, i) => (
                                <CardData
                                    key={i}
                                    iconComponent={item.icon}
                                    dataType={item.name}
                                />
                            ))}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </>
    );
}

export default function PacientCards() {
    return (
        <div style={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    background: "#58179A",
                    height: "calc(100% - 50px)",
                    top: "25px",
                    zIndex: -1,
                }}
            />
            <Container align="center">
                <Paper
                    sx={{
                        background: "#9A67CD",
                        padding: "25px",
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        {/* //TODO Trocar para o JSON dos usuários depois */}
                        {iconsArray.map((item, i) => (
                            <Card key={i} />
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}
