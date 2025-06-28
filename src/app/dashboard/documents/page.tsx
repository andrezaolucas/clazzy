"use client";
// app/dashboard/documents/page.tsx
import React, { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Button from "@/components/ui/button";
import DocumentHeader from "@/components/DocumentHeader";

export default function DocumentsPage() {
  const [title, setTitle] = useState("");

  const handleTitleChange = (v: string) => setTitle(v);
  const handleExport = () => console.log("Exportar documento");
  const handleOpenSettings = () => console.log("Abrir configurações");
  const handleOpenHistory = () => console.log("Abrir histórico");

  return (
    <div className="flex min-h-screen bg-[#FFFEFC]">
      <Sidebar />
      <main className="flex-1 flex flex-col px-12 py-10">
        {/* DocumentHeader substitui o header antigo */}
        <DocumentHeader
          title={title}
          onTitleChange={handleTitleChange}
          onExport={handleExport}
          onOpenSettings={handleOpenSettings}
          onOpenHistory={handleOpenHistory}
        />
        {/* Área de documentos (placeholder) */}
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-[#F1F0EB] rounded-lg bg-white min-h-[300px] mt-8">
          <span className="text-[#ABAAA6] text-lg font-medium">
            Nenhum documento encontrado
          </span>
        </div>
        {/* Rodapé com contagem de letras */}
        <footer className="flex items-center justify-between mt-8 text-[12px] text-[#ABAAA6] border-t border-[#F1F0EB] pt-4">
          <span>T Texto</span>
          <span>0 letras</span>
        </footer>
      </main>
    </div>
  );
}
