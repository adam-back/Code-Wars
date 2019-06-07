/**
 * Flatten an array of arbitrarily nested arrays of integers into a flat array
 * of integers.
 * @example
 * flatten([[1,2,[3]],4]);
 * // returns [1,2,3,4]
 * @param {Array.<number[]>} [nestedArray=[]]
 * @returns {Array.<number>}
 */
const flatten = (nestedArray=[]) => {
  // 1. Stringify the input array
  // 2. Replace the brackets with empty strings
  // 3. Wrap the raw values with new brackets for single array
  // 4. Parse the stringified array into a real array and return
  return JSON.parse(`[${JSON.stringify(nestedArray).replace(/\[|\]/g, '')}]`);
};
