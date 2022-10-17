export default function About() {
  return (
    <section
      id="about"
      className="pt-10 bg-stone-700/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-stone-800/75 sm:to-stone-700/50 text-white"
    >
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Quienes Somos</h2>

          <p className="mt-4 text-gray-300">
            Ofrecemos servicios de Gerenciamiento de Proyectos, Ingeniería,
            Arquitectura, Gerenciamiento de Construcción, Obras y Consultoría,
            brindando soluciones innovadoras y de alta eficacia tanto en tanto
            en Departamento del Valle del Cauca, Colombia como en toda
            LatinoaméricaF.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Sobre nosotros.</h2>

              <p className="mt-1 text-sm text-gray-300">
                Kota Arquitectura es una empresa ampliamente reconocida en la
                costa pacifica como especialista en Diseño Interior y
                Arquitectura de proyectos corporativos, institucionales y
                comerciales.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Mision.</h2>

              <p className="mt-1 text-sm text-gray-300">
                En alianza con constructoras, realizamos el diseño
                arquitectónico de sus proyectos para agregar valor a través de
                la estética, el arte y la funcionalidad.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Vision.</h2>

              <p className="mt-1 text-sm text-gray-300">
                Esta firma se caracteriza por construir relaciones cercanas con
                cada uno de sus clientes. Es por eso que la alta calidad en el
                servicio, la apertura en el proceso para personalizar cada
                espacio y ser transparentes en lo que hacemos, hace de los
                proyectos una experiencia única y asi poder expandirnos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
