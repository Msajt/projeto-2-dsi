import LoginForm from "../components/Forms/LoginForm";
import MyCarousel from "../components/MyCarousel";
import MyFooter from "../components/MyFooter";
import { Stack } from "@mui/material";

export default function Login() {
    return (
        <>
            <Stack spacing={5}>
                <LoginForm />
                <MyCarousel />
            </Stack>
            <MyFooter />
        </>
    );
}
