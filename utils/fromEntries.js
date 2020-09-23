/**
 * Object.fromEntries polyfill
 * @param {Array} arr[key, value]
 * @return {Object} { key: value }
 * */
function fromEntries(arr) {
  if (Object.fromEntries) {
    return Object.fromEntries(arr);
  }
  return arr.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
}

module.exports = fromEntries;