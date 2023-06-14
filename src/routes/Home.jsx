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

export default function HomePage() {
    return (
        <>
            <Container>
                <HomeBanner />
                <MyCarousel />
                <Content />
                <MyFooter />
            </Container>
        </>
    );
}
