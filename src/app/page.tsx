"use client";

import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { FunnelSimple, MagnifyingGlass } from "phosphor-react";
import { Button } from "@/components/Button";
import { Sidebar } from "@/components/Sidebar";
import { Board } from "@/components/Board";
import { useEffect, useState } from "react";

import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

export default function Home() {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    setIsReady(true);
  });
  return (
    <>
      <Header />
      <div className="w-full flex gap-4 px-10">
        <Button
          placeholder="Filtrar"
          icon={<FunnelSimple size={24} color="#FFFFFF" />}
        />
        <Input
          className="w-full"
          placeholder="Busque por cards, assuntos ou responsáveis..."
          icon={<MagnifyingGlass size={24} color="#505059" />}
        />
      </div>
      {isReady && <Board />}
    </>
  );
}
