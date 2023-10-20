const NotFoundError = require('../errors/NotFoundError');
const { ResponseMessages } = require('../utils/constants');

const { notFound } = ResponseMessages[404].page;

function handleRouteError(err, res, next) {
  return next(new NotFoundError(notFound));
}

module.exports = {
  handleRouteError,
};
