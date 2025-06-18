"use client";;
import { use } from "react";

import { photos } from "@/utils/photos";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Photo(props) {
  const params = use(props.params);
  const router = useRouter();

  const photo = photos.find(({ id }) => id === params.id);

  const onClickHandler = () => {
    router.push("/photos", { scroll: false });
  };

  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-gray-950/90 p-10 backdrop-blur"
      onClick={onClickHandler}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        className="max-h-full object-contain"
      />
    </div>
  );
}
