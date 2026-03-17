import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
