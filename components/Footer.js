import Link from "next/link";

export default function Footer() {
  return (
    <footer className="break-inside-avoid px-4 py-8 print:px-0 print:py-0">
      <div className="mx-auto max-w-(--breakpoint-md) px-4">
        <ul className="flex flex-col justify-end gap-8 text-slate-600 terminal:text-orange-700 dark:text-slate-400 print:block sm:flex-row">
          <li className="hidden print:block">
            <Link
              href="/"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              runonce.dev
            </Link>
          </li>
          <li className="hidden print:block">
            <a
              href="https://www.linkedin.com/in/camilorivera/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              linkedin.com/in/camilorivera
            </a>
          </li>
          <li className="hidden print:block">
            <a
              href="https://github.com/oncet/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              github.com/oncet
            </a>
          </li>
          <li className="hidden print:block">
            <a
              href="https://stackoverflow.com/users/1140065/camilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              stackoverflow.com/users/1140065
            </a>
          </li>
          <li className="block print:hidden">
            <a
              href="https://www.linkedin.com/in/camilorivera/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              LinkedIn
            </a>
          </li>
          <li className="block print:hidden">
            <a
              href="https://github.com/oncet/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              GitHub
            </a>
          </li>
          <li className="block print:hidden">
            <a
              href="https://stackoverflow.com/users/1140065/camilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 hover:terminal:text-orange-400 dark:hover:text-slate-300"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
