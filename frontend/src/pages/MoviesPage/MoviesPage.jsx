import Movies from "../../components/Movies/Movies";
import Preloader from '../../components/Preloader/Preloader';
import SearchFormMovies from "../../components/SearchForms/SearchFormMovies";
import InfoTooltip from "../../components/InfoToolTip/InfoTooltip";
import * as movies from '../../utils/MoviesApi';
import compareSearch from "../../utils/CompareSearch";

import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect, useState, useCallback } from "react";

function MoviesPage () {
  const { setMessageMovies, setIsUpdated, setIsLoading } = useContext(GeneralContext);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(JSON.parse(localStorage.getItem('movies-to-show')) || [])
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('short-films')) || false)
  
  function filterMovies (isChecked, dataFiltered) {
    setMoviesToShow(
      isChecked 
      ? dataFiltered.filter(el => (el.duration <= 40))
      : dataFiltered)
  }
  
  function handleFilteredMovies (data, query) {
    const dataFiltered = data.filter(el => (
      compareSearch(el.nameRU, query) || compareSearch(el.nameEN, query)
      ));
    filterMovies (isChecked, dataFiltered)
    localStorage.setItem('movies-to-show', JSON.stringify(dataFiltered))
    if(dataFiltered.length === 0) {
      setMessageMovies("Ничего не найдено.")
    }
  }

  function findMovies (query) {
    const data = JSON.parse(localStorage.getItem('movies'))
    if(!data) {
      setIsLoading(true)
      setIsMoviesLoading(true)
      return movies.getMovies()
      .then(res => localStorage.setItem('movies', JSON.stringify(res)))
      .then(() => {
        const data = JSON.parse(localStorage.getItem('movies'))
        handleFilteredMovies(data, query)
      })
      .catch(err => {
        setMessageMovies("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.")
        console.error(err)
      })
      .finally(() => {
        setIsMoviesLoading(false)
        setIsLoading(false)
      })
    }
    handleFilteredMovies(data, query)
  }

  const setFilterChecked = useCallback((event)=> {
    setIsChecked(event.target.checked)
    localStorage.setItem('short-films', event.target.checked)
  },[setIsChecked])

  useEffect(() => {
    const moviesFiltered = JSON.parse(localStorage.getItem('movies-to-show'))
    if(moviesFiltered) {
      filterMovies (isChecked, moviesFiltered)
    }
    return
  }, [isChecked])

  useEffect(() => {
    setIsUpdated(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <main>
      <InfoTooltip/>
      <section className="movies-page">
        <SearchFormMovies
          search={findMovies}
          checked={isChecked}
          setChecked={setFilterChecked}
        />
        {isMoviesLoading 
          ? 
          <Preloader/> 
          : 
          <Movies
            movies={moviesToShow}
          />}
      </section>
    </main>
  )
}

export default MoviesPage;