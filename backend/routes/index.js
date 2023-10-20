const router = require('express').Router();
const { handleRouteError } = require('../middlewares/handleRouteError');
const { validateSignUp, validateSignIn } = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const { login, logout, createUser } = require('../controllers/users');

const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.post('/signup', validateSignUp(), createUser);
router.post('/signin', validateSignIn(), login);
router.delete('/signout', auth, logout);

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);

router.all('*', handleRouteError);

module.exports = router;
