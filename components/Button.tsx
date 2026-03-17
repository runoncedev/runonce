import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "rounded-xl border-2 px-4 py-2 font-semibold dark:border-slate-800 dark:text-slate-200 dark:hover:border-slate-600 transition hover:border-slate-400",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
