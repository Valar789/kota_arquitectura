
export default function Footer() {
  return (
    <>
      <footer className="relative  border-none   bg-slate-900/70 text-white  pb-6">
        <div className="flex justify-center flex-col w-full m-auto px-4">
          <div className="flex flex-col items-center m-auto pt-6">
   <a href='https://localhostweb.vercel.app/' className="m-y2 text-3xl">LocalHost</a>      
            <p className="">Soluciones Informáticas</p>
          </div>
          <hr className="my-6 border-gray-300" />

            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  font-medium py-1">
                Copyright © {new Date().getFullYear()} LocalHost.{" "}
              </div>
            </div>

        </div>
      </footer>
    </>
  );
}
