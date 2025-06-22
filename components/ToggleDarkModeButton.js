import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import ComputerIcon from "./icons/ComputerIcon";
import MoonIcon from "./icons/MoonIcon";
import PhoneIcon from "./icons/PhoneIcon";
import SunIcon from "./icons/SunIcon";
import TerminalIcon from "./icons/TerminalIcon";

const themeIcons = {
  Light: <SunIcon />,
  Dark: <MoonIcon />,
  System: (
    <>
      <ComputerIcon />
      <PhoneIcon />
    </>
  ),
  Terminal: <TerminalIcon />,
};

export default function ToggleDarkModeButton() {
  const rootRef = useRef();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const handler = (event) => {
    if (!rootRef.current.contains(event.target)) {
      setIsThemeMenuOpen(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isThemeMenuOpen) {
      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isThemeMenuOpen]);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  return (
    mounted && (
      <div
        className="relative z-40 inline-block rounded-full print:hidden"
        ref={rootRef}
      >
        <button
          className={
            "rounded-full p-3 transition [-webkit-tap-highlight-color:transparent] " +
            (["Light", "Dark"].includes(theme) ? "text-sky-600" : "")
          }
          onClick={onClickHandler}
          aria-label="Change theme"
        >
          {
            themeIcons[
              resolvedTheme.charAt(0).toUpperCase() + resolvedTheme.slice(1)
            ]
          }
        </button>
        <div
          className={
            "transition-opacity " +
            (isThemeMenuOpen ? "opacity-100" : "opacity-0")
          }
        >
          {isThemeMenuOpen && (
            <ul className="absolute right-0 z-40 mt-2 flex flex-col gap-1 overflow-hidden rounded-xl bg-slate-200 text-center terminal:rounded-none terminal:bg-black terminal:text-orange-800 dark:bg-slate-800">
              {Object.keys(themeIcons)
                .filter((themeIcon) => themeIcon !== "Terminal")
                .map((themeName) => (
                  <li key={themeName}>
                    <button
                      aria-label={themeName}
                      className={
                        "flex w-full items-center gap-3 rounded-full p-3 [-webkit-tap-highlight-color:transparent] hover:terminal:text-orange-500 " +
                        (themeName.toLowerCase() === theme
                          ? "text-sky-600 terminal:text-yellow-400"
                          : "")
                      }
                      onClick={() => {
                        setTheme(themeName.toLowerCase());
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <div>{themeIcons[themeName]}</div>
                      <div>{themeName}</div>
                      {themeName.toLowerCase() === theme && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-sky-600 terminal:text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    )
  );
}
