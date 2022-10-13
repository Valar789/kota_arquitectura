import ArrowUp from "components/WhatsApp";
import About from "components/Landing/AboutSeccion";
import Asesoria from "components/Landing/Asesoria";
import Contacto from "components/Landing/ContactoSeccion";
import Header from "components/Landing/HeaderSeccion";
import Servicios from "components/Landing/ServiciosSeccion";
import Ubicacion from "components/Landing/UbicacionSeccion";
import NavBar from "components/Navbar";
import Footer from "components/Footer";


export default function Home() {
  return (
    <>
    <NavBar />

    <Header/>
    <Asesoria/>
    <Servicios/>
    <Ubicacion/>
    <Contacto/>
    <About/>
    <Footer/>
    <ArrowUp/>
    </>

  )
}
