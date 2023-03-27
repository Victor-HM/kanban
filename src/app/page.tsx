"use client";

import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { FunnelSimple, MagnifyingGlass } from "phosphor-react";
import { Button } from "@/components/Button";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <div className="w-full bg-white rounded-tl-3xl flex flex-col gap-8 px-8 py-12 relative top-1">
        <Header />
        <div className="w-full flex gap-4 px-6">
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
      </div>
    </div>
  );
}
