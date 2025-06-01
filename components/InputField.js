import { twMerge } from "tailwind-merge";

const InputField = ({ children, className, ...props }) => {
  return (
    <div className={twMerge("group flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  );
};

const Input = ({ id, placeholder, className, ...props }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={twMerge(
        "rounded-xl border-2 px-4 py-2 font-normal terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
};

InputField.Input = Input;

const Label = ({ children, className, ...props }) => {
  return (
    <label
      className={twMerge(
        "font-light transition dark:text-slate-400 group-focus-within:dark:text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

InputField.Label = Label;

export default InputField;
