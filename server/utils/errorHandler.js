function handleBadRequestError(res, message) {
  res.status(400).json({ message });
}

function handleNotFoundError(res, message) {
  res.status(404).json({ message });
}

function handleInternalServerError(res, message) {
  res.status(500).json({ message });
}

function handleError(err, req, res, next) {
  console.error(err);
  if (err.name === "ValidationError") {
    handleBadRequestError(res, err.message);
  } else if (err.name === "CastError" && err.kind === "ObjectId") {
    handleNotFoundError(
      res,
      `${err.modelName ? err.modelName : "Document"} not found`
    );
  } else {
    handleInternalServerError(res, "Internal Server Error");
  }
}

module.exports = {
  handleBadRequestError,
  handleNotFoundError,
  handleInternalServerError,
  handleError,
};
