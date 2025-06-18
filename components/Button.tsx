import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
