const Movie = require('../models/movie');

const AccessDeniedError = require('../errors/AccessDeniedError');
const { ResponseMessages } = require('../utils/constants');

const { accessDenied } = ResponseMessages[403].movies;

module.exports.getMovies = (req, res, next) => Movie.find({ owner: req.user._id })
  .populate('owner')
  .then((movies) => res.status(200).send(movies))
  .catch((err) => next(err));

module.exports.saveMovie = (req, res, next) => {
  const { body, user } = req;
  Movie.create({ ...body, owner: user._id })
    .then((savedMovie) => res.status(201).send(savedMovie))
    .catch((err) => next(err));
};

module.exports.removeMovie = (req, res, next) => {
  const { movieId } = req.params;
  return Movie.findById(movieId)
    .orFail()
    .then((removedMovie) => {
      if (req.user._id !== String(removedMovie.owner._id)) {
        return next(new AccessDeniedError(accessDenied));
      }
      return removedMovie.deleteOne()
        .then((movie) => res.status(200).send(movie));
    })
    .catch((err) => next(err));
};
