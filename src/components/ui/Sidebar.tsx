import React from "react";
import Link from "next/link";
import PremiumButton from "./PremiumButton";

const icons = {
  "Novo documento": "/svgs/add-new-document.svg",
  Documentos: "/svgs/documents.svg",
  Bibliotecas: "/svgs/library.svg",
  Templates: "/svgs/templates.svg",
  "Clazzy IA": "/svgs/ia.svg",
  Ajuda: "/svgs/help-info.svg",
  Tutoriais: "/svgs/tutors.svg",
  "Plano Premium": "/svgs/ray.svg",
  Config: "/svgs/settings.svg",
  Clock: "/svgs/clock.svg",
};

export default function Sidebar() {
  return (
    <aside className="bg-[#FAFAFA] h-screen w-[225px] flex flex-col border-r border-[#F1F0EB] px-6 py-5 relative">
      {/* Topo: logo à esquerda, closesidebar à direita */}
      <div className="flex items-center mb-8 gap-3 justify-between">
        <img src="/svgs/logo.svg" alt="Logo Clazzy" width={40} height={40} />
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center p-0 m-0 bg-transparent border-none focus:outline-none mr-[-12px] rounded-md transition-colors hover:bg-[#F1F0EA] group"
          style={{ lineHeight: 0 }}
          aria-label="Fechar sidebar"
        >
          <img
            src="/svgs/closesidebar.svg"
            alt="Fechar sidebar"
            className="w-5 h-5 group-hover:brightness-0"
          />
        </button>
      </div>
      {/* Avatar abaixo da logo */}
      <div className="flex items-center mb-8 gap-2 rounded-md transition-colors cursor-pointer hover:bg-[#F1F0EA] group px-2 py-1">
        <img
          src="/svgs/photouser.svg"
          alt="Avatar"
          width={21}
          height={22}
          style={{ borderRadius: 4, marginLeft: 1 }}
          className="object-cover group-hover:brightness-90"
        />
        <span className="font-medium text-[14px] text-[#32302B] whitespace-nowrap group-hover:text-[#363535]">
          André Lucas
        </span>
        <img
          src="/svgs/arrowupdown.svg"
          alt="Trocar usuário"
          className="w-5 h-5 ml-1 group-hover:brightness-0"
        />
      </div>
      {/* Menu principal */}
      <nav className="flex flex-col gap-2 mb-2">
        <SidebarLink
          href="#"
          label="Novo documento"
          icon={icons["Novo documento"]}
        />
        <SidebarLink
          href="/dashboard/documents"
          label="Documentos"
          icon={icons["Documentos"]}
          active
        />
        <SidebarLink
          href="/dashboard/libraries"
          label="Bibliotecas"
          icon={icons["Bibliotecas"]}
        />
        <SidebarLink
          href="/dashboard/templates"
          label="Templates"
          icon={icons["Templates"]}
        />
        <SidebarLink href="#" label="Clazzy IA" icon={icons["Clazzy IA"]} />
      </nav>
      {/* Espaço flexível para empurrar o rodapé */}
      <div className="flex-1" />
      {/* Rodapé: linha, menu secundário, limites, plano premium */}
      <div>
        <div className="border-t border-[#F1F0EB] my-4" />
        <nav className="flex flex-col gap-2 mb-8">
          <SidebarLink href="#" label="Ajuda" icon={icons["Ajuda"]} />
          <SidebarLink href="#" label="Tutoriais" icon={icons["Tutoriais"]} />
        </nav>
        <div className="flex flex-col gap-1 text-[12px] text-[#ABAAA6] mb-2">
          {/* Limite de Arquivo */}
          <div className="flex flex-col font-medium mt-0">
            <div
              className="flex items-center justify-between w-full px-3"
              style={{ minWidth: 0 }}
            >
              <span className="text-[#ABAAA6]">Limite de Arquivo</span>
              <span className="text-[#ABAAA6]">0/5</span>
            </div>
            <div
              className="w-full px-3 h-2 bg-[#F1F0EB] rounded mt-1"
              style={{ minWidth: 0 }}
            >
              <div
                className="h-2 bg-[#363535] rounded"
                style={{ width: "0%" }}
              />
            </div>
          </div>
          {/* Clazzy IA */}
          <div className="flex flex-col font-medium mt-2">
            <div
              className="flex items-center justify-between w-full px-3"
              style={{ minWidth: 0 }}
            >
              <span className="text-[#ABAAA6]">Clazzy IA</span>
              <span className="text-[#ABAAA6]">0/200</span>
            </div>
            <div
              className="w-full px-3 h-2 bg-[#F1F0EB] rounded mt-1"
              style={{ minWidth: 0 }}
            >
              <div
                className="h-2 bg-[#363535] rounded"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
        {/* Botão Plano Premium */}
        <PremiumButton className="mb-4 mt-6 w-full" />
      </div>
    </aside>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon?: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium transition-colors ${
        active
          ? "bg-[#F5F4F3] text-[#363535]"
          : "text-[#32302B] hover:bg-[#F5F4F3] hover:text-[#363535]"
      }`}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
      {label}
    </Link>
  );
}

function SidebarCircleButton({
  icon,
  ariaLabel,
}: {
  icon: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#F1F0EB] hover:bg-[#F5F4F3] transition-colors"
      tabIndex={0}
    >
      <img src={icon} alt="" className="w-5 h-5" />
    </button>
  );
}
