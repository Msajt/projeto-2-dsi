/* eslint-disable react/prop-types */
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    Box,
    Toolbar,
    List,
    Typography,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/PersonAdd";
import ProfileIcon from "@mui/icons-material/Person";
import PacientsIcon from "@mui/icons-material/Group";
import GameIcon from "@mui/icons-material/VideogameAsset";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/Reorder";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";
import LeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const drawerWidth = "170px";

const openedMixin = (theme) => ({
    borderRadius: "0px 5px 5px 0px",
    backgroundColor: "#843DCB",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    borderRadius: "0px 5px 5px 0px",
    backgroundColor: "#843DCB",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1.2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const listItemButtonStyle = {
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
};
const listItemIconStyle = {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
};
const listItemTextStyle = {
    style: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 16,
        color: "#B8A0D0",
    },
};

function IdleState() {
    return (
        <>
            {/* //? Home */}
            <MyListItem
                key={1}
                icon=<HomeIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Início"
                toLocation="/"
            />
            {/* //? Login */}
            <MyListItem
                key={2}
                icon=<LoginIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Login"
                toLocation="/login"
            />
            {/* //? Registrar */}
            <MyListItem
                key={3}
                icon=<RegisterIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Registrar"
                toLocation="/register"
            />
        </>
    );
}

function PacientState() {
    return (
        <>
            {/* //? Home */}
            <MyListItem
                key={1}
                icon=<HomeIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Início"
                toLocation="/"
            />
            {/* //? Usuário */}
            <MyListItem
                key={2}
                icon=<ProfileIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Meu perfil"
                toLocation="/user"
            />
            {/* //? Jogo */}
            <MyListItem
                key={3}
                icon=<GameIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Jogar"
                toLocation="/game"
            />
            {/* //? Logout */}
            <MyListItem
                key={4}
                icon=<LogoutIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Sair"
                toLocation="/"
                clicked={() => sessionStorage.clear()}
            />
        </>
    );
}

function TherapystState() {
    return (
        <>
            {/* //? Home */}
            <MyListItem
                key={1}
                icon=<HomeIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Início"
                toLocation="/"
            />
            {/* //? Usuário */}
            <MyListItem
                key={2}
                icon=<ProfileIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Meu perfil"
                toLocation="/user"
            />
            {/* //? Pacientes */}
            <MyListItem
                key={3}
                icon=<PacientsIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Pacientes"
                toLocation="/pacients"
            />
            {/* //? Jogo */}
            <MyListItem
                key={4}
                icon=<GameIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Jogar"
                toLocation="/game"
            />
            {/* //? Logout */}
            <MyListItem
                key={5}
                icon=<LogoutIcon
                    sx={{
                        fontSize: 30,
                        color: "#B8A0D0",
                    }}
                />
                iconName="Sair"
                toLocation="/"
                clicked={() => sessionStorage.clear()}
            />
        </>
    );
}

function MyListItem({ toLocation, icon, iconName, clicked }) {
    return (
        <>
            <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                    to={toLocation}
                    style={{ textDecoration: "none" }}
                    onClick={clicked}
                >
                    <ListItemButton sx={listItemButtonStyle}>
                        <ListItemIcon sx={listItemIconStyle}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={listItemTextStyle}
                            primary={iconName}
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </Link>
            </ListItem>
        </>
    );
}

export default function MyDrawer() {
    const { state } = useLocation();
    const [open, setOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [userType, setUserType] = useState("");

    //console.log(`Testando location no Drawer: ${state}`);
    //setIsLoggqed(sessionStorage.getItem("isLogged"));

    useEffect(() => {
        setIsLogged(sessionStorage.getItem("isLogged"));
        setUserType(sessionStorage.getItem("sessionUserType"));
    }, [userType]);

    console.log("Testando Drawer: ", userType);

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader onClick={() => setOpen(!open)}>
                    <IconButton>
                        {!open ? (
                            <RightIcon
                                sx={{ fontSize: 30, color: "#B8A0D0" }}
                            />
                        ) : (
                            <LeftIcon sx={{ fontSize: 30, color: "#B8A0D0" }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {!isLogged ? (
                        <IdleState />
                    ) : userType === "paciente" ? (
                        <PacientState />
                    ) : (
                        <TherapystState />
                    )}
                </List>
            </Drawer>
            {/* <Box component="main" sx={{ flexGrow: 1 }}> */}
            <Outlet />
            {/* </Box> */}
        </>
    );
}
