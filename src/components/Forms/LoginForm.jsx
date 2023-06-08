/* eslint-disable react/prop-types */
import {
    Box,
    Stack,
    Typography,
    Paper,
    TextField,
    Button,
    Container,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

const styles = {
    paperStyle: {
        padding: "1.5rem",
        maxWidth: "30rem",
        background: "#9A67CD",
    },
    backgroundBoxStyle: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 25,
        zIndex: -1,
        margin: "0 auto",
        width: "100%",
        height: 350,
        backgroundColor: "#58179A",
    },
    titleStyle: {
        fontFamily: "Poppins",
        fontSize: 64,
        fontWeight: "800",
        letterSpacing: "0.5rem",
        textTransform: "uppercase",
        color: "#58179A",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    textFieldStyle: {
        input: {
            fontFamily: "Poppins",
            color: "#58179A",
            fontWeight: 500,
        },
        label: {
            fontFamily: "Poppins",
            color: "#58179A",
            fontWeight: 500,
        },
        background: "#F5F5F5",
        borderRadius: "5px",
    },
    buttonStyle: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: "800",
        textTransform: "none",
    },
    linkTextStyle: {
        fontFamily: "Poppins",
        color: "#58179A",
        fontWeight: 500,
        fontSize: 25,
        textDecoration: "underline",
    },
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#58179A",
            darker: "#58179A",
        },
    },
});

function CustomTextField({
    customId,
    customLabel,
    customPlaceholder,
    customType,
}) {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                id={customId}
                size="small"
                variant="filled"
                color="primary"
                sx={styles.textFieldStyle}
                fullWidth
                label={customLabel}
                type={customType}
                placeholder={customPlaceholder}
                required
            ></TextField>
        </ThemeProvider>
    );
}

export default function LoginForm() {
    return (
        <div style={{ position: "relative" }}>
            <Box sx={styles.backgroundBoxStyle} />
            <Container align="center">
                <Paper elevation={10} padding={10} sx={styles.paperStyle}>
                    {/* //? Título */}
                    <Typography sx={styles.titleStyle} variant="h2" pb="1rem">
                        Login
                    </Typography>
                    <Stack spacing={1} mb={2}>
                        {/* //? email */}
                        <CustomTextField
                            customId="login-email"
                            customLabel="email"
                            customPlaceholder="Insira seu email..."
                            customType="email"
                        />
                        {/* //? senha */}
                        <CustomTextField
                            customId="login-password"
                            customLabel="senha"
                            customPlaceholder="Insira sua senha..."
                            customType="password"
                        />
                        <ThemeProvider theme={theme}>
                            {/* //? Botão - Entrar */}
                            <Button variant="contained" color="primary">
                                <Typography sx={styles.buttonStyle}>
                                    Entrar
                                </Typography>
                            </Button>
                        </ThemeProvider>
                    </Stack>
                    {/* //! LINKS  */}
                    {/* //? Esqueci a senha  */}
                    <Link to="/">
                        <Typography sx={styles.linkTextStyle}>
                            Esqueci minha senha
                        </Typography>
                    </Link>
                    {/* //? Voltar ao /home  */}
                    <Link to="/">
                        <Typography sx={styles.linkTextStyle}>
                            Voltar à página inicial
                        </Typography>
                    </Link>
                </Paper>
            </Container>
        </div>
    );
}
