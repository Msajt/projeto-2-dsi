//! Importando componentes referentes ao MaterialUI
import { Box, Container } from "@mui/material";

//! Importando componentes referentes às partes do site
//? Banner principal
import HomeBanner from "../components/HomeBanner";
//? Carrossel de testemunhos
import MyCarousel from "../components/MyCarousel";
//? Conteúdo da página
import Content from "../components/Content";
//? Footer
import MyFooter from "../components/MyFooter";
//? Drawbar Menu
import MyDrawer from "../components/MyDrawer";

export default function HomePage() {
    return (
        <div>
            <Container>
                {/* <MyDrawer /> */}
                <HomeBanner />
                <MyCarousel />
                <Content />
                <MyFooter />
            </Container>
        </div>
    );
}
