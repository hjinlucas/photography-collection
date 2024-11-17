// components/PhotoGrid.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { photos, Photo } from "../data/photos";

function PhotoItem({ photo }: { photo: Photo }) {
  let sizeClass = "";
  if (photo.orientation === "portrait") {
    sizeClass = "w-1/2 md:w-1/4";
  } else if (photo.orientation === "landscape") {
    sizeClass = photo.size === "small" ? "w-1/2 md:w-1/4" : "w-full md:w-1/2";
  }

  return (
    <div className={`p-1 ${sizeClass}`}>
      <div className="overflow-hidden h-full w-full">
        <a href={photo.src} data-fancybox="gallery">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1000}
            height={1000}
            className="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}

export default function PhotoGrid() {
  useEffect(() => {
    const photoElements = document.querySelectorAll("img");
    let delay = 0;
    photoElements.forEach((photo) => {
      setTimeout(() => {
        photo.classList.remove("opacity-0");
        photo.classList.add("opacity-100");
      }, delay);
      delay += 100;
    });
  }, []);

  return (
    <div className="flex flex-wrap w-full">
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
