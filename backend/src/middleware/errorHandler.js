export function notFoundHandler(_req, res) {
  res.status(404).json({ error: "Route not found." });
}

export function errorHandler(err, _req, res, _next) {
  console.error("[error]", err?.message || err);
  const status = Number(err?.status);
  const safeStatus = Number.isInteger(status) && status >= 400 && status < 500 ? status : 500;
  const message = safeStatus < 500 && err?.message ? err.message : "Internal server error.";
  res.status(safeStatus).json({ error: message });
}
