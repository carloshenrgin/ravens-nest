function sanitizeFormData(formData) {
  const sanitizedData = {};
  for (const [key, value] of Object.entries(formData)) {
    if (value !== null && value !== "") {
      if (
        Array.isArray(value) &&
        value.every((item) => typeof item === "string")
      ) {
        sanitizedData[key] = value.filter((item) => item.trim().length > 0);
      } else {
        sanitizedData[key] = value;
      }
    }
  }
  return sanitizedData;
}

module.exports = sanitizeFormData;
