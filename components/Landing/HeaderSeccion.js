import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
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
              <a className="block w-full rounded bg-gradient-to-r sm:from-pink-700 sm:to-pink-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-900 focus:outline-none focus:ring active:bg-stone-500 sm:w-auto">
                Quienes Somos
              </a>
            </Link>
            <Link href="#proyectos">
            <a
 
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Proyectos
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
