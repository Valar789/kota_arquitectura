import Link from "next/link";
import { useEffect, useRef } from "react";


export default function NavBar() {
  const refnav = useRef()
 

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')

      const { y } = header.getBoundingClientRect();

      y !== 0
        ? refnav.current.classList.add("setNavBar")
        : refnav.current.classList.remove("setNavBar");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
    ref={refnav}
      id="topNavBar"
      className="inDown navbar float text-white bg-slate-900 fixed top-0 z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900  rounded-box w-52"
          >
            
            <li tabIndex={0}>
              <Link href="#asesoria">
                <a className="justify-between">
                  Asesoria
                </a>
              </Link>
              <Link href="#servicios">
                <a className="justify-between">
                  Servicios
                </a>
              </Link>

            </li>
            <li>
              <Link href="#ubicacion">
                <a>Ubicacion</a>
              </Link>
            </li>
            <li>
              <Link href="#contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <li>
            <Link href="#contacto">
                <a>Agenda tu cita</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>Acerca de nosotros</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="#header">    
        <a className="flex mx-4 text-4xl font-semibold">Miranda <div className="text-blue-400 font-bold">PC</div></a>      
          {/* <a className="text-xl "><Image height={45} width={220} src={logo} alt='logo'/></a> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li>
            <Link href="#asesoria">
              <a>Asesoria</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link href="#servicios">
              <a>
                Servicios
                {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg> */}
              </a>
            </Link>
            {/* <ul className="p-2 bg-gray-800">
              <li>
                <a>Servicio 1</a>
              </li>
              <li>
                <a>Servicio 2</a>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href="#ubicacion">
              <a>Ubicacion</a>
            </Link>
          </li>
          <li>
            <Link href="#contacto">
              <a>Contacto</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>Acerca de nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
      <div id='asistencia' className="navbar-end mr-4">
        <Link href='#contacto'><a className="btn btn-sm border-none rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-900 text-white">Agenta tu Cita</a></Link>
      </div>
    </div>
  );
}
