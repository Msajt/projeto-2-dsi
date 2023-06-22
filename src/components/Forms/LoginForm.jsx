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

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const styles = {
    paperStyle: {
        padding: "1.5rem",
        maxWidth: "30rem",
        background: "#9A67CD",
    },
    backgroundBoxStyle: {
        position: "absolute",
        width: "100%",
        background: "#58179A",
        height: "calc(100% - 50px)",
        top: "25px",
        zIndex: -1,
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        fetch("http://localhost:3000/authentication", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((users) => {
                const isPlayer = users.findIndex(
                    (user) => user.email === email && user.password === password
                );
                if (isPlayer !== -1)
                    navigate("/user", { state: { id: users[isPlayer].id } });
                console.log(`Login: ${isPlayer}`);
            });
        //console.log(email, password);
    }

    return (
        <div style={{ position: "relative" }}>
            <form onSubmit={handleLogin}>
                <Box sx={styles.backgroundBoxStyle} />
                <Container align="center">
                    <Paper elevation={10} padding={10} sx={styles.paperStyle}>
                        {/* //? Título */}
                        <Typography
                            sx={styles.titleStyle}
                            variant="h2"
                            pb="1rem"
                        >
                            Login
                        </Typography>
                        <Stack spacing={1} mb={2}>
                            <ThemeProvider theme={theme}>
                                {/* //? email */}
                                <TextField
                                    id="login-email"
                                    size="small"
                                    variant="filled"
                                    color="primary"
                                    sx={styles.textFieldStyle}
                                    fullWidth
                                    label="email"
                                    type="email"
                                    placeholder="Insira seu email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {/* //? senha */}
                                <TextField
                                    id="login-password"
                                    size="small"
                                    variant="filled"
                                    color="primary"
                                    sx={styles.textFieldStyle}
                                    fullWidth
                                    label="senha"
                                    type="password"
                                    placeholder="Insira sua senha..."
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />

                                {/* //? Botão - Entrar */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
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
                        <Link to="/home">
                            <Typography sx={styles.linkTextStyle}>
                                Voltar à página inicial
                            </Typography>
                        </Link>
                    </Paper>
                </Container>
            </form>
        </div>
    );
}
