import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Homepage</title>
        <meta
          name="description"
          content="Experienced web developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main className="mx-auto w-full max-w-screen-md px-4">
        <h1 className="my-4 text-6xl font-extrabold lowercase tracking-tight drop-shadow dark:drop-shadow-none">
          Runonce
        </h1>
        <p className="mb-4 text-lg [text-wrap:balance] dark:text-slate-300">
          Hi, welcome! 👋 My name is Camilo and I like coding.
        </p>
        <ul className="mb-20 flex gap-4 text-lg [text-wrap:balance] dark:text-slate-300">
          <li>
            <Link
              href="projects"
              className="inline-block rounded-lg border-2 px-3 py-1 font-bold text-sky-600 transition-colors dark:border-slate-700 dark:bg-slate-700 dark:text-sky-400 dark:hover:border-slate-500 dark:hover:text-slate-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="resume"
              className="inline-block rounded-lg border-2 px-3 py-1 font-bold text-sky-600 transition-colors dark:border-slate-700 dark:bg-slate-700 dark:text-sky-400 dark:hover:border-slate-500 dark:hover:text-slate-200"
            >
              Resume
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
