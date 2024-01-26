const loggerMiddleware = (req, res, next) => {
  const logRequestStart = () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  };

  const logRequestEnd = () => {
    console.log(`[${new Date().toISOString()}] Response Status: ${res.statusCode} `);
  };

  const logError = (err) => {
    console.error(`[${new Date().toISOString()}] Error: ${err.message}`);
  };

  logRequestStart();

  res.on('finish', () => {
    logRequestEnd();
  });

  res.on('close', () => {
    logRequestEnd();
  });

  // Log errors
  res.on('error', (err) => {
    logError(err);
  });

  next();
};

module.exports = loggerMiddleware;
