const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { handleErrors } = require('./middlewares/handleErrors');
require('dotenv').config();
const Router = require('./routes');
const { requestRateLimiter } = require('./middlewares/requestRateLimiter');
const { NODE_ENV, PORT, URI } = require('./utils/config');

mongoose.connect(NODE_ENV === 'production' ? URI : 'mongodb://127.0.0.1:27017/bitfilmsdb');

const app = express();
app.use(cors({ origin: ['https://movie.nomoredomainsicu.ru', 'http://movie.nomoredomainsicu.ru'], credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(requestLogger);
app.use(requestRateLimiter);
app.use('/', Router);
app.use(errorLogger);
app.use(errors());
app.use(handleErrors);
app.listen(PORT);
