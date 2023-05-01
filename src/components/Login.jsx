//TODO Explicar no comentário os componentes
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    Link,
} from "@mui/material";

//? Avatar icon
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "0 auto",
    };
    const avatarStyle = {
        backgroundColor: "orange",
    };
    const buttonStyle = {
        margin: "8px 0",
    };
    const fieldStyle = {
        margin: ".2rem 0",
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h3>Sign In</h3>
                </Grid>
                <TextField
                    style={fieldStyle}
                    variant="standard"
                    label="Username"
                    placeholder="Enter username"
                    fullWidth
                    required
                />
                <TextField
                    style={fieldStyle}
                    variant="standard"
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    required
                />

                <FormControlLabel control={<Checkbox />} label="Remember me" />

                <Button
                    style={buttonStyle}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Sign In
                </Button>

                <Typography>
                    <Link href="#">Forgot password</Link>
                </Typography>
                <Typography>
                    Do you have an account?
                    <Link href="#">Link</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}
