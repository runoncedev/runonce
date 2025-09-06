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
        <p className="mb-4 text-lg dark:text-slate-300">
          Started in August 2023 as a frontend engineer
        </p>
        <hr />
        <h2 className="my-4 text-3xl font-extrabold drop-shadow-sm dark:drop-shadow-none">
          Overview
        </h2>
        <p>
          Tromzo is a cyber security platform for accelerating risk remediation.
          It uses AI and data visualization to help users identify and remediate
          critical vulnerabilities in their software.
        </p>
        <h2 className="my-4 text-2xl font-bold drop-shadow-sm dark:drop-shadow-none">
          Dealing with AI unpredictability
        </h2>
        <p className="mb-4 text-balance dark:text-slate-300">
          One of the challenges of implementing AI features on the UI is dealing
          with unpredictable HTML/Markdown content, which requires to be handled
          carefully to ensure consistent visual styling.
        </p>
        <svg viewBox="0 0 100 50" className="" width="100%" height="100%">
          <rect
            width="100%"
            height="100%"
            className="fill-slate-800"
            rx="1"
            ry="1"
          />
          <path
            d="M 30 15 h 10 q 5 0 5 5 t 5 5 h 10"
            fill="none"
            className="stroke-blue-700"
            stroke-linecap="round"
          />
          <path
            d="M 30 35 h 10 q 5 0 5 -5 t 5 -5 h 10"
            fill="none"
            className="stroke-blue-700"
            stroke-linecap="round"
          />
          <rect
            x="10"
            y="10"
            width="20"
            height="10"
            className="stroke-red-400"
            fill="none"
            rx="1"
            ry="1"
          />
          <text
            x="12.5"
            y="15.5"
            className="fill-blue-400 text-[2px] font-bold"
          >
            &lt;h1&gt;Foo&lt;/h1&gt;
          </text>
          <rect
            x="10"
            y="30"
            width="20"
            height="10"
            className="stroke-red-400"
            fill="none"
            rx="1"
            ry="1"
          />
          <text
            x="13.5"
            y="35.5"
            className="fill-blue-400 text-[2px] font-bold"
          >
            &lt;b&gt;Foo&lt;/b&gt;
          </text>
          <rect
            x="60"
            y="5"
            width="35"
            height="40"
            className="stroke-red-400"
            fill="none"
            rx="1"
            ry="1"
          />
          <text
            x="63.5"
            y="14.5"
            className="fill-blue-400 text-[8px] font-bold"
          >
            Foo
          </text>
          <path
            className="stroke-blue-500 fill-none"
            d="M 64.5 19 h 15 m -15 5 h 10 m -10 5 h 18"
            stroke-linecap="round"
            strokeWidth={2}
          />
        </svg>
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
