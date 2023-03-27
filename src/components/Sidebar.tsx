import Image from "next/image";

import Logo from "../assets/logo.svg";
import { Book, FileText, GearSix, User } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-16 px-9 py-8">
      <Image src={Logo} alt="Logo" />

      <div className="flex flex-col gap-9">
        <a className="flex gap-4 text-white items-center" href="#">
          <Book size={20} weight="fill" />
          <strong>Board</strong>
        </a>

        <a className="flex gap-4 text-white items-center opacity-70" href="#">
          <User size={20} weight="fill" />
          <span className="font-medium">Equipes</span>
        </a>

        <a className="flex gap-4 text-white items-center opacity-70" href="#">
          <FileText size={20} weight="fill" />
          <span className="font-medium">Relatórios</span>
        </a>

        <a className="flex gap-4 text-white items-center opacity-70" href="#">
          <GearSix size={20} weight="fill" />
          <span className="font-medium">Ajustes</span>
        </a>
      </div>
    </aside>
  );
}
