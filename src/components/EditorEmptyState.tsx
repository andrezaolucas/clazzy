import React from "react";
import Image from "next/image";

export interface EditorEmptyStateProps {
  primaryText?: string; // default: "Inicie escrevendo um prompt"
  secondaryText?: string; // default: "Aperte Enter para escrever"
}

const primary = "Inicie escrevendo um prompt";
const secondary = "Aperte Enter para escrever";

export default function EditorEmptyState({
  primaryText,
  secondaryText,
}: EditorEmptyStateProps) {
  return (
    <div className="flex-1 flex flex-col" style={{ minHeight: 0 }}>
      <div
        className="pt-[5px] flex flex-col gap-6"
        style={{ marginLeft: -315, maxWidth: 600 }}
      >
        <h1 className="text-[32px] sm:text-2xl font-bold text-gray-400 text-left">
          Sem título
        </h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <Image
              src="/svgs/start-document.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-gray-600 text-base">
              {primaryText ?? primary}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/svgs/enter-to-ready.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-gray-600 text-base">
              {secondaryText ?? secondary}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
