/**
 *
 * @param {number} ratio
 * @param {number} weight
 * @param {number} volume
 * @param {'volume'|'weight'|'ratio'} type
 * @returns
 */
export function calculate(
  ratio: number,
  weight: number,
  volume: number,
  type: 'volume' | 'weight' | 'ratio'
) {
  if (type === "volume") {
    return Math.round(weight * ratio);
  }

  if (type === "weight") {
    return Math.round(volume / ratio * 10) / 10;
  }

  return Math.round(volume / weight * 10) / 10;
};