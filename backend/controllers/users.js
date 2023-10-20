const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const WrongCredentialsError = require('../errors/WrongCredentialsError');
const EmailIsRegisteredError = require('../errors/EmailIsRegisteredError');
const { ResponseMessages } = require('../utils/constants');

const { wrongEmailPassword, invalidId } = ResponseMessages[401].users;
const { emailIsTaken } = ResponseMessages[409].users;
const { loggedOut } = ResponseMessages[200].users;

const { NODE_ENV, JWT_SECRET } = require('../utils/config');

module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  return bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name })
      .then((user) => {
        const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'my-very-secret-key', {
          expiresIn: '7d',
        });
        res.cookie('jwt', token, {
          httpOnly: true,
          sameSite: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(201).send({ email: user.email, name: user.name, _id: user._id });
      }))
    .catch((err) => {
      if (err.code === 11000) {
        return next(new EmailIsRegisteredError(emailIsTaken));
      } return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return next(new WrongCredentialsError(wrongEmailPassword));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return next(new WrongCredentialsError(wrongEmailPassword));
          }
          const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'my-very-secret-key', {
            expiresIn: '7d',
          });
          res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });
          return res.status(200).json({ _id: user._id });
        });
    })
    .catch((err) => next(err));
};

module.exports.logout = (req, res) => {
  res.clearCookie('jwt');
  return res.status(200).send({ message: loggedOut });
};

module.exports.getUserInfo = (req, res, next) => {
  const userId = req.user._id;
  if (userId.length === 24) {
    return User.findById(userId)
      .orFail()
      .then((user) => res.status(200).send(user))
      .catch((err) => next(err));
  } return next(new WrongCredentialsError(invalidId));
};

module.exports.updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  const userId = req.user._id;
  return User.findByIdAndUpdate(userId, { name, email }, { new: true, runValidators: true })
    .orFail()
    .then((updatedUser) => res.status(200).send(updatedUser))
    .catch((err) => {
      if (err.code === 11000) {
        return next(new EmailIsRegisteredError(emailIsTaken));
      } return next(err);
    });
};
