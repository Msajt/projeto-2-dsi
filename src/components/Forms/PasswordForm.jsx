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
        height: 400,
        backgroundColor: "#58179A",
    },
    titleStyle: {
        fontFamily: "Poppins",
        fontSize: 48,
        fontWeight: "800",
        textTransform: "lowercase",
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

export default function PasswordForm() {
    return (
        <div style={{ position: "relative" }}>
            <Container align="center">
                <Paper elevation={10} padding={10} sx={styles.paperStyle}>
                    {/* //? Título */}
                    <Typography sx={styles.titleStyle} variant="h2" pb="2rem">
                        alterar senha
                    </Typography>
                    <Stack spacing={1} mb={2}>
                        {/* //? email */}
                        <CustomTextField
                            customId="userPage-oldPassword"
                            customLabel="senha atual"
                            customPlaceholder="Insira sua senha atual..."
                            customType="password"
                        />
                        {/* //? senha */}
                        <CustomTextField
                            customId="userPage-newPassword"
                            customLabel="nova senha"
                            customPlaceholder="Insira sua nova senha..."
                            customType="password"
                        />
                        <ThemeProvider theme={theme}>
                            {/* //? Botão - Entrar */}
                            <Button variant="contained" color="primary">
                                <Typography sx={styles.buttonStyle}>
                                    Alterar
                                </Typography>
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
}
