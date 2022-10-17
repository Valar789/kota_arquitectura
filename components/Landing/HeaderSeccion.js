import Link from "next/link";

export default function Header() {
  return (
    <section
      id="header"
      className="relative bgHeader bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 md:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-6xl">
            KOTA
            <strong className="block font-bold text-zinc-800">
              Arquitectura
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Somos una empresa multidisciplinar, con sede en Colombia. Utilizamos
            la arquitectura y el diseño para crear espacios dinámicos,
            relevantes e innovadores.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href="#about">
              <a className="w-full rounded bg-pink-600 bg-gradient-to-r sm:from-pink-700 sm:to-pink-600 px-12 py-3 text-sm font-medium text-white shadow  focus:ring  sm:w-auto">
                Quienes Somos
              </a>
            </Link>
            <Link href="#proyectos">
              <a className="w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-rose-700   focus:ring active:text-rose-500 sm:w-auto">
                Proyectos
              </a>
            </Link>
            <Link href="https://www.instagram.com/kota.arq/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#bb034c">
                      <path d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
