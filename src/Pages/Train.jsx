import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import TrainRoute from "../Components/TrainRoute.jsx";
import NavbarComponent from "../Components/Navbar.jsx";


export default function Train() {


    return (
      <>
          <NavbarComponent />
          <TrainRoute />
          <Newsletter />
          <Footer />
      </>
    )
}