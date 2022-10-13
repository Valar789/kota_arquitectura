import ArrowUp from "components/WhatsApp";
import About from "components/Landing/AboutSeccion";
import Servicios from "components/Landing/ServiciosSeccion";
import Contacto from "components/Landing/ContactoSeccion";
import Header from "components/Landing/HeaderSeccion";
import Proyectos from "components/Landing/ProyectosSeccion";
import Ubicacion from "components/Landing/UbicacionSeccion";

import Footer from "components/Footer";
import NavBar from "components/Navbar";
import Testimonios from "components/Landing/testimonios.";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Proyectos />
      <Servicios />
      <Testimonios />
      <Ubicacion />
      <Contacto />
      <About />
      <Footer />
      <ArrowUp />
    </>
  );
}
