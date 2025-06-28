import React from "react";
import clsx from "clsx";

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  // Handler de hover padrão
  function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.background = "#F5F4F3";
    e.currentTarget.style.borderColor = "#E1E1DE";
    if (props.onMouseOver) props.onMouseOver(e);
  }
  function handleMouseOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.borderColor = "#E5E5E5";
    if (props.onMouseOut) props.onMouseOut(e);
  }

  return (
    <button
      type="button"
      className={clsx(
        "relative w-full flex items-center justify-center rounded-md font-medium border transition-colors select-none text-[14px]",
        "bg-white border-[#E5E5E5] text-[#32302B] h-10",
        "focus:outline-none",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{ width: 351, height: 40, color: "#32302B", borderRadius: 8 }}
      disabled={disabled}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      <span
        className="absolute left-4 flex items-center"
        style={{ width: 24, height: 24 }}
      >
        {icon}
      </span>
      <span
        className="w-full text-center"
        style={{ fontSize: 14, letterSpacing: "5%" }}
      >
        {children}
      </span>
    </button>
  );
};

export default SocialButton;
