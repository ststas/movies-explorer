import { useState, lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Contexts from '../../contexts/Contexts';
import * as auth from '../../utils/MainApi'
import * as movies from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

const GeneralLayout = lazy(() => import('../../layouts/GeneralLayout/GeneralLayout'));
const ServiceLayout = lazy(() => import('../../layouts/ServiceLayout/ServiceLayout'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const SavedMovies = lazy(() => import('../../pages/SavedMoviesPage/SavedMoviesPage'));
const Profile = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App () {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isRequestSuccessful, setIsRequestSuccessful] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [messageMovies, setMessageMovies] = useState("")
  const [messageSavedMovies, setMessageSavedMovies] = useState("")
  const [messageInfo, setMessageInfo] = useState("")
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('saved-movies')) || [])
  const [savedMoviesToShow, setSavedMoviesToShow] = useState(JSON.parse(localStorage.getItem('saved-movies-to-show')) || savedMovies)
  const [isUpdated, setIsUpdated] = useState(false)
  //маршруты
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route element={<GeneralLayout />}>
        <Route index element={<MainPage />} />
        <Route path="movies" element={<ProtectedRoute element={MoviesPage} isLoggedIn={isLoggedIn}/>} />
        <Route path="saved-movies" element={<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn}/>} />
        <Route path="profile" element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn}/>} />
      </Route>
      <Route element={<ServiceLayout />}>
        <Route path="signup" element={<RegistrationPage/>}/>
        <Route path="signin" element={<LoginPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routes);

// универсальные функции открытия попапа, логина и логаута
  function setInfoToolTip (messageInfo, isOpen, isRequestSuccessful) {
    setMessageInfo(messageInfo)
    setIsOpen(isOpen)
    setIsRequestSuccessful(isRequestSuccessful)
  }
  function userSignOut() {
    localStorage.clear()
    setIsLoggedIn(false)
  };
  function userSignIn(res) {
    setIsLoggedIn(true)
    setCurrentUser(res)
  };
// функция регистрации нового пользователя
  function handleRegister (name, email, password, resetForm, navigate) {
    setIsLoading(true)
    auth.register(name, email, password)
    .then((res) => {
      userSignIn(res)
      setInfoToolTip("You've successfully signed up.", true, true)
      navigate('/movies', {replace: true})      
      resetForm()
    })
    .catch(err => {
      setInfoToolTip(`${err === "Error: 409" ? "A user with this email is already existed" : "User registration error."}`, true, false)
      console.error(`User registration error: ${err}`)
    })
    .finally(() => {setIsLoading(false)})
  }
// функция авторизации
  function handleLogin (email, password, resetForm, navigate) {
    setIsLoading(true)
    auth.authorize(email, password)
    .then((res) => {
      userSignIn(res)
      navigate('/movies', {replace: true})
      resetForm()
    })
    .catch(err => {
      setInfoToolTip(`${err === "Error: 400" || err === "Error: 401" ? "Incorrect e-mail or password." : "Couldn't Open Connection To Server."}`, true, false)
      console.error(`User log in error: ${err}`)
    })
    .finally(() => {setIsLoading(false)})
  }
// функция выхода из профиля
  function handleSignOut () {
    setIsLoading(true)
    auth.logout()
    .catch(err => {
      setInfoToolTip("Couldn't open connection to server. To avoid of your personal data leaking, please, clear browsing data.", true, false)
      console.error(`Log out error: ${err}`)})
    .finally(()=> {
      setIsLoading(false)
      userSignOut()
    })
  }
//функция апдейта информации пользователя
  function updateUserInfo(userData) {
    setIsLoading(true)
    return auth.setUserInfo(userData)
    .then((updatedUserData) => {
      setInfoToolTip("Profile has been updated successfully.", true, true)
      setCurrentUser(updatedUserData)})
    .catch(err => {
      setInfoToolTip(`${err === "Error: 409" ? "A user with this email is already existed." : "An error occurred while updating your profile. Please try again."}`, true, false)
      console.error(`Profile update error: ${err}`)
    })
    .finally(() => setIsLoading(false));
  }
// функции проверки наличия токена  
  function  handleTokenCheck() {
    auth.checkToken()
    .then((res) => setCurrentUser(res))
    .catch(err => {
      userSignOut()
      console.error(`Log in error: ${err}`)
    })
  };
  useEffect(() => {
    handleTokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
// функция сохранения фильма
function handleSaveMovie(movie) {
    return movies.saveMovie(movie)
      .then(savedMovie => {
        const updatedMovies = [...savedMovies, savedMovie]

        setSavedMovies(updatedMovies)
        localStorage.setItem('saved-movies', JSON.stringify(updatedMovies))

        setSavedMoviesToShow(updatedMovies)
        localStorage.setItem('saved-movies-to-show', JSON.stringify(updatedMovies))
        
      })
      .catch(err => console.error(err))
      .finally(()=> setIsUpdated(true))
}
// функция удаления фильма
function handleRemoveMovie(movie) {
  return movies.removeMovie(movie._id)
    .then(() => {
      const updatedMovies = savedMovies.filter(el => el._id !== movie._id)

      setSavedMovies(updatedMovies)
      localStorage.setItem('saved-movies', JSON.stringify(updatedMovies))
      setSavedMoviesToShow(savedMoviesToShow.filter(el => el._id !== movie._id))
      
      localStorage.setItem('saved-movies-to-show', JSON.stringify(updatedMovies))
    })
    .catch(err => console.error(err))
    .finally(()=> setIsUpdated(true))
}
// загрузка данных пользователя с сервера
  useEffect(() => { 
    if (isLoggedIn) {
      Promise.all([auth.getUserInfo(), movies.getSavedMovies()])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData)
        setSavedMovies(moviesData)
        localStorage.setItem('saved-movies', JSON.stringify(moviesData))
      })
      .catch(err => (console.error(`Server data loading error: ${err}`)))
  }},[isLoggedIn])

  return ( 
    <Suspense fallback={<Preloader/>}>
      <Contexts 
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        signUp={handleRegister}
        signIn={handleLogin}
        signOut={handleSignOut}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messageMovies={messageMovies}
        setMessageMovies={setMessageMovies}
        messageSavedMovies={messageSavedMovies}
        setMessageSavedMovies={setMessageSavedMovies}
        messageInfo={messageInfo}
        setMessageInfo={setMessageInfo}
        isRequestSuccessful={isRequestSuccessful}
        setIsRequestSuccessful={setIsRequestSuccessful}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setInfoToolTip={setInfoToolTip}
        updateUserInfo={updateUserInfo}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        handleSaveMovie={handleSaveMovie}
        handleRemoveMovie={handleRemoveMovie}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
        savedMoviesToShow={savedMoviesToShow}
        setSavedMoviesToShow={setSavedMoviesToShow}
      >
        <RouterProvider router={router} />
      </Contexts>
    </Suspense>
)}

export default App;