import Card from "@/components/Card";
import ExternalIcon from "@/components/icons/ExternalIcon";
import Head from "next/head";

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
              <Card className="h-full overflow-hidden border-2 border-slate-200 transition-colors hover:border-slate-400 dark:border-slate-800/75 dark:hover:border-slate-600">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900"
                >
                  {/* <div className="flex aspect-video w-full items-center justify-center border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-700/30 dark:text-slate-300">
                    Screenshot placeholder
                  </div> */}

                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold tracking-tight dark:text-slate-200">
                        {project.title}
                      </h2>
                      <span className="mt-1 shrink-0">
                        <ExternalIcon />
                      </span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-2 text-sm font-semibold text-sky-700 transition-colors group-hover:text-sky-500 dark:text-sky-400 dark:group-hover:text-sky-300">
                      View project
                    </div>
                  </div>
                </a>
              </Card>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
