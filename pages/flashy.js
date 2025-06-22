import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main className="mx-auto flex w-full max-w-(--breakpoint-md) grow flex-col justify-center px-4">
        <h1 className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-9xl font-extrabold uppercase italic tracking-wider text-slate-900 decoration-white decoration-wavy decoration-8 underline-offset-20 [-webkit-text-stroke:4px_transparent] [text-decoration-skip-ink:none] [text-shadow:white_1px_0_10px]">
          Runonce
        </h1>
        <h1 className="mt-10 text-9xl font-extrabold uppercase italic tracking-wider filter-[url('#goo')]">
          Runonce
        </h1>
        <h1
          id="gooey-border-h1"
          className="mt-10 text-9xl font-extrabold uppercase italic tracking-wider text-slate-900 filter-[url('#gooey-border')]"
        >
          Runonce
        </h1>
      </main>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            >
              <animate
                attributeName="values"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -2 ; 
                        1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -1.5 ; 
                        1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -2"
                dur="3s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          {/* Filter to create a gooey border effect */}
          <filter id="gooey-border">
            {/* 1. Dilate the source text alpha channel */}
            <feMorphology
              operator="dilate"
              radius="6"
              in="SourceAlpha"
              result="dilated"
            />
            {/* 2. Blur the dilated shape */}
            <feGaussianBlur in="dilated" stdDeviation="5" result="blurred" />
            {/* 3. Increase alpha contrast for the gooey effect shape */}
            <feColorMatrix
              in="blurred"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -2"
              result="gooeyShapeAlpha"
            >
              <animate
                id="gooeyAnimation"
                attributeName="values"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 0 ; 
                        1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7 ; 
                        1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 0"
                dur="3s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </feColorMatrix>
            {/* 4. Define the border color */}
            <feFlood
              flood-color="oklch(27.9% 0.041 260.031)"
              result="floodColor"
            />
            {/* 5. Combine the color with the gooey shape */}
            <feComposite
              operator="in"
              in="floodColor"
              in2="gooeyShapeAlpha"
              result="gooeyColoredBorder"
            />
            {/* 6. Merge the colored border behind the original text */}
            <feMerge>
              <feMergeNode in="gooeyColoredBorder" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </>
  );
}
