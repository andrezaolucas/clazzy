import React from "react";
import Image from "next/image";

export interface EditorToolbarProps {
  blockType: string;
  onBlockTypeChange: (v: string) => void;
  onInsertImage: () => void;
  onInsertAIImage: () => void;
  onInsertTable: () => void;
  onInsertCode: () => void;
  onInsertEquation: () => void;
  onInsertMath: () => void;
  onUndo: () => void;
  onRedo: () => void;
  letters: number;
}

const blockTypes = [
  { value: "T Texto", label: "T Texto" },
  { value: "Título 1", label: "Título 1" },
  { value: "Título 2", label: "Título 2" },
  { value: "Lista", label: "Lista" },
  // Adicione outros tipos se necessário
];

export default function EditorToolbar({
  blockType,
  onBlockTypeChange,
  onInsertImage,
  onInsertAIImage,
  onInsertTable,
  onInsertCode,
  onInsertEquation,
  onInsertMath,
  onUndo,
  onRedo,
  letters,
}: EditorToolbarProps) {
  return (
    <div
      className="
        fixed bottom-0 left-[225px] right-0
        h-12
        bg-white
        border-t border-gray-200
        flex items-center gap-4
        pl-102 pr-6
        z-30
      "
    >
      <span className="border-l h-6 border-gray-200 mx-4"></span>
      <select
        value={blockType}
        onChange={(e) => onBlockTypeChange(e.target.value)}
        className="bg-transparent outline-none text-sm"
        aria-label="Tipo de bloco"
      >
        {blockTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir imagem"
        onClick={onInsertImage}
      >
        <Image src="/svgs/photo.svg" alt="" width={18} height={18} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir imagem IA"
        onClick={onInsertAIImage}
      >
        <Image src="/svgs/photoai.svg" alt="" width={18} height={18} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir tabela"
        onClick={onInsertTable}
      >
        <Image src="/svgs/table.svg" alt="" width={18} height={18} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir código"
        onClick={onInsertCode}
      >
        <Image src="/svgs/codefile.svg" alt="" width={18} height={18} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir equação"
        onClick={onInsertEquation}
      >
        <Image src="/svgs/equation.svg" alt="" width={18} height={18} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Inserir matemática"
        onClick={onInsertMath}
      >
        <Image src="/svgs/math.svg" alt="" width={18} height={18} />
      </button>
      <span className="border-l h-6 border-gray-200 mx-2"></span>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Desfazer"
        onClick={onUndo}
      >
        <Image src="/svgs/leftarrow.svg" alt="" width={16} height={16} />
      </button>
      <button
        type="button"
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#F1F0EA] rounded-md transition-colors"
        aria-label="Refazer"
        onClick={onRedo}
      >
        <Image src="/svgs/rightarrow.svg" alt="" width={16} height={16} />
      </button>
      <span className="border-l border-gray-200 pl-4 ml-2 h-6"></span>
      <span className="ml-2 text-sm text-gray-500">{letters} letras</span>
    </div>
  );
}
