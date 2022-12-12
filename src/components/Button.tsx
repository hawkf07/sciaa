import type { FC, ReactNode } from "react";

type Button = {
  children: ReactNode;
  variant: "primary" | "secondary";
};
export const Button: FC<Button> = ({ children, variant }) => {
  return (
    <button
      className={`w-full rounded px-2 py-2
      ${variant === "primary"
          ? "opacity-1 bg-blue-300 text-gray-800 hover:opacity-80"
          : "opacity-1 bg-red-300 text-gray-800 transition-opacity hover:opacity-80"
        }`}
    >
      {children}
    </button>
  );
};
