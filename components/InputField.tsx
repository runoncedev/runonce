import { twMerge } from "tailwind-merge";

type InputFieldProps = {
  children: React.ReactNode;
  className?: string;
};

const InputField = ({ children, className, ...props }: InputFieldProps) => {
  return (
    <div
      className={twMerge(
        "group flex flex-col gap-2 [&_label]:self-start",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type InputProps = {
  id: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ id, placeholder, className, ...props }: InputProps) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={twMerge(
        "rounded-xl border-2 px-4 py-2 font-normal terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200",
        className,
      )}
      {...props}
    />
  );
};

InputField.Input = Input;

type LabelProps = {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      className={twMerge(
        "font-light transition dark:text-slate-300 dark:group-focus-within:text-slate-300",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

InputField.Label = Label;

export default InputField;
