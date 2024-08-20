// To change the background
export function updateCSSVariables(projectName) {
  const root = document.documentElement; // Get the root element
  switch (projectName) {
    case "Color Palette Generator":
      root.style.setProperty("--color-bg1", "rgb(240, 229, 228)"); // White
      root.style.setProperty("--color-bg2", "rgb(240, 42, 205)"); // Purple
      root.style.setProperty("--color1", "0, 142, 230"); // Blue
      root.style.setProperty("--color2", "232, 226, 0"); // Yellow
      root.style.setProperty("--color3", "230, 1, 5"); // Red
      root.style.setProperty("--color4", "25, 229, 1"); // Green
      root.style.setProperty("--color5", "230, 0, 223"); // Purple
      break;
    case "Weather Forecast":
      root.style.setProperty("--color-bg1", "rgb(30, 144, 255)"); // Blue
      root.style.setProperty("--color-bg2", "rgb(255, 228, 196)"); // Beige
      root.style.setProperty("--color1", "19, 20, 20"); // Black
      root.style.setProperty("--color2", "10, 102, 240"); // Blue
      root.style.setProperty("--color3", "132, 255, 0"); // Yeloow
      root.style.setProperty("--color4", "25, 229, 1"); // Green
      root.style.setProperty("--color5", "230, 0, 223"); // Purple
      break;
    case "Goofy Glory":
      root.style.setProperty("--color-bg1", "rgb(42, 35, 53)"); // Brown
      root.style.setProperty("--color-bg2", "rgb(151, 109, 69)"); // Almost Black
      root.style.setProperty("--color1", "27, 134, 214"); // Blue
      root.style.setProperty("--color2", "230, 209, 189"); // Beige
      root.style.setProperty("--color3", "255, 187, 0"); // Orange
      root.style.setProperty("--color4", "221, 255, 0"); // Yellow
      root.style.setProperty("--color5", "0, 119, 255"); // Other Blue
      break;
    case "Rabbit Hole":
      root.style.setProperty("--color-bg1", "rgb(41, 187, 201)"); // Blueish
      root.style.setProperty("--color-bg2", "rgb(58, 150, 158)"); // Darker Blue
      root.style.setProperty("--color1", "15, 255, 7"); // Green
      root.style.setProperty("--color2", "60, 214, 64"); // Another Green
      root.style.setProperty("--color3", "225, 240, 230"); // White
      root.style.setProperty("--color4", "79, 79, 79"); // Black
      root.style.setProperty("--color5", "214, 133, 67"); // Light Brown
      break;
    case "Nicolabs":
      root.style.setProperty("--color-bg1", "rgb(74, 102, 145)"); // Dark Blue
      root.style.setProperty("--color-bg2", "rgb(159, 206, 245)"); // Blue
      root.style.setProperty("--color1", "0, 177, 255"); // Blue
      root.style.setProperty("--color2", "2, 88, 179"); // Dark Blue
      root.style.setProperty("--color3", "255, 255, 255"); // White
      root.style.setProperty("--color4", "252, 3, 226"); // Light Purple
      root.style.setProperty("--color5", "168, 3, 163"); // Purple
      break;
    case "Plantae":
      root.style.setProperty("--color-bg1", "rgb(99, 234, 113)"); // Darker Green
      root.style.setProperty("--color-bg2", "rgb(99, 235, 157)"); // Green
      root.style.setProperty("--color1", "218, 141, 235"); // Purple Pastel
      root.style.setProperty("--color2", "215, 68, 235"); // Purple
      root.style.setProperty("--color3", "238, 185, 218"); // Almost white
      root.style.setProperty("--color4", "235, 77, 80"); // Redish brown
      root.style.setProperty("--color5", "9, 183, 235"); // Blue
      break;
    default:
      root.style.setProperty("--color-bg1", "rgb(88, 16, 124)");
      root.style.setProperty("--color-bg2", "rgb(11, 23, 75)");
      break;
  }
}
