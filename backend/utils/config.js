const {
  NODE_ENV,
  PORT = 3000,
  URI,
  JWT_SECRET,
} = process.env;

module.exports = {
  PORT,
  URI,
  NODE_ENV,
  JWT_SECRET,
};
