import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useContext, useState, useEffect, useCallback } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import { 
  LARGE_SCREEN, 
  MID_SCREEN, 
  LARGE_SCREEN_MOVIES, 
  MID_SCREEN_MOVIES, 
  SMALL_SCREEN_MOVIES, 
  LARGE_SCREEN_ADD_MOVIES,
  MID_SCREEN_ADD_MOVIES,
} from "../../utils/constants"


function Movies ({ movies }) {
  const [moviesToShow, setMoviesToShow] = useState(12)
  const { messageMovies, messageSavedMovies } = useContext(GeneralContext)
  const location = useLocation()
  const message = location.pathname === "/movies" ? messageMovies : messageSavedMovies
  const {screenWidth} = useScreenWidth()

  useEffect(() => {
    let moviesInitialToShow = LARGE_SCREEN_MOVIES

    if (screenWidth >= LARGE_SCREEN) {
      moviesInitialToShow = LARGE_SCREEN_MOVIES
    } else if (screenWidth >= MID_SCREEN) {
      moviesInitialToShow = MID_SCREEN_MOVIES
    } else {
      moviesInitialToShow = SMALL_SCREEN_MOVIES
    }

    setTimeout(() => {
      setMoviesToShow(moviesInitialToShow)
    }, 0)
  }, [screenWidth, movies]);

  const handleAddMoreMovies = useCallback(() => {
    if (screenWidth >= LARGE_SCREEN) {
      setMoviesToShow((prevState) => prevState + LARGE_SCREEN_ADD_MOVIES)
    } else {
      setMoviesToShow((prevState) => prevState + MID_SCREEN_ADD_MOVIES)}
    
  }, [screenWidth, setMoviesToShow])
  

  return (
    <section className="movies">
      {movies.length === 0 && <h2 className="movies__title">{message}</h2>}
      <MoviesCardList
        movies={movies}
        moviesNumber={moviesToShow}
      />
      {movies.length > moviesToShow && <button className="movies__more-button" onClick={handleAddMoreMovies}>More</button>}
    </section>
  )
}

export default Movies;