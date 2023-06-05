import { Avatar, Stack, Typography } from "@mui/material";
import { GitHub, Instagram } from "@mui/icons-material";

const titleStyle = {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: "24px",
    pb: { sm: 2, md: 6 },
    color: "#58179A",
};

const textStyle = {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "18px",
    color: "#843DCB",
};

const iconStyle = {
    width: "60px",
    height: "60px",
    color: "#9A67CD",
};

const copyrightStyle = {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "16px",
    color: "#58179A",
};

export default function MyFooter() {
    return (
        <>
            <div
                style={{
                    maxWidth: "100vw",
                    background: "#100E12",
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Stack
                    direction={{ sm: "column", md: "row" }}
                    spacing={{ sm: 5, md: 10 }}
                    align="center"
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

                    <Stack align="left">
                        <Typography sx={titleStyle}>contato</Typography>
                        <Typography sx={textStyle}>
                            55 (84) 9 9999-9999
                        </Typography>
                        <Typography sx={textStyle}>
                            paulocesarmedeiross@gmail.com
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <GitHub sx={iconStyle} />
                            <Instagram sx={iconStyle} />
                        </Stack>
                    </Stack>

                    <Stack align="left">
                        <Typography sx={titleStyle}>apoio</Typography>
                        <Typography sx={textStyle}>UFRN</Typography>
                        <Typography sx={textStyle}>Natalnet</Typography>
                        <Typography sx={textStyle}>TEAM</Typography>
                    </Stack>
                </Stack>
            </div>
            <div style={{ background: "#100E12", paddingBottom: 10 }}>
                <Typography align="right" sx={copyrightStyle} pr={1}>
                    Desenvolvido por Paulo Cesar
                </Typography>
            </div>
        </>
    );
}
