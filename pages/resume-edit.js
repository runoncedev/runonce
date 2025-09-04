import Head from "next/head";
import { useState } from "react";

import Button from "@/components/Button";
import FadeInOnEntry from "@/components/FadeInOnEntry";
import Footer from "@/components/Footer";
import Header from "@/components/ResumeHeader";
import Educar from "@/components/experience/Educar";
import Elementum from "@/components/experience/Elementum";
import EntornosEducativos from "@/components/experience/EntornosEducativos";
import Konfio from "@/components/experience/Konfio";
import Persiscal from "@/components/experience/Persiscal";
import Tromzo from "@/components/experience/Tromzo";
import MailIcon from "@/components/icons/MailIcon";
import ToggleExpandIcon from "@/components/icons/ToggleExpandIcon";
import Link from "next/link";
export default function Home() {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <Head>
        <title>Camilo Rivera / Web developer</title>
        <meta
          name="description"
          content="Experienced web developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main>
        <Header />
        <div className="mx-auto flex  max-w-(--breakpoint-md) justify-between gap-4 px-4">
          <Link
            className="group mb-5 flex gap-2 rounded-xl border-2 px-4 py-2 font-semibold text-slate-300 underline decoration-transparent decoration-wavy decoration-2 underline-offset-8 transition-all duration-150 terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200 "
            href="/add"
          >
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
              className="lucide lucide-plus-icon lucide-plus stroke-slate-300 transition-all duration-500 ease-in-out"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            New experience
          </Link>
          {/* <Button className="group mb-5 flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus-icon lucide-plus stroke-slate-400"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add experience
          </Button> */}
          <Button className="group mb-5 flex items-center justify-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-settings2-icon lucide-settings-2 stroke-slate-400"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </Button>
        </div>
        <div className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-7 px-4 print:max-w-none print:gap-3 print:px-0">
          <Tromzo />
          <Konfio />
          {/* <Yappa /> */}
          <Elementum />
          {/* <Educar2018 /> */}
          <div>
            <div className="flex justify-center print:hidden">
              <Button
                onClick={() => setIsShowMore(!isShowMore)}
                className="flex w-full items-center justify-center sm:w-[255px]"
              >
                <div className="flex w-[120px] justify-between">
                  {isShowMore ? "Show less" : "Show more"}
                  <ToggleExpandIcon isOpen={isShowMore} />
                </div>
              </Button>
            </div>
            <div
              className={
                "grid transition-all duration-300 ease-in-out print:grid-rows-[1fr] print:opacity-100 " +
                (isShowMore
                  ? "grid-rows-[1fr] opacity-100"
                  : "invisible grid-rows-[0fr] opacity-0")
              }
            >
              <div className="row-[1/span_2] overflow-hidden">
                <div className="mt-7 flex flex-col gap-7">
                  {/* <FadeInOnEntry>
                    <Gm2dev />
                  </FadeInOnEntry> */}
                  <FadeInOnEntry>
                    <Persiscal />
                  </FadeInOnEntry>
                  <FadeInOnEntry>
                    <Educar />
                  </FadeInOnEntry>
                  <FadeInOnEntry>
                    <EntornosEducativos />
                  </FadeInOnEntry>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-(--breakpoint-md) px-4 py-10">
          <blockquote cite="https://addyosmani.com/blog/good-code/">
            <p className="text-center text-3xl font-thin tracking-wide text-slate-300 text-balance">
              Good code is like a love letter to the next developer who will
              maintain it.
            </p>
            <footer className="mt-5 text-right text-slate-400">
              <div className="font-bold">Addy Osmani</div>
              <cite className="text-sm not-italic text-slate-400">
                Learning JavaScript Design Patterns
              </cite>
            </footer>
          </blockquote>
          <blockquote cite="https://addyosmani.com/blog/good-code/">
            <p className="text-center text-3xl font-thin tracking-wide text-slate-300 text-balance">
              You should name a variable using the same care with which you name
              a first-born child.
            </p>
            <footer className="mt-5 text-right text-slate-400">
              <div className="font-bold">Robert C. Martin</div>
              <cite className="text-sm not-italic text-slate-400">
                Clean Code: A Handbook of Agile Software Craftsmanship
              </cite>
            </footer>
          </blockquote>
        </div> */}
        <div className="mt-8 bg-slate-200 py-6 text-center terminal:bg-black dark:bg-slate-800 print:mt-0 sm:text-left">
          <p className="mx-auto max-w-(--breakpoint-md) px-4 text-slate-800 terminal:text-yellow-200 dark:text-slate-400">
            Contact me at{" "}
            <a
              href="mailto:camilorivera86@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-lg font-semibold text-sky-600 terminal:text-yellow-400 dark:text-sky-500"
            >
              <MailIcon /> camilorivera86@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
