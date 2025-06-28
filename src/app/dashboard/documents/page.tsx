"use client";
// app/dashboard/documents/page.tsx
import React, { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Button from "@/components/ui/button";
import DocumentHeader from "@/components/DocumentHeader";
import EditorEmptyState from "@/components/EditorEmptyState";
import EditorToolbar from "@/components/EditorToolbar";

export default function DocumentsPage() {
  const [title, setTitle] = useState("");
  const [blockType, setBlockType] = useState("T Texto");
  const [letters, setLetters] = useState(0);

  const handleTitleChange = (v: string) => setTitle(v);
  const handleExport = () => console.log("Exportar documento");
  const handleOpenSettings = () => console.log("Abrir configurações");
  const handleOpenHistory = () => console.log("Abrir histórico");

  // Mock handlers para a toolbar
  const handleBlockTypeChange = (v: string) => setBlockType(v);
  const handleInsertImage = () => console.log("Inserir imagem");
  const handleInsertAIImage = () => console.log("Inserir imagem IA");
  const handleInsertTable = () => console.log("Inserir tabela");
  const handleInsertCode = () => console.log("Inserir código");
  const handleInsertEquation = () => console.log("Inserir equação");
  const handleInsertMath = () => console.log("Inserir matemática");
  const handleUndo = () => console.log("Desfazer");
  const handleRedo = () => console.log("Refazer");

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
        {/* Área de documentos (EditorEmptyState) */}
        <div className="flex-1 flex flex-col items-center justify-center mt-8">
          <EditorEmptyState />
        </div>
        <EditorToolbar
          blockType={blockType}
          onBlockTypeChange={handleBlockTypeChange}
          onInsertImage={handleInsertImage}
          onInsertAIImage={handleInsertAIImage}
          onInsertTable={handleInsertTable}
          onInsertCode={handleInsertCode}
          onInsertEquation={handleInsertEquation}
          onInsertMath={handleInsertMath}
          onUndo={handleUndo}
          onRedo={handleRedo}
          letters={letters}
        />
      </main>
    </div>
  );
}
