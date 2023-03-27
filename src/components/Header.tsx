import Image from "next/image";
import { PencilSimple } from "phosphor-react";
import Picture from "../assets/picture.png";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Meu Kanban</h1>
        <PencilSimple size={36} color="#C7C7CD" weight="fill" />
      </div>
      <Image src={Picture} alt="Imagem de perfil" />
    </header>
  );
}
