"use client";

import { useState } from "react";

import ToggleExpandIcon from "@/components/icons/ToggleExpandIcon";

export default function MoreExperience({ children }) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="group flex w-full items-center justify-center rounded-xl border-2 px-4 py-2 font-semibold terminal:w-[160px] terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200 sm:w-[255px]"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <div className="flex w-[120px] justify-between">
            {isShowMore ? "Show less" : "Show more"}
            <ToggleExpandIcon isOpen={isShowMore} />
          </div>
        </button>
      </div>
      <div
        className={
          "grid transition-all duration-300 ease-in-out " +
          (isShowMore
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="row-[1/span_2] overflow-hidden">
          <div className="mt-7 flex flex-col gap-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
