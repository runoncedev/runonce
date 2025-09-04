import Card from "@/components/Card";
import ToggleExpandIcon from "@/components/icons/ToggleExpandIcon";
import { useState } from "react";

export default function ExperienceCard({
  title,
  subtitle,
  summary,
  children,
  open = false,
  editable = false,
}) {
  const [isOpen, setIsOpen] = useState(open);

  const onClickHandler = () => {
    const textSelection = window.getSelection().toString();

    if (!textSelection.length) setIsOpen((open) => !open);
  };

  return (
    <Card
      className={
        "flex break-inside-avoid flex-col overflow-hidden border-2 transition-all duration-300 [-webkit-tap-highlight-color:transparent] terminal:border-2 terminal:border-dashed	terminal:border-orange-500 dark:border-slate-800/75 print:border-none print:p-0 " +
        (isOpen ? "border-slate-400" : "border-slate-200")
      }
    >
      <div className="flex flex-col gap-4">
        <div className={!summary ? "pb-3" : ""}>
          <div
            className={
              "flex w-full justify-between pb-3 pl-5 pr-3 pt-3 transition duration-300 focus-visible:rounded-t-lg  "
            }
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex gap-6">
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
                className="flex h-7 w-7 scale-150 items-center justify-center rounded-md bg-gray-200/30 transition  terminal:rounded-none  terminal:border-orange-500 terminal:bg-transparent hover:terminal:border dark:bg-gray-700/30 dark:hover:bg-gray-700/80"
                onClick={onClickHandler}
                aria-label="Expand card"
                title={`${isOpen ? "Collapse" : "Expand"} ${title} card`}
              >
                <ToggleExpandIcon size="sm" isOpen={isOpen} />
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
