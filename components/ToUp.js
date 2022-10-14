import Image from "next/image";
import Link from "next/link";
import upArrow from 'public/upArrow.png'

export default function ToUp() {
  return (
    <div className="inUp hover:scale-110 fixed bottom-4 right-4 arrowDisplay z-30 flex flex-col text-center ">
      <Link href="#header">
        <a ><Image height={25} width={25} src={upArrow} alt='up'/></a>
      </Link>
    </div>
  );
}
