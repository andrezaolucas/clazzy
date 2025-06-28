import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  iconRight?: React.ReactNode;
  onClear?: () => void;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      iconRight,
      onClear,
      className = "",
      type = "text",
      disabled,
      ...props
    },
    ref
  ) => {
    const showClear = !!onClear && !!props.value;
    return (
      <div className="flex flex-col gap-1 relative w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="text-[14px] font-regular text-gray-400 mb-0.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={clsx(
            "w-full h-11 rounded-md border px-3 pr-10 text-black placeholder-[#A1A09F] focus:ring-[1px] focus:ring-[#363535] outline-none text-[14px] transition",
            error ? "border-red-500" : "border-[#E5E5E5]",
            disabled && "bg-gray-100 cursor-not-allowed opacity-60",
            className
          )}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {/* Ícone de limpar */}
        {showClear && (
          <button
            type="button"
            aria-label="Limpar campo"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors p-1 bg-transparent border-0 cursor-pointer rounded-full hover:bg-[#F5F4F3]"
            tabIndex={0}
            onClick={onClear}
            style={{ top: "85%", transform: "translateY(-50%)" }}
          >
            <img
              src="/svgs/xemail.svg"
              alt="Limpar"
              style={{ width: 16, height: 16 }}
            />
          </button>
        )}
        {/* Ícone à direita customizável */}
        {iconRight && !showClear && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            {iconRight}
          </span>
        )}
        {/* Mensagem de erro */}
        {error && (
          <span
            id={props.id ? `${props.id}-error` : undefined}
            className="text-xs text-red-500 mt-1"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
