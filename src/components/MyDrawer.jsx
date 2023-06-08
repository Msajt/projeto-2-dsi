import { Outlet } from "react-router-dom";
import { useState } from "react";
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

const drawerWidth = 170;

const openedMixin = (theme) => ({
    borderRadius: "0px 5px 0px 5px",
    backgroundColor: "#843DCB",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    borderRadius: "0px 5px 0px 5px",
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
    justifyContent: "flex-end",
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

export default function MyDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
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

    return (
        <>
            <Box sx={{ display: "flex" }}>
                {/* <CssBaseline /> */}
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={() => setOpen(!open)}>
                            <HomeIcon sx={{ fontSize: 30, color: "#B8A0D0" }} />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {/* //TODO Fazer as condições pra cada estado */}
                        {/* //? Login */}
                        <ListItem
                            key={1}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <LoginIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Login"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {/* //? Registrar */}
                        <ListItem
                            key={2}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <RegisterIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Register"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {/* //? Usuário */}
                        <ListItem
                            key={3}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <ProfileIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Profile"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {/* //? Pacients */}
                        <ListItem
                            key={4}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <PacientsIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Pacientes"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {/* //? Jogar */}
                        <ListItem
                            key={5}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <GameIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Jogar"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {/* //? Logout */}
                        <ListItem
                            key={6}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton sx={listItemButtonStyle}>
                                <ListItemIcon sx={listItemIconStyle}>
                                    <LogoutIcon
                                        sx={{ fontSize: 30, color: "#B8A0D0" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={listItemTextStyle}
                                    primary={"Logout"}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
