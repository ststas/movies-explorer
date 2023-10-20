import { CurrentUserContext } from './CurrentUserContext';
import { GeneralContext } from './GeneralContext';

export default function Contexts ({
  children,
  currentUser,
  isLoggedIn,
  signUp,
  signIn,
  signOut,
  isOpen,
  setIsOpen,
  messageMovies,
  setMessageMovies,
  messageSavedMovies,
  setMessageSavedMovies,
  messageInfo,
  setMessageInfo,
  isRequestSuccessful,
  setIsRequestSuccessful,
  isLoading,
  setIsLoading,
  setInfoToolTip,
  updateUserInfo,
  savedMovies,
  setSavedMovies,
  handleSaveMovie,
  handleRemoveMovie,
  isSearched,
  setIsSearched,
  savedMoviesToShow,
  setSavedMoviesToShow,
  isUpdated,
  setIsUpdated,
})  {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <GeneralContext.Provider
        value={{
          currentUser,
          isLoggedIn,
          signUp,
          signIn,
          signOut,
          isOpen,
          setIsOpen,
          messageMovies,
          setMessageMovies,
          messageSavedMovies,
          setMessageSavedMovies,
          messageInfo,
          setMessageInfo,
          isRequestSuccessful,
          setIsRequestSuccessful,
          isLoading,
          setIsLoading,
          setInfoToolTip,
          updateUserInfo,
          savedMovies,
          setSavedMovies,
          handleSaveMovie,
          handleRemoveMovie,
          isSearched,
          setIsSearched,
          savedMoviesToShow,
          setSavedMoviesToShow,
          isUpdated,
          setIsUpdated,
        }}
      >
      {children}
      </GeneralContext.Provider>
    </CurrentUserContext.Provider> 
  )
}