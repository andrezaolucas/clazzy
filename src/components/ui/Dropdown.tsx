import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface DropdownOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  selected?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
  placeholder = "Selecione...",
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const selectedOption = options.find((opt) => opt.value === selected);

  return (
    <div className={clsx("relative inline-block w-full", className)}>
      <button
        ref={btnRef}
        type="button"
        className={clsx(
          "flex items-center w-full px-3 py-2 bg-white border border-[#E5E5E5] rounded-md text-left text-[14px] font-medium transition-colors",
          "focus:outline-none focus:ring-1 focus:ring-[#363535]",
          disabled && "opacity-60 cursor-not-allowed"
        )}
        style={{ height: 40, borderRadius: 8 }}
        onClick={() => !disabled && setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
      >
        {selectedOption?.icon && (
          <span className="mr-2 flex items-center">{selectedOption.icon}</span>
        )}
        <span className={clsx(!selectedOption && "text-gray-400")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={clsx("ml-auto transition-transform", open && "rotate-180")}
          width={16}
          height={16}
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="#91908E"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute left-0 mt-2 w-full bg-white border border-[#E5E5E5] rounded-xl shadow-lg z-20 animate-fade-in"
          style={{ minWidth: 175 }}
          role="listbox"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={clsx(
                "flex items-center w-full px-4 py-2 text-[14px] transition-colors",
                selected === opt.value
                  ? "bg-[#F5F4F3] text-[#32302B]"
                  : "hover:bg-[#F5F4F3]",
                "rounded-full"
              )}
              style={{ borderRadius: 32 }}
              role="option"
              aria-selected={selected === opt.value}
              onClick={() => {
                onSelect(opt.value);
                setOpen(false);
              }}
            >
              {opt.icon && (
                <span className="mr-2 flex items-center">{opt.icon}</span>
              )}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
