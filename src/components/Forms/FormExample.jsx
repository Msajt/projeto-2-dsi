import {
    Stack,
    Typography,
    Paper,
    TextField,
    Button,
    Container,
} from "@mui/material";

const paperStyle = {
    padding: "1.5rem",
    maxWidth: "30rem",
};

export default function FormExample() {
    return (
        <>
            <Container align="center">
                <Paper elevation={10} padding={10} sx={paperStyle}>
                    <Typography variant="h2" pb="1rem">
                        Login
                    </Typography>
                    <Stack spacing={1}>
                        <Stack
                            spacing={1}
                            direction={{ xs: "column", sm: "row" }}
                        >
                            <TextField
                                fullWidth
                                label="Nome: "
                                type="name"
                                placeholder="Insira seu nome"
                                required
                            ></TextField>
                            <TextField
                                fullWidth
                                label="Sobrenome: "
                                type="name"
                                placeholder="Insira seu sobrenome"
                                required
                            ></TextField>
                        </Stack>
                        <TextField
                            fullWidth
                            label="Email: "
                            type="email"
                            placeholder="Insira seu email"
                            required
                        ></TextField>
                        <TextField
                            fullWidth
                            label="Telefone: "
                            type="number"
                            placeholder="Insira seu telefone"
                            required
                        ></TextField>
                        <TextField
                            fullWidth
                            label="Mensagem: "
                            type="text"
                            multiline
                            rows={5}
                            placeholder="Escreva sua mensagem"
                            required
                        ></TextField>
                        <Button variant="contained">Enviar</Button>
                        <Typography variant="h8" color="grey">
                            Nossa equipe contatará em até 24 horas.
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
}
