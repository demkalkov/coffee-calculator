/**
 *
 * @param {number} ratio
 * @param {number} weight
 * @param {number} volume
 * @param {'volume'|'weight'|'ratio'} type
 * @returns
 */
export function calculate(ratio, weight, volume, type) {
  if (type === "volume") {
    return Math.round(weight * ratio * 100) / 100;
  }

  if (type === "weight") {
    return Math.round(volume / ratio * 100) / 100;
  }

  return Math.round(volume / weight * 100) / 100;
};