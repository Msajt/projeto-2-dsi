import { Avatar, Stack, Typography, Link } from "@mui/material";
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

const styles = {
    title: {
        fontFamily: "Poppins",
        textTransform: "uppercase",
        fontWeight: "800",
        fontSize: "24px",
        pb: { sm: 2, md: 6 },
        color: "#58179A",
    },
    text: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "18px",
        color: "#843DCB",
    },
    icon: {
        width: "60px",
        height: "60px",
        color: "#9A67CD",
    },
    copyright: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        color: "#58179A",
    },
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
                    marginTop: "25px",
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
                        Foto
                    </Avatar>

                    <Stack align="left">
                        <Typography sx={styles.title}>contato</Typography>
                        <Typography sx={styles.text}>
                            55 (84) 9 9999-9999
                        </Typography>
                        <Typography sx={styles.text}>
                            paulocesarmedeiross@gmail.com
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Link href="https://github.com/msajt">
                                <GitHub sx={styles.icon} />
                            </Link>
                            <Link href="https://instagram.com/pc_pixelart">
                                <Instagram sx={styles.icon} />
                            </Link>
                        </Stack>
                    </Stack>

                    <Stack align="left">
                        <Typography sx={styles.title}>apoio</Typography>
                        <Typography sx={styles.text}>UFRN</Typography>
                        <Typography sx={styles.text}>Natalnet</Typography>
                        <Typography sx={styles.text}>TEAM</Typography>
                    </Stack>
                </Stack>
            </div>
            <div style={{ background: "#100E12", paddingBottom: 10 }}>
                <Typography align="right" sx={styles.copyright} pr={1}>
                    Desenvolvido por Paulo Cesar
                </Typography>
            </div>
        </>
    );
}
