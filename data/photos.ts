export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "A person standing in front of a rock formation",
    width: 870,
    height: 580,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80",
    alt: "A cat laying on top of a sidewalk next to the ocean",
    width: 1963,
    height: 1308,
  },
  // Add more photos here...
];
