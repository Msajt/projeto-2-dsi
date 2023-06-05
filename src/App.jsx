// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { Container, Stack } from "@mui/material";
import HomeBanner from "./components/HomeBanner";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";
import Content from "./components/Content";

import "./App.css";

function App() {
    return (
        <>
            <Container>
                {/* <Stack spacing={5}> */}
                <HomeBanner />
                <MyCarousel />
                <Content></Content>
                <MyFooter />
                {/* </Stack> */}
            </Container>
        </>
    );
}

export default App;
