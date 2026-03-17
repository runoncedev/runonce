import Link from "next/link";

import ToggleDarkModeButton from "./ToggleDarkModeButton";

export default function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 print:hidden">
      <div className="mx-auto flex h-12 max-w-(--breakpoint-md) items-center justify-between px-4 text-right dark:text-slate-400">
        <div>
          <Link
            href="/"
            className="text-slate-500 transition dark:text-slate-400 dark:hover:text-slate-300"
          >
            runonce.dev
          </Link>
        </div>
        <div className="flex gap-4">
          <ToggleDarkModeButton />
        </div>
      </div>
    </header>
  );
}
