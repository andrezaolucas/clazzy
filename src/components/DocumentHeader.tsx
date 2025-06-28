import React from "react";
import Image from "next/image";

export interface DocumentHeaderProps {
  title: string;
  onTitleChange: (v: string) => void;
  onExport: () => void;
  onOpenSettings: () => void;
  onOpenHistory: () => void;
}

export default function DocumentHeader({
  title,
  onTitleChange,
  onExport,
  onOpenSettings,
  onOpenHistory,
}: DocumentHeaderProps) {
  return (
    <header
      className="flex items-center justify-between px-4 sm:px-6 bg-white"
      style={{
        minHeight: 40,
        height: 40,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: -22,
      }}
    >
      <input
        type="text"
        className="flex-1 mr-4 font-semibold text-lg text-gray-900 placeholder:text-gray-400 outline-none min-w-0"
        style={{
          marginLeft: 0,
          maxWidth: "100%",
          height: 32,
          alignSelf: "center",
        }}
        placeholder="Sem título"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        aria-label="Título do documento"
      />
      <button
        onClick={onExport}
        className="flex items-center justify-center border border-black bg-[#363535] text-white rounded-md hover:bg-black transition-colors"
        style={{
          width: 123.65,
          height: 32,
          fontSize: 13,
          fontWeight: 500,
          marginLeft: 0,
          marginRight: 22,
          padding: 0,
          alignSelf: "center",
        }}
        aria-label="Exportar"
        type="button"
      >
        Exportar
      </button>
      <button
        onClick={onOpenSettings}
        className="p-2 text-gray-500 hover:text-gray-700 flex items-center justify-center"
        aria-label="Configurações"
        type="button"
        style={{ marginRight: 8, alignSelf: "center" }}
      >
        <Image src="/svgs/settings.svg" alt="" width={20} height={20} />
      </button>
      <button
        onClick={onOpenHistory}
        className="p-2 text-gray-500 hover:text-gray-700 flex items-center justify-center"
        aria-label="Histórico"
        type="button"
        style={{ alignSelf: "center" }}
      >
        <Image src="/svgs/clock.svg" alt="" width={20} height={20} />
      </button>
    </header>
  );
}
