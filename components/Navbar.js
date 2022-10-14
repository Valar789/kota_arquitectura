import Link from "next/link";
import { useEffect, useRef } from "react";
import logo from "public/logo.png"
import Image from "next/image";

export default function NavBar() {
  const refnav = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { y } = header.getBoundingClientRect();

      y <= 10
        ? refnav.current.classList.add("setNavBar")
        : refnav.current.classList.remove("setNavBar");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={refnav}
      className="sticky top-0 z-50 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-transparent"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="#header">
              <a className="block text-black font-bold text-2xl pt-2" >
                <span className="sr-only">Home</span>
                <Image height={50} width={50} src={logo} alt=''/>
              </a>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul className="flex items-center gap-6 text-sm">
              <li>
                  <Link href="#proyectos">
                    <a className="text-gray-800 transition hover:text-pink-600 ">
                      Proyectos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <a className="text-gray-800 transition hover:text-pink-600 ">
                      Quienes somos
                    </a>
                  </Link>
                </li>

            

                <li>
                  <Link href="#servicios">
                    <a className="text-gray-800 transition hover:text-pink-600 ">
                      Servicios
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#testimonios">
                    <a className="text-gray-800 transition hover:text-pink-600 ">
                      Testimonios
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#contacto">
                    <a className="text-gray-800 transition hover:text-pink-600 ">
                      Contacto
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                <Link href="#contacto">
                  <a
                    className="rounded-3xl bg-gradient-to-r sm:from-pink-700 sm:to-pink-600 px-5 py-2.5 text-sm font-medium text-white"
                    href="/"
                  >
                    Agendar cita
                  </a>
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
