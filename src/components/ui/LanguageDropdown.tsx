import React from "react";

interface LanguageDropdownProps {
  isOpen: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50">
      <ul className="divide-y divide-gray-100">
        <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ease-in-out duration-150">
          <span className="block text-sm font-regular text-gray-800">
            English (US)
          </span>
          <span className="block text-xs text-gray-500">Inglês (EUA)</span>
        </li>
        {/* Adicione outros itens aqui */}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
