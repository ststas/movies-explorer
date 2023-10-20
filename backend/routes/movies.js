const router = require('express').Router();
const { validateMovieCreation, validateMovieRemoval } = require('../middlewares/validation');
const { getMovies, saveMovie, removeMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateMovieCreation(), saveMovie);
router.delete('/:movieId', validateMovieRemoval(), removeMovie);
module.exports = router;
