export const isHex = (hex) => {
  return new RegExp(/^#?[0-9A-F]{6}$/i).test(hex);
};

export const parseHex = (hex) => {
  if (!isHex(hex))
    return false;

  return hex.replace("#", "").toUpperCase();
};

export const hexToRGB = (hex) => {
  hex = parseHex(hex);
  
  if (!hex)
    return false;

  const RGB = {
    R: parseInt(hex[0] + hex[1], 16),
    G: parseInt(hex[2] + hex[3], 16),
    B: parseInt(hex[4] + hex[5], 16),
  };

  return RGB;
};

export const luminosity = (hex) => {
  const RGB = hexToRGB(hex);

  if (!RGB)
    return false;

  const factor = {
    R: 0.2126,
    G: 0.7152,
    B: 0.0772,
  };

  RGB.R = RGB.R * factor.R;
  RGB.G = RGB.G * factor.G;
  RGB.B = RGB.B * factor.B;

  const total = RGB.R + RGB.G + RGB.B;
  const value = parseFloat((total / 255).toFixed(2)); 

  return { ...RGB, value };
};
