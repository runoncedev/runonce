import Head from "next/head";

export default function TromzoCase() {
  return (
    <>
      <Head>
        <title>Tromzo Case Study</title>
        <meta
          name="description"
          content="Case study of my work at Tromzo as a Frontend Engineer"
          key="desc"
        />
      </Head>
      <main className="mx-auto max-w-(--breakpoint-md) w-full px-4">
        <h1 className="my-4 text-5xl font-extrabold drop-shadow-sm dark:drop-shadow-none">
          My work at Tromzo
        </h1>
        <p className="mb-4 text-lg text-balance dark:text-slate-300">
          A highlight of my work at Tromzo as a Frontend Engineer.
        </p>
        <hr />
        <h2 className="my-4 text-3xl font-extrabold drop-shadow-sm dark:drop-shadow-none">
          Overview
        </h2>
        <p>
          Tromzo is a platform for creating and sharing audio content. I was
          responsible for the frontend of the platform.
        </p>
        <h2 className="my-4 text-2xl font-bold drop-shadow-sm dark:drop-shadow-none">
          Dealing with AI unpredictability
        </h2>
        <p className="mb-4 text-balance dark:text-slate-300">
          One of the challenges of implementing AI features on the UI is dealing
          with unpredictable HTML/Markdown content, which requires to be handled
          carefully to ensure consistent visual styling.
        </p>

        <h2 className="my-4 text-2xl font-bold drop-shadow-sm dark:drop-shadow-none">
          Data visualization
        </h2>
        <p className="mb-4 text-balance dark:text-slate-300">
          While third-party visualization libraries offered quick solutions,
          their customization limitations led us to implement custom SVG-based
          charts. This gave us complete control over the visual design and
          interactions, giving us more freedom to implement the visual design we
          wanted.
        </p>
        <h2 className="my-4 text-2xl font-bold drop-shadow-sm dark:drop-shadow-none">
          Optimizing performance
        </h2>
        <p className="mb-4 text-balance dark:text-slate-300">
          Using analysis tools helped us identify and resolve key issues such as
          unnecessary re-renders and large bundle sizes:
        </p>
        <ul className="mb-4 list-disc pl-6 text-balance dark:text-slate-300">
          <li>Used React Scan to identify and fix unnecessary re-renders</li>
          <li>
            Used webpack-bundle-analyzer to identify and lazy-load non-critical
            dependencies
          </li>
          <li>
            Optimized dropdown component to display up to 300x more options than
            the original implementation by reducing the DOM nodes count
          </li>
        </ul>
      </main>
    </>
  );
}
