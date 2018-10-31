export function isRgb(color) {
  return /^#?(?:[a-f0-9]{3}){1,2}$/i.test(color);
}
