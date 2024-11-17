// components/PhotoGrid.tsx
"use client";

import { useEffect } from "react";
import { photos } from "../data/photos";
import PhotoItem from "./PhotoItem";

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
      <div className="flex w-full md:w-1/2 flex-wrap">
        {photos.slice(0, 4).map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex w-full md:w-1/2 flex-wrap">
        {photos.slice(4, 8).map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
