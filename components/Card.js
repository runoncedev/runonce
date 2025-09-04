import { twMerge } from "tailwind-merge";

const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "rounded-xl bg-slate-50 terminal:rounded-none terminal:bg-black dark:bg-slate-800/75",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
