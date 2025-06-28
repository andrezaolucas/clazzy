// app/dashboard/documents/page.tsx
import Sidebar from "@/components/ui/Sidebar";
import Button from "@/components/ui/button";

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen bg-[#FFFEFC]">
      <Sidebar />
      <main className="flex-1 flex flex-col px-12 py-10">
        {/* Header/topbar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[36px] font-bold text-[#32302B] leading-tight">
            Meus Documentos
          </h1>
          <Button variant="primary" style={{ width: 180, height: 40 }}>
            Novo documento
          </Button>
        </div>
        {/* Área de documentos (placeholder) */}
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-[#F1F0EB] rounded-lg bg-white min-h-[300px]">
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
