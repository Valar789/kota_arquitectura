import { useState } from "react";

export default function Contacto() {
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    solicitud: "",
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
    const content = await rawResponse.json();
    console.log(content);
  };

  return (
    <section
      id="contacto"
      className="b  bg-slate-900/70 px-7 py-32 text-white flex m-auto w-full h-full"
    >
      <div className="flex flex-wrap gap-5">
        <div className="w-full  sm:w-12/12 md:w-10/12 lg:w-6/12 mx-auto text-White m-auto">
          <h1 className="text-5xl font-bold  text-white pb-4">
            Programa tu servicio técnico
          </h1>
          <p>
            No esperes hasta que tus computadores o portátiles dejen de
            funcionar. Asegura la continuidad de tu negocio. Solicita nuestros
            servicios expertos de consultoría informática y mantenimiento de
            computadores.
          </p>
          <p>
            Contáctanos ahora para que podamos asesorarte y darte el mejor
            servicio con un Precio Especial en este momento.
          </p>
          <br />
          <p>
            Envianos un correo y te contactaremos para agendar una cita o también
            puedes comunicarte a nuestros números de celular.
          </p>
          <div className="my-4">
            <p className="text-lg text-white font-bold">Cel. 305 273 8798</p>
            <p className="text-lg text-white font-bold">Cel. 311 616 8833</p>
          </div>
        </div>
        <div className="w-full sm:w-12/12 md:w-10/12 lg:w-4/12 m-auto">
          <form className="text-gray-800 bg-white px-3 rounded-md shadow-lg">
            <div className="form-control mb-4 flex">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold ">
                  Nombre
                </span>
              </label>
              <input
                onChange={captureValues}
                name="name"
                type="text"
                className="input input-sm border-none font-semibold bg-gray-200 "
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold  ">
                  Email
                </span>
              </label>

              <input
                onChange={captureValues}
                name="email"
                type="email"
                className="input input-sm border-none font-semibold bg-gray-200 "
              />
            </div>
            <div className="form-control mb-4 flex">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Tipo de solicitud
                </span>
              </label>
              <select
                onChange={captureValues}
                name="solicitud"
                className="bg-gray-200 select select-bordered select-sm w-full"
              >
                <option value="Diagnostico"> Diagnostico</option>
                <option value="Mantenimiento Preventivo Hardware">
                  {" "}
                  Mantenimiento Preventivo Hardware
                </option>
                <option value="Mantenimiento Preventivo Software">
                  {" "}
                  Mantenimiento Preventivo Software
                </option>
                <option value="Reparación"> Reparación</option>
                <option value="Instalación software">
                  {" "}
                  Instalación software
                </option>
                <option value="Instalación de Hardware">
                  {" "}
                  Instalación de Hardware
                </option>
                <option value="Formateo"> Formateo</option>
                <option value="Instalación Sistemas Operativos">
                  {" "}
                  Instalación Sistemas Operativos
                </option>
                <option value="Actualización"> Actualización</option>
              </select>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Mensaje</span>
              </label>

              <textarea
                onChange={captureValues}
                name="message"
                className="textarea bordered-none font-semibold bg-gray-200 "
              ></textarea>
            </div>
            <div className="form-control">
              <button
                onClick={sendMessage}
                className="btn  btn-sm border-none rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-900 text-white   my-4"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
