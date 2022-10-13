import Image from "next/image";




import Link from "next/link";

export default function Asesoria() {
  return (
    <section
      id="asesoria"
      className=" bg-white  px-7 py-32 text-white flex m-auto w-full h-full "
    >

      <div className="boxImagen gap-5 flex flex-wrap text-gray-700 m-auto">
        <div className="sm:w-12/12 md:w-10/12 lg:w-6/12 m-auto">

        </div>
        <div className="sm:w-12/12 md:w-10/12 lg:w-4/12 m-auto">
          <h1 className="text-4xl font-bold  text-blue-900">
            No pierdas tiempo y dinero
          </h1>
          <p className="my-5">
            ¡Tienes inconvenientes con tu computador, revísalo sin salir de
            casa! Nuestros expertos te asisten de manera remota y acompañan en
            el proceso de revisión de tu ordenador: Instalación de software
            (office, antivirus, lectores PDF, instalación de impresoras,
            configuración de dispositivos en red, etc.), a través de las
            diferentes herramientas de escritorio remoto que actualmente nos
            ofrece el internet y que son de fácil acceso y descarga.
          </p>
          <p className="my-5">
            Ten tus dispositivos funcionando al 100% con nuestro servicio de
            soporte técnico remoto y mantenimiento de computadores.
          </p>

          <Link href="#contacto">
            <a className="btn border-none rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-900 text-white">
              Solicitar Asesoria
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
