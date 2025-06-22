import { twMerge } from "tailwind-merge";

export default function PlusIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge(
        "lucide lucide-plus-icon lucide-plus bg-pink-400 w-6 h-6",
        className,
      )}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
