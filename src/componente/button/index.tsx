import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function Button({ text = "Acessar", className, ...props }: ButtonProps) {
  return (
    <button
      {...props} // espalha todas as props nativas do button
      className={`h-12 border rounded-2xl px-2 mt-0.5 bg-[#3D3C6C] text-white text-lg transition duration-300 hover:bg-[#373661] cursor-pointer ${
        className ?? ""
      }`}
    >
      {text}
    </button>
  );
}
