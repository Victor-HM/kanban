import Image from "next/image";

import Logo from "../assets/logo.svg";
import { Book, FileText, GearSix, User } from "phosphor-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function Sidebar() {
  const goToNotFoundPage = () => {
    notFound();
  };
  return (
    <aside className="flex flex-col gap-16 px-9 py-8">
      <Image src={Logo} alt="Logo" />

      <div className="flex flex-col gap-9">
        <Link className="flex gap-4 text-white items-center" href="/">
          <Book size={20} weight="fill" />
          <strong>Board</strong>
        </Link>

        <button
          className="flex gap-4 text-white items-center opacity-70"
          onClick={goToNotFoundPage}
        >
          <User size={20} weight="fill" />
          <span className="font-medium">Equipes</span>
        </button>

        <Link
          className="flex gap-4 text-white items-center opacity-70"
          href="/report"
        >
          <FileText size={20} weight="fill" />
          <span className="font-medium">Relatórios</span>
        </Link>

        <Link
          className="flex gap-4 text-white items-center opacity-70"
          href="/config"
        >
          <GearSix size={20} weight="fill" />
          <span className="font-medium">Ajustes</span>
        </Link>
      </div>
    </aside>
  );
}
