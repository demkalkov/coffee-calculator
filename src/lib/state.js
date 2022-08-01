/**
 *
 * @param {'volume'|'ratio'|'weight'} type
 * @returns {string}
 */
function getKey(type) {
  return `COFFEE_${type}`;
}

/**
 *
 * @param {number} value
 * @param {'volume'|'ratio'|'weight'} type
 */
export function save(value, type) {
  const key = getKey(type);
  localStorage.setItem(key, isNaN(value) ? undefined : `${value}`);
}

/**
 *
 * @param {'volume'|'ratio'|'weight'} type
 * @param {number} [defaultValue]
 * @returns {number | undefined}
 */
export function get(type, defaultValue) {
  const key = getKey(type);
  const str = localStorage.getItem(key);
  if (!str) {
    return defaultValue;
  }
  const parsed = parseFloat(str);
  return isNaN(parsed) || !isFinite(parsed) ? defaultValue : parsed;
}