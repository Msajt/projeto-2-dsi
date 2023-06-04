import { Avatar, Stack, Typography } from "@mui/material";
import { GitHub, Instagram } from "@mui/icons-material";

export default function MyFooter() {
    return (
        <Stack
            direction="row"
            spacing={15}
            backgroundColor="#100E12"
            p={(1, 0, 0, 2)}
        >
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    bgcolor: "#58179A",
                }}
            >
                Foto do Paulo
            </Avatar>
            <Stack direction="column" align="left">
                <Typography
                    fontFamily="Poppins"
                    textTransform="uppercase"
                    fontWeight="800"
                    fontSize="24px"
                    pb={6}
                    color="#58179A"
                >
                    contato
                </Typography>
                <Typography
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="18px"
                    color="#843DCB"
                >
                    55 (84) 9 9999-9999
                </Typography>
                <Typography
                    fontFamily="Poppins"
                    textTransform="lowercase"
                    fontWeight="600"
                    fontSize="18px"
                    color="#843DCB"
                >
                    paulocesarmedeiross@gmail.com
                </Typography>
                <Stack direction="row" spacing={1}>
                    <GitHub
                        sx={{
                            width: "60px",
                            height: "60px",
                            color: "#9A67CD",
                        }}
                    />
                    <Instagram
                        sx={{
                            width: "60px",
                            height: "60px",
                            color: "#9A67CD",
                        }}
                    />
                </Stack>
            </Stack>
            <Stack align="left">
                <Typography
                    fontFamily="Poppins"
                    textTransform="uppercase"
                    fontWeight="800"
                    fontSize="24px"
                    pb={4}
                    color="#58179A"
                >
                    apoio
                </Typography>
                <Typography
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="18px"
                    color="#843DCB"
                >
                    UFRN
                </Typography>
                <Typography
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="18px"
                    color="#843DCB"
                >
                    Natalnet
                </Typography>
                <Typography
                    fontFamily="Poppins"
                    fontWeight="600"
                    fontSize="18px"
                    color="#843DCB"
                >
                    TEAM
                </Typography>
            </Stack>
        </Stack>
    );
}
