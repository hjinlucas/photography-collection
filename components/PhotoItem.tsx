// components/PhotoItem.tsx
import Image from "next/image";
import { Photo } from "../data/photos";

interface PhotoItemProps {
  photo: Photo;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
  return (
    <div className="w-full md:w-1/2 p-1">
      <div className="overflow-hidden h-full w-full">
        <a href={photo.src} data-fancybox="gallery">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}
