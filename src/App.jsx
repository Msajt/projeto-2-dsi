import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Container } from "@mui/material";
import HomeBanner from "./components/HomeBanner";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";

import "./App.css";

function App() {
    return (
        <>
            <Container>
                <HomeBanner />
                <MyCarousel />
                <MyFooter />
            </Container>
        </>
    );
}

export default App;
