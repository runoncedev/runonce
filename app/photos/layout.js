import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { photos } from "@/utils/photos";

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Photos</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main>
        <div className="mx-auto max-w-(--breakpoint-md) px-4">
          <h1 className="my-4 text-4xl font-extrabold tracking-tight">
            Amateur photography
          </h1>
        </div>
        <div className="mx-auto mb-8 mt-0 grid max-w-(--breakpoint-md) gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
          {photos.map(({ id, src, alt, priority }) => (
            <Link
              key={id}
              href={"/photos/" + id}
              className="cursor-zoom-in overflow-hidden rounded-lg ring-4 ring-slate-900 transition-all first:col-span-2 first:row-span-2 hover:ring-slate-700"
            >
              <Image
                priority={priority}
                src={src}
                alt={alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full"
                placeholder="blur"
              />
            </Link>
          ))}
        </div>
        {children}
      </main>
    </>
  );
}
