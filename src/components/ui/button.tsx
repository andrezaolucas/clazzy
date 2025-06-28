import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "cta";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const baseStyles =
  "w-full h-10 rounded-md font-medium transition border text-[14px] flex items-center justify-center gap-2 select-none focus:outline-none";

const variants: Record<string, string> = {
  primary:
    "bg-[#363535] text-white border-black hover:bg-black disabled:bg-[#E5E5E5] disabled:text-[#A1A09F] disabled:border-[#E5E5E5]",
  secondary:
    "bg-white text-[#32302B] border-[#E5E5E5] hover:bg-[#F5F4F3] hover:border-[#E1E1DE]",
  outline:
    "bg-transparent text-[#32302B] border-[#E5E5E5] hover:bg-[#F5F4F3] hover:border-[#E1E1DE]",
  cta: "bg-[#040404] text-white border-[#040404] hover:bg-[#32302B]",
};

export default function Button({
  variant = "primary",
  icon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex items-center mr-2">{icon}</span>}
      <span className="w-full text-center">{children}</span>
    </button>
  );
}
