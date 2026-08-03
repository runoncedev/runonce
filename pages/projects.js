import Card from "@/components/Card";
import ExternalIcon from "@/components/icons/ExternalIcon";
import Head from "next/head";
import Link from "next/link";

const PROJECTS = [
  // {
  //   title: "Deel card transactions viewer",
  //   href: "https://deel-card-transactions-viewer.vercel.app/",
  //   description:
  //     "Parses Deel's card transactions CSV file and displays a monthly summary.",
  // },
  // {
  //   title: "Lago en línea",
  //   href: "https://lago-en-linea-next.vercel.app/",
  //   description: "Real-time water quality monitoring",
  // },
  {
    title: "Random episode",
    href: "https://www.randomepisode.tv/",
    description: "Select random episodes from your favorite shows.",
  },
  {
    title: "Audio visualizer",
    href: "https://simple-audio-visualizer.vercel.app/",
    description: "Audio visualizer using SVG.",
  },
  {
    title: "Hiragana flashcards",
    href: "https://hiraganaflashcards.vercel.app/",
    description: "For learning hiragana japanese syllabary.",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Projects</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main className="mx-auto w-full max-w-(--breakpoint-md) px-4">
        <h1 className="my-4 text-5xl font-extrabold drop-shadow-sm dark:drop-shadow-none">
          Projects
        </h1>
        <p className="mb-4 text-lg text-balance dark:text-slate-300">
          A highlight of recent personal projects.
        </p>
        <ol className="grid gap-4 pb-10 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <li
              key={project.href}
              className={`h-full ${index === 0 ? "sm:col-span-2" : ""}`}
            >
              <Card className="group flex h-full break-inside-avoid flex-col overflow-hidden border-2 border-slate-200 transition-all duration-300 [-webkit-tap-highlight-color:transparent] dark:border-slate-800/75 print:border-none print:p-0">
                <div className="flex flex-col">
                  <div className="flex w-full items-start justify-between gap-6 pb-3 pl-5 pr-3 pt-3">
                    <h2 className="flex min-w-0 flex-grow items-center gap-2 text-xl font-semibold">
                      {project.title === "Random episode" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 shrink-0 stroke-[3px] text-blue-600 dark:text-yellow-400"
                        >
                          <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                          <polyline points="17 2 12 7 7 2" />
                        </svg>
                      )}
                      {project.title}
                    </h2>
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[38px] aspect-square shrink-0 items-center justify-center rounded-md bg-gray-200/30 transition hover:bg-gray-200/50 dark:bg-gray-700/30 dark:hover:bg-gray-700/80"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalIcon />
                    </Link>
                  </div>
                  <p className="px-5 pb-3 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
