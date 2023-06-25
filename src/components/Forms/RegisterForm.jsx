/* eslint-disable react/prop-types */
import {
    Box,
    Stack,
    Typography,
    Paper,
    TextField,
    Button,
    Container,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link, useNavigate } from "react-router-dom";

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

export default function RegisterForm() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("paciente");
    const [errorMessage, setErrorMessage] = useState(false);
    const userData = {
        firstName,
        lastName,
        email,
        password,
        userType,
        gamesPlayed: 0,
        timePlayed: 0,
        totalCoins: 0,
        totalEnergies: 0,
        totalCollisions: 0,
        totalPrecision: 0,
    };

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
                    //required
                />
            </ThemeProvider>
        );
    }

    function UserTypeSelection() {
        return (
            <FormControl>
                <Typography
                    align="left"
                    sx={{
                        fontFamily: "Poppins",
                        color: "#58179A",
                        fontWeight: 500,
                    }}
                >
                    tipo de usuário
                </Typography>
                <RadioGroup
                    row
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <Container>
                        <FormControlLabel
                            value="paciente"
                            control={
                                <Radio
                                    sx={{
                                        color: "#58179A",
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    sx={{
                                        fontFamily: "Poppins",
                                        color: "#58179A",
                                    }}
                                >
                                    Paciente
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="terapeuta"
                            control={
                                <Radio
                                    sx={{
                                        color: "#58179A",
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    sx={{
                                        fontFamily: "Poppins",
                                        color: "#58179A",
                                    }}
                                >
                                    Terapeuta
                                </Typography>
                            }
                        />
                    </Container>
                </RadioGroup>
            </FormControl>
        );
    }

    function handleRegister(e) {
        e.preventDefault();

        fetch("http://localhost:3000/users", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((users) => {
                const existentUser = users.find(
                    (user) => user.email === userData.email
                );

                if (!existentUser) {
                    fetch("http://localhost:3000/users", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            email: userData.email,
                            userType: userData.userType,
                            gamesPlayed: 0,
                            timePlayed: 0,
                            totalCoins: 0,
                            totalEnergies: 0,
                            totalCollisions: 0,
                            totalPrecision: 0,
                        }),
                    });

                    fetch("http://localhost:3000/authentication", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: userData.email,
                            password: userData.password,
                        }),
                    });
                    setErrorMessage(false);
                } else setErrorMessage(true);
            })
            .catch((err) =>
                console.log("Houve um erro em RegisterForm: ", err.message)
            );

        clearField();
        //console.log(userData);
    }

    function clearField() {
        document.getElementById("register-firstname").value = "";
        document.getElementById("register-lastname").value = "";
        document.getElementById("register-email").value = "";
        document.getElementById("register-password").value = "";
    }

    return (
        <div style={{ position: "relative" }}>
            <form onSubmit={handleRegister}>
                <Box sx={styles.backgroundBoxStyle} />
                <Container align="center">
                    <Paper elevation={10} padding={10} sx={styles.paperStyle}>
                        {/* //? Título */}
                        <Typography
                            sx={styles.titleStyle}
                            variant="h2"
                            pb="1rem"
                        >
                            Registro
                        </Typography>
                        <ThemeProvider theme={theme}>
                            <Stack spacing={1} mb={2}>
                                <Stack
                                    spacing={1}
                                    direction={{ xs: "column", sm: "row" }}
                                >
                                    {/* //? Nome */}
                                    <TextField
                                        id="register-firstname"
                                        size="small"
                                        variant="filled"
                                        color="primary"
                                        sx={styles.textFieldStyle}
                                        fullWidth
                                        label="nome"
                                        type="name"
                                        placeholder="Insira o seu nome..."
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                    />
                                    {/* //? Sobrenome */}
                                    <TextField
                                        id="register-lastname"
                                        label="sobrenome"
                                        placeholder="Insira o seu sobrenome..."
                                        type="name"
                                        size="small"
                                        variant="filled"
                                        color="primary"
                                        sx={styles.textFieldStyle}
                                        fullWidth
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        required
                                    />
                                </Stack>

                                {/* //? Email */}
                                <TextField
                                    id="register-email"
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
                                    id="register-password"
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
                                <UserTypeSelection />
                                {/* //? Botão - Entrar */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    //onClick={clearField}
                                >
                                    <Typography sx={styles.buttonStyle}>
                                        Registre-se
                                    </Typography>
                                </Button>
                                {errorMessage ? (
                                    <Typography
                                        sx={{
                                            ...styles.linkTextStyle,
                                            color: "#F5F5F5",
                                            textDecoration: "none",
                                            //fontWeight: "bold",
                                            //WebkitTextStroke: "1px black",
                                        }}
                                    >
                                        Email existente, tente novamente
                                    </Typography>
                                ) : (
                                    ""
                                )}
                            </Stack>
                        </ThemeProvider>
                    </Paper>
                </Container>
            </form>
        </div>
    );
}
