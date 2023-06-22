/* eslint-disable react/prop-types */
import {
    Paper,
    Stack,
    Avatar,
    Typography,
    Container,
    Grid,
    Box,
} from "@mui/material";
import GamesPlayedIcon from "@mui/icons-material/PlayArrow";
import TimePlayedIcon from "@mui/icons-material/AccessTime";
import CoinIcon from "@mui/icons-material/Toll";
import EnergyIcon from "@mui/icons-material/FlashOn";
import CollisionIcon from "@mui/icons-material/CompareArrows";
import PrecisionIcon from "@mui/icons-material/CrisisAlert";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = {
    paperStyle: {
        padding: "25px",
        borderRadius: "5px 5px 0px 0px",
        background: "#B8A0D0",
        maxWidth: "800px",
    },
    avatarStyle: {
        width: "150px",
        height: "150px",
        background: "#F5F5F5",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    typographyStyle: {
        fontFamily: "Poppins",
        fontWeight: 500,
        lineHeight: "30px",
    },
    iconStyle: {
        fontSize: { xs: 50, md: 70 },
        color: "#58179A",
    },
};

const iconsArray = [
    {
        icon: <GamesPlayedIcon sx={styles.iconStyle} />,
        name: "Vezes jogadas",
    },
    {
        icon: <TimePlayedIcon sx={styles.iconStyle} />,
        name: "Tempo jogado",
    },
    {
        icon: <CoinIcon sx={styles.iconStyle} />,
        name: "Moedas totais",
    },
    {
        icon: <EnergyIcon sx={styles.iconStyle} />,
        name: "Energias totais",
    },
    {
        icon: <CollisionIcon sx={styles.iconStyle} />,
        name: "Colisões totais",
    },
    {
        icon: <PrecisionIcon sx={styles.iconStyle} />,
        name: "Precisão total",
    },
];

function UserData({ iconImage, iconName, dataValue }) {
    return (
        <Paper
            sx={{
                ...styles.paperStyle,
                padding: "5px",
                borderRadius: 0,
                maxWidth: 350,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                {iconImage}
                <Stack direction="column" spacing={1} justifyContent="flex-end">
                    <Typography
                        align="right"
                        sx={{
                            ...styles.typographyStyle,
                            fontSize: 20,
                            color: "#58179A",
                            fontWeight: 700,
                        }}
                    >
                        {iconName}
                    </Typography>
                    <Typography
                        align="right"
                        sx={{
                            ...styles.typographyStyle,
                            fontSize: 20,
                            color: "#843DCB",
                            fontWeight: 700,
                        }}
                    >
                        {dataValue}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default function UserDashboard() {
    const { state } = useLocation();
    const [user, setUser] = useState({});
    const [userStats, setUserStats] = useState([]);
    console.log(`Testando dados: ${state.id}`);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${state.id}`)
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData);
                const {
                    gamesPlayed,
                    timePlayed,
                    totalCoins,
                    totalEnergies,
                    totalCollisions,
                    totalPrecision,
                } = userData;

                setUserStats([
                    gamesPlayed,
                    timePlayed,
                    totalCoins,
                    totalEnergies,
                    totalCollisions,
                    totalPrecision,
                ]);
            });
    }, [state.id]);

    //console.log("Testando dados: ", email);

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
                {/* //? Usuário */}
                <Paper sx={styles.paperStyle} elevation={5}>
                    {/* //? User information */}
                    <Stack direction="row" justifyContent="space-between">
                        <Avatar
                            sx={styles.avatarStyle}
                            src={`https://robohash.org/${user.email}?size=200x200`}
                        />
                        <Stack
                            direction="column"
                            spacing={{ xs: 2, sm: 6 }}
                            justifyContent="flex-end"
                        >
                            <Stack direction="column" spacing={1}>
                                <Typography
                                    align="right"
                                    sx={{
                                        ...styles.typographyStyle,
                                        fontSize: { xs: 20, sm: 30 },
                                        color: "#58179A",
                                    }}
                                >
                                    {`${user.firstName} ${user.lastName}`}
                                </Typography>
                                <Typography
                                    align="right"
                                    sx={{
                                        ...styles.typographyStyle,
                                        fontSize: { xs: 15, sm: 20 },
                                        color: "#843DCB",
                                    }}
                                >
                                    {`${user.email}`}
                                </Typography>
                            </Stack>
                            <Typography
                                align="right"
                                sx={{
                                    ...styles.typographyStyle,
                                    fontSize: { xs: 20, md: 40 },
                                    color: "#9A67CD",
                                }}
                            >
                                {user.userType}
                            </Typography>
                        </Stack>
                    </Stack>
                </Paper>
                {/* //? Informações */}
                <Paper
                    sx={{
                        ...styles.paperStyle,
                        background: "#9A67CD",
                        maxWidth: "700px",
                        borderRadius: "0px 0px 0px 0px",
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 1 }}
                        columns={{ xs: 1, sm: 8 }}
                        justifyContent="center"
                        //alignItems="center"
                    >
                        {iconsArray.map((item, i) => (
                            <Grid item key={i} xs={1} sm={3}>
                                <UserData
                                    iconImage={item.icon}
                                    iconName={item.name}
                                    dataValue={userStats[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}
