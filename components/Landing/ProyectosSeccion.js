import Image from "next/image";
import Link from "next/link";
import pro1 from "public/pro1.jpg"
import pro2 from "public/pro2.jpg"
import pro3 from "public/pro3.jpg"
import pro4 from "public/pro4.jpg"
import pro5 from "public/pro5.jpg"
import pro6 from "public/pro6.jpeg"
import pro7 from "public/pro7.jpg"
import pro8 from "public/pro8.jpg"


export default function Proyectos() {
  return (
    <div id="proyectos" className="bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Proyectos
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Conoce</span>
          </span>{" "}
          nuestros proyectos recientes
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Cada proyecto es unico.. resultado de una absoluta atencion al detalle.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro1}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Andrea Bustamante
              </p>
              <p className="mb-4 text-xs text-gray-100">Cali - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación  Sala.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro2}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Ronald bermudez
              </p>
              <p className="mb-4 text-xs text-gray-100">Popayan-Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación Cocina.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro3}
              
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Luis Vejarano
              </p>
              <p className="mb-4 text-xs text-gray-100">Cali - Valle del Cauca.</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación Cocina.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro4}
              
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Pablo rey
              </p>
              <p className="mb-4 text-xs text-gray-100">Cali - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Construccion Completa.
              </p>
 
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro5}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Martina Cordoba
              </p>
              <p className="mb-4 text-xs text-gray-100">Yumbo - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación Cocina.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro6}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Santiago Alvarez
              </p>
              <p className="mb-4 text-xs text-gray-100">Palmira - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación fachada.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro7}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Sophia ulcue
              </p>
              <p className="mb-4 text-xs text-gray-100">Cali - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación Cocina.
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pro8}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Carolina Viera
              </p>
              <p className="mb-4 text-xs text-gray-100">Palmira - Valle del Cauca</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
              Remodelación Sala.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
