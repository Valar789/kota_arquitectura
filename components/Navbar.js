import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "public/logo.png";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      ref={refnav}
      class="sticky top-0 z-50 bg-white/75 md:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-transparent"
    >
      <div class="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link href="#header">
            <a className="block text-black font-bold text-2xl pt-2">
              <span className="sr-only">Home</span>
              <Image height={50} width={50} src={logo} alt="" />
            </a>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
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
            <li>
              <Link href="#contacto">
                <a className="btn md:bg-gradient-to-r sm:from-pink-700 sm:to-pink-600 p-3 rounded-3xl text-white transition hover:text-pink-600 ">
                  Agendar cita
                </a>
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link href="#header">
                        <a className="block text-black font-bold text-2xl pt-2">
                          <span className="sr-only">Home</span>
                          <Image height={50} width={50} src={logo} alt="" />
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
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
                      <li>
                        <Link href="#contacto">
                          <a className="btn text-gray-800 transition hover:text-pink-600 ">
                            Agendar cita
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <header
  //     ref={refnav}
  //     className="sticky top-0 z-50 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-transparent"
  //   >
  //     <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  //       <div className="flex h-16 items-center justify-between">
  //         <div className="flex-1 md:flex md:items-center md:gap-12">
  //           <Link href="#header">
  //             <a className="block text-black font-bold text-2xl pt-2" >
  //               <span className="sr-only">Home</span>
  //               <Image height={50} width={50} src={logo} alt=''/>
  //             </a>
  //           </Link>
  //         </div>

  //         <div className="md:flex md:items-center md:gap-12">
  //           <nav
  //             className="hidden md:block"
  //             aria-labelledby="header-navigation"
  //           >
  //             <h2 className="sr-only" id="header-navigation">
  //               Header navigation
  //             </h2>

  //             <ul className="flex items-center gap-6 text-sm">
  //             <li>
  //                 <Link href="#proyectos">
  //                   <a className="text-gray-800 transition hover:text-pink-600 ">
  //                     Proyectos
  //                   </a>
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link href="#about">
  //                   <a className="text-gray-800 transition hover:text-pink-600 ">
  //                     Quienes somos
  //                   </a>
  //                 </Link>
  //               </li>

  //               <li>
  //                 <Link href="#servicios">
  //                   <a className="text-gray-800 transition hover:text-pink-600 ">
  //                     Servicios
  //                   </a>
  //                 </Link>
  //               </li>

  //               <li>
  //                 <Link href="#testimonios">
  //                   <a className="text-gray-800 transition hover:text-pink-600 ">
  //                     Testimonios
  //                   </a>
  //                 </Link>
  //               </li>

  //               <li>
  //                 <Link href="#contacto">
  //                   <a className="text-gray-800 transition hover:text-pink-600 ">
  //                     Contacto
  //                   </a>
  //                 </Link>
  //               </li>
  //             </ul>
  //           </nav>

  //           <div className="flex items-center gap-4">
  //             <div className="sm:flex sm:gap-4">
  //               <div className="hidden sm:flex">
  //               <Link href="#contacto">
  //                 <a
  //                   className="rounded-3xl bg-gradient-to-r sm:from-pink-700 sm:to-pink-600 px-5 py-2.5 text-sm font-medium text-white"

  //                 >
  //                   Agendar cita
  //                 </a>
  //                 </Link>
  //               </div>
  //             </div>

  //             <div className="block md:hidden">
  //               <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-5 w-5"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   strokeWidth="2"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M4 6h16M4 12h16M4 18h16"
  //                   />
  //                 </svg>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
}
