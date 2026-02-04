import Card from "@/components/Card";
import ToggleExpandIcon from "@/components/icons/ToggleExpandIcon";
import Link from "next/link";
import { useState } from "react";

export default function ExperienceCard({
  title,
  at,
  industry,
  subtitle,
  summary,
  children,
  open = false,
  editable = false,
  current = false,
  url = undefined,
}) {
  const [isOpen, setIsOpen] = useState(open);

  const onClickHandler = () => {
    setIsOpen((open) => !open);
  };

  return (
    <Card
      className={
        "group flex break-inside-avoid flex-col overflow-hidden border-2 transition-all duration-300 [-webkit-tap-highlight-color:transparent] terminal:border-2 terminal:border-dashed	terminal:border-orange-500 dark:border-slate-800/75 print:border-none print:p-0 " +
        (isOpen ? "border-slate-400" : "border-slate-200")
      }
    >
      <div className="flex flex-col gap-4">
        <div className={!summary ? "pb-3" : ""}>
          <div
            className={
              "flex w-full justify-between pb-3 pl-5 pr-3 pt-3 gap-6 transition items-start duration-300 focus-visible:rounded-t-lg  "
            }
          >
            <div className="flex gap-3 justify-between flex-grow flex-wrap">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold flex-grow flex gap-x-3 flex-wrap min-w-0 items-center">
                  {title}
                  {at && <span className="font-light text-slate-400">@ {at}</span>}
                </h2>
                {industry && (
                  <div className="text-slate-400 dark:text-slate-300">{industry}</div>
                )}
              </div>
              {url && (
                <Link
                  href={url}
                  className="text-slate-400 text-xl break-keep flex items-center gap-2
 transition hover:dark:bg-gray-700/80 bg-gray-200/30 self-end justify-self-end border px-2 py-1 rounded-md border-transparent font-normal dark:bg-gray-700/30 "
                >
                  Case study
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
                    className="lucide lucide-file-text-icon lucide-file-text"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </Link>
              )}
            </div>
            <div className="flex gap-6 items-center h-full">
              {editable && (
                <button className="flex h-7 w-7 scale-150 items-center justify-center rounded-md  transition duration-150 terminal:rounded-none  terminal:border-orange-500 terminal:bg-transparent hover:terminal:border dark:hover:bg-gray-700/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil-icon lucide-pencil h-4 w-4 stroke-slate-400"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </button>
              )}
              <button
                className="flex h-[38px] aspect-square items-center justify-center rounded-md bg-gray-200/30 hover:bg-gray-200/50 transition  terminal:rounded-none  terminal:border-orange-500 print:hidden terminal:bg-transparent hover:terminal:border dark:bg-gray-700/30 dark:hover:bg-gray-700/80"
                onClick={onClickHandler}
                aria-label="Expand card"
                title={`${isOpen ? "Collapse" : "Expand"} ${title} card`}
              >
                <ToggleExpandIcon size="md" isOpen={isOpen} />
              </button>
            </div>
          </div>
          <div className="px-5">{subtitle}</div>
        </div>
        {summary && <div className="px-3 pb-3">{summary}</div>}
      </div>
      <div
        className={
          "grid px-3 transition-all duration-300 ease-in-out print:block print:opacity-100 " +
          (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="row-[1/span_2] overflow-hidden">
          <div className="mb-5 mt-1">{children}</div>
        </div>
      </div>
    </Card>
  );
}
