import PacientCards from "../components/PacientsCard";
import MyFooter from "../components/MyFooter";
import { Typography } from "@mui/material";

export default function Pacients() {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "95px",
                    textTransform: "uppercase",
                    color: "#843DCB",
                }}
            >
                meus pacientes
            </Typography>
            <PacientCards />
            <MyFooter />
        </>
    );
}
