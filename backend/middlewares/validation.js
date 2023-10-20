const { Joi, celebrate } = require('celebrate');
const { RegExUrl, RegExPassword } = require('../utils/constants');

module.exports.validateSignUp = () => celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).pattern(RegExPassword),
  }),
});

module.exports.validateSignIn = () => celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).pattern(RegExPassword),
  }),
});

module.exports.validateUserInfo = () => celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.validateMovieCreation = () => celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    image: Joi.string().required().pattern(RegExUrl),
    trailerLink: Joi.string().required().pattern(RegExUrl),
    thumbnail: Joi.string().required().pattern(RegExUrl),
    owner: Joi.string().required().hex().length(24),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validateMovieRemoval = () => celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});
