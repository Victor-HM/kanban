import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: JSX.Element;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, icon }, ref) => {
    return (
      <div className="w-full shadow-xl flex items-center gap-3 border-[1px] transition-all hover:border-[#7C3AED] border-[#E2E8F0] focus-within:border-[#7C3AED] rounded-lg px-3">
        {icon}
        <input
          className="h-12 w-full bg-transparent focus:outline-none text-base"
          placeholder={placeholder}
          type="text"
          ref={ref}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
