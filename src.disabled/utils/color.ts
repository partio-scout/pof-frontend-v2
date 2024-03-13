/**
 * Change hex value to `rgba()`
 * @param hex The hex color as string
 * @param lum The alpha value
 * @returns The value as `rgba()`
 */
export const hexToRgba = (hex: string | undefined, alpha: number): string => {
  if (!hex) return '';
  // validate hex string
  let _hex = hex.replace(/[^0-9a-f]/gi, '');
  if (_hex.length < 6) {
    _hex = _hex[0] + _hex[0] + _hex[1] + _hex[1] + _hex[2] + _hex[2];
  }
  alpha = alpha || 1;

  // convert to decimal
  const rgb: number[] = [];

  for (let i = 0; i < 3; i++) {
    rgb[i] = parseInt(_hex.substr(i * 2, 2), 16);
  }

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
};
