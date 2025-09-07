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
            className="fill-transparent"
            rx="1"
            ry="1"
          />
          {/* <path
            d="M 30 15 h 10 q 5 0 5 5 t 5 5 h 10"
            fill="none"
            className="stroke-slate-700 stroke-[0.5]"
            stroke-linecap="round"
          /> */}
          {/* <path
            d="M 30 35 h 10 q 5 0 5 -5 t 5 -5 h 10"
            fill="none"
            className="stroke-slate-700 stroke-[0.5]"
            stroke-linecap="round"
          /> */}
          <line
            x1="40"
            y1="25"
            x2="50"
            y2="25"
            className="stroke-slate-600 stroke-[1]"
            strokeWidth={0.5}
          />
          <circle
            r="1.5"
            className="fill-slate-900 stroke-slate-600 stroke-[1]"
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M35 25 h17"
            />
          </circle>
          <g>
            <rect
              x="10"
              y="20"
              width="30"
              height="10"
              className="stroke-slate-600 stroke-[0.75] fill-slate-800"
              fill="none"
              rx="1"
              ry="1"
            />
            <path id="P" pathLength="2" d="M10 25 h30" stroke="transparent" />
            <text>
              <textPath
                href="#P"
                startOffset="1"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-cyan-500 tracking-wider text-[3px] font-jetbrains-mono"
              >
                <tspan>&lt;h1&gt;</tspan>
                <tspan className="fill-cyan-200">Foo</tspan>
                <tspan>&lt;/h1&gt;</tspan>
              </textPath>
            </text>
          </g>
          <rect
            x="50"
            y="5"
            width="35"
            height="40"
            className="stroke-slate-600 stroke-[0.75] fill-slate-800"
            fill="none"
            rx="1"
            ry="1"
          />
          <text
            x="53.5"
            y="14.5"
            className="fill-slate-300 text-[8px] font-bold"
          >
            Foo
          </text>
          <path
            className="stroke-slate-500 fill-none"
            d="M 54.5 19 h 15 m -15 5 h 10 m -10 5 h 18"
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
