import Hero from "../Components/Hero.jsx";
import Cards from "../Components/Cards.jsx";
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import NavbarComponent from "../Components/Navbar.jsx";


export default function Home() {

    return (
        <>
            <NavbarComponent />
            <Hero />
            <Cards />
            <Newsletter />
            <Footer />
        </>

    )
};