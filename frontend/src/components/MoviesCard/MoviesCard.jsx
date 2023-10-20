import { BASE_BEATFILM_URL } from "../../utils/constants";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GeneralContext } from "../../contexts/GeneralContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard ({movie}) {
  const location = useLocation();
  const { savedMovies, handleSaveMovie, handleRemoveMovie } = useContext(GeneralContext);
  const currentUser = useContext(CurrentUserContext);

  const buttonSelector = location.pathname === "/saved-movies" ? "movies-card__remove-button" : "movies-card__save-button";
  const hours = Math.floor(movie.duration/60);
  const min = Math.floor(movie.duration % 60);

  const imgURL = movie.owner ? movie.image : BASE_BEATFILM_URL + movie.image.url
  const isMovieSaved = savedMovies.find((el) => el.movieId === movie.id ? movie.id : movie.movieId);
  const saveButtonActive = isMovieSaved ? "movies-card__save-button_active" : ""
  const movieToDelete = location.pathname === "/saved-movies" ? movie : isMovieSaved

  function handleSave() {
    handleSaveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      image: BASE_BEATFILM_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: BASE_BEATFILM_URL + movie.image.formats.thumbnail.url,
      owner: currentUser._id,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  }

  function handleRemove () {
    handleRemoveMovie(movieToDelete)
  }

  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__name">{movie.nameEN}</h2>
          <p className="movies-card__duration">{hours !== 0 ? `${hours}ч ${min}м`: `${min}м`}</p>
        </div>
        <button 
          className={`movies-card__button ${buttonSelector} ${saveButtonActive}`} 
          onClick={!isMovieSaved ? handleSave : handleRemove}
          >
        </button>
      </div>
      <a href={movie.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer noopener">
        <img src={imgURL} alt={movie.nameRU} className="movies-card__image" />
      </a>
    </article>
  )
}

export default MoviesCard;