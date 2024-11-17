export function getImageDimensions(
  aspectRatio: "landscape" | "portrait" | "square"
) {
  switch (aspectRatio) {
    case "landscape":
      return { width: 1600, height: 900 }; // 16:9 ratio
    case "portrait":
      return { width: 900, height: 1600 }; // 9:16 ratio
    case "square":
      return { width: 1000, height: 1000 }; // 1:1 ratio
    default:
      return { width: 1000, height: 1000 }; // default to square
  }
}
