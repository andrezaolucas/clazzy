import React from "react";

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconSrc?: string;
}

export default function PremiumButton({
  children = "Plano Premium",
  iconSrc = "/svgs/ray.svg",
  className = "",
  ...props
}: PremiumButtonProps) {
  return (
    <button
      type="button"
      className={`bg-[#363535] border border-[#000] rounded-lg px-3 py-2 flex items-center gap-2 justify-center font-semibold text-[12px] text-white transition-colors hover:bg-[#4a4a4a] focus:outline-none ${className}`}
      {...props}
    >
      <img src={iconSrc} alt="Premium" className="w-5 h-5" />
      {children}
    </button>
  );
}
