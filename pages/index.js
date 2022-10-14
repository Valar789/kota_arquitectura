import ArrowUp from "components/ToUp";
import About from "components/Landing/AboutSeccion";
import Servicios from "components/Landing/ServiciosSeccion";
import Contacto from "components/Landing/ContactoSeccion";
import Header from "components/Landing/HeaderSeccion";
import Proyectos from "components/Landing/ProyectosSeccion";


import Footer from "components/Footer";
import NavBar from "components/Navbar";
import Testimonios from "components/Landing/Testimonios";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Proyectos />
      <Servicios />
      <Testimonios />

      <Contacto />
      <About />
      <Footer />
      <ArrowUp />
    </>
  );
}
