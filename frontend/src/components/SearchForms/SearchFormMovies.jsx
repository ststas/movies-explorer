import Input from "../Reusable/Input/Input"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import useFormValidation from '../../hooks/useFormValidation'
import { GeneralContext } from "../../contexts/GeneralContext";
import { useState, useEffect, useContext } from "react"

function SearchFormMovies ({search, checked, setChecked}) {
  const {values, errors, handleChange }  = useFormValidation()
  const {movie} = values
  const [movieValue, setMovieValue] = useState(localStorage.getItem('movieInputValue') || "")
  const { isLoading } = useContext(GeneralContext)

  function handleSubmit (event) {
    event.preventDefault()
    if(!isLoading) {
      if(movie) {
        localStorage.setItem('movieInputValue', movie)
        search(movie)
      }
    }
  }

  useEffect(() => {
    if(movie) {
      localStorage.setItem('movieInputValue', movie)
    }
    if(errors.movie) {
      localStorage.removeItem('movieInputValue')
      setMovieValue("")
    }
  },[movie, errors.movie])

  return (
    <section className="search">
      <div className="search__container">
        <form name="search-form" className="search__form" noValidate onSubmit={handleSubmit}>
          <Input
            type={'text'}
            name={'movie'}
            id={'movie'}
            placeHolder={'Movie'}
            inputClassName={'search__input'}
            required={true}
            minLength={'1'}
            value={movie || movieValue}
            onChange={handleChange}
          />
          <button type="submit" className={`search__submit-button ${!isLoading ? "" : "search__submit-button_disabled"}`}></button>
        </form>
        <span className={`search__error ${errors.movie && `search__error_visible`}`}>{errors.movie}</span>
      </div>
      <FilterCheckbox 
        labelName={'Short movies'}
        filterChecked={checked}
        setFilterChecked={setChecked}
      />
    </section>
  )
}

export default SearchFormMovies;