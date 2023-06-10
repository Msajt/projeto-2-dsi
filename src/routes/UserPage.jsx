import { Stack } from "@mui/material";
import UserDashboard from "../components/UserDashboard";
import PasswordForm from "../components/Forms/PasswordForm";
import MyFooter from "../components/MyFooter";

export default function UserPage() {
    return (
        <>
            <Stack direction="column" spacing={3}>
                <UserDashboard />
                <PasswordForm />
            </Stack>
            <MyFooter />
        </>
    );
}
