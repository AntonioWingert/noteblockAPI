const errorHandler = (err, _req, res, _next) => {

  const { status, message } = err;

  if (status) return res.status(status).json({ message });

  return res.status(500).json({ message });
};

module.exports = errorHandler;