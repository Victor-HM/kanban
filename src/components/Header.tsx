import Image from "next/image";
import { PencilSimple } from "phosphor-react";
import Picture from "../assets/picture.png";

export function Header() {
  const photo = "https://github.com/Victor-HM.png";
  return (
    <header className="w-full flex justify-between px-10 items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Meu Kanban</h1>
        <PencilSimple size={36} color="#C7C7CD" weight="fill" />
      </div>
      <Image
        className="rounded-full"
        src={photo}
        alt="Imagem de perfil"
        width={64}
        height={64}
      />
    </header>
  );
}
