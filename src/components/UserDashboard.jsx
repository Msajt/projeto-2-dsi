import {
    Paper,
    Stack,
    Avatar,
    Typography,
    Container,
    Grid,
} from "@mui/material";
import GamesPlayedIcon from "@mui/icons-material/PlayArrow";
import TimePlayedIcon from "@mui/icons-material/AccessTime";
import CoinIcon from "@mui/icons-material/Toll";
import EnergyIcon from "@mui/icons-material/FlashOn";
import CollisionIcon from "@mui/icons-material/CompareArrows";
import PrecisionIcon from "@mui/icons-material/CrisisAlert";

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
    <GamesPlayedIcon sx={styles.iconStyle} />,
    <TimePlayedIcon sx={styles.iconStyle} />,
    <CoinIcon sx={styles.iconStyle} />,
    <EnergyIcon sx={styles.iconStyle} />,
    <CollisionIcon sx={styles.iconStyle} />,
    <PrecisionIcon sx={styles.iconStyle} />,
];

function UserData({ icon }) {
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
                {icon}
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
                        Vezes jogadas
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
                        00000
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default function UserDashboard() {
    return (
        <>
            <Container align="center">
                {/* //? Usuário */}
                <Paper sx={styles.paperStyle} elevation={5}>
                    {/* //? User information */}
                    <Stack direction="row" justifyContent="space-between">
                        <Avatar
                            sx={styles.avatarStyle}
                            src="https://robohash.org/link.png?size=200x200"
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
                                    Nome Sobrenome
                                </Typography>
                                <Typography
                                    align="right"
                                    sx={{
                                        ...styles.typographyStyle,
                                        fontSize: { xs: 15, sm: 20 },
                                        color: "#843DCB",
                                    }}
                                >
                                    email@email.com
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
                                tipo de usuário
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
                                <UserData icon={iconsArray[i]} />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
