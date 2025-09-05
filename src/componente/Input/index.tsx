import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Por exemplo, adicionar uma prop customizada
  label?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`h-14 border-2 border-[#3D3C6C] rounded-2xl px-4 mt-0.5 bg-[#ECECF0] text-gray-900 
        focus:outline-none focus:ring-2 focus:ring-[#3D3C6C]
        ${className ?? ""}`}
    />
  );
}
