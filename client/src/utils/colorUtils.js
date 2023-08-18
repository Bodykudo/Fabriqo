export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace('#', '');

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? 'black' : 'white';
};

const isColorTooLight = (color) => {
  // Convert color to RGB components
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Calculate luminance using the relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Check if the luminance is above a certain threshold (0.5)
  return luminance > 0.7;
};

export const adjustColor = (color) => {
  if (isColorTooLight(color)) {
    return '#000000'; // Return black for light colors
  } else {
    return color; // Return the input color as is
  }
};

export const hexToRgba = (hex, opacity) => {
  // Remove the '#' symbol if it's included
  hex = hex.replace('#', '');

  // Convert the HEX values to decimal
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Ensure opacity is within the valid range (0 to 1)
  const validOpacity = Math.min(Math.max(opacity, 0), 1);

  // Create the RGBA string
  const rgba = `rgba(${r}, ${g}, ${b}, ${validOpacity})`;

  return rgba;
};
