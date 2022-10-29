import Image from "next/image";
import Link from "next/link";
import upArrow from 'public/upArrow.png'
import { useEffect, useRef } from "react";

export default function ToUp() {
  const up = useRef();


  useEffect(() => {
    const header = document.getElementById('header')
    const handleScroll = () => {
      const { y } = header.getBoundingClientRect();


      y >= 0
        ? up.current.classList.add("hiddenUp")
        : up.current.classList.remove("hiddenUp");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={up} className="inUp hover:scale-110 fixed bottom-4 right-4 z-30 flex flex-col text-center ">
      <Link href="#header">
        <a ><Image height={25} width={25} src={upArrow} alt='up'/></a>
      </Link>
    </div>
  );
}
