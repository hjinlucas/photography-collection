// components/PhotoItem.tsx
import Image from "next/image";
import { Photo } from "../data/photos";

interface PhotoItemProps {
  photo: Photo;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
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
