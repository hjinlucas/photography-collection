export interface Photo {
  id: string;
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
  size?: "small" | "regular"; // Only applicable for landscape
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80",
    alt: "A cat laying on top of a sidewalk next to the ocean",
    orientation: "portrait",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80",
    alt: "A man standing on a beach next to the ocean",
    orientation: "landscape",
    size: "small",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "A person standing in front of a rock formation",
    orientation: "landscape",
    size: "regular",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "A snow covered mountain with trees on the side",
    orientation: "landscape",
    size: "regular",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "A branch of a plant floating in a body of water",
    orientation: "portrait",
  },
  // Add more photos as needed...
];
