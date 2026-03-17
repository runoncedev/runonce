export default function Ul({ children }) {
  return (
    <ul className="flex list-disc flex-col gap-4 px-6 text-slate-500 dark:text-slate-400 print:text-lg">
      {children}
    </ul>
  );
}
