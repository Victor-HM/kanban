import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string;
  icon?: JSX.Element;
}

export function Button({ placeholder, icon }: ButtonProps) {
  return (
    <button className="flex items-center gap-2 px-8 py-3 bg-[#7C3AED] rounded-lg">
      {icon}
      <p className="text-white">{placeholder}</p>
    </button>
  );
}
