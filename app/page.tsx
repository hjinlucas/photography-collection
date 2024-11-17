"use client";

import PhotoGrid from "@/components/PhotoGrid";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fade in effect
    const body = document.querySelector("body");
    body?.classList.remove("opacity-0");
    body?.classList.add("opacity-100");

    const photos = document.querySelectorAll("img");
    let delay = 0;
    photos.forEach((photo) => {
      setTimeout(() => {
        photo.classList.remove("opacity-0");
        photo.classList.add("opacity-100");
      }, delay);
      delay += 100;
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl pt-10 pb-8 font-bold">COLLECTION</h1>
      <section className="text-neutral-700">
        <div className="container w-full">
          <div className="flex flex-wrap w-full">
            <PhotoGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
