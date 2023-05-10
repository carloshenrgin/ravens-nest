function sanitizeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(
      "Argument is not of expected type (Array)",
      "sanitizeArray.js"
    );
  }

  return arr
    .map((element) => {
      if (typeof element !== "string") {
        return element;
      }

      return element.trim();
    })
    .filter(Boolean);
}

module.exports = sanitizeArray;
