import Image from "next/image";
import { useState } from "react";
import imgContacto from "public/imgContacto.jpg";

export default function Contacto() {
  const [ok, setOk] = useState(false);
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    message: "",
  });

  const captureValues = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const rawResponse = await fetch("https://formspree.io/f/moqbebvn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensaje),
    });
    const { ok } = await rawResponse.json();
    setOk(ok);
  };

  return (
    <section
      id="contacto"
      className="bg-white pt-10 relative flex flex-wrap lg:h-screen lg:items-center"
    >
      <div className="relative flex justify-items-center h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Welcome"
          src={imgContacto}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <div
        id="formContact"
        className=" w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Que esperas para iniciar!
          </h1>

          <p className="mt-4 text-gray-500">
            Envia un mensaje y nos pondremos en contacto contigo para agendarte
            un cita!
          </p>
        </div>

        <form
          onSubmit={sendMessage}
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="nombres" className="sr-only">
              Nombres
            </label>

            <div className="relative">
              <input
                onChange={captureValues}
                required
                name="name"
                type="text"
                className="w-full rounded-lg border-b-2 border-pink-600 outline-none bg-white p-4 pr-12 text-sm shadow-sm"
                placeholder="Escribe tu nombre"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                onChange={captureValues}
                required
                name="email"
                type="email"
                className="w-full rounded-lg border-b-2 border-pink-600 outline-none  p-4 pr-12 text-sm shadow-sm"
                placeholder="Escribe tu correo"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="sr-only">
              Mensaje
            </label>
            <div className="relative">
              <textarea
                onChange={captureValues}
                name="message"
                type="text"
                className="w-full rounded-lg border-b-2 border-pink-600 outline-none p-4 pr-12 text-sm shadow-sm"
                placeholder="Dejanos tu mensaje"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {ok == true && (
              <div
                className="rounded border border-green-900/10 bg-green-50 p-4 text-green-700"
                role="alert"
              >
                <strong className="text-sm font-medium">
                  Tu mensaje se ha enviado correctamente!
                </strong>
              </div>
            )}

            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
