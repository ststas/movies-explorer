# PROJECT MOVIES EXPLORER

## Description & Functionality
* Movies Explorer - is a web application providing a search & save movies service (movies database is provided by BeatFilm). Frontend part is developed using React.js. Backend part is based on Express.js.
* Movies can be searched both English & Russian languages and filtered as "short-movies"/non "short-movies" on "Movies" page.
* Liked (saved) movies are displayed on "Liked Movies" page. There are "Searching" & "Filter" features available as well on this page.
* User's Name & E-mail can be updated via Profile page.
* To sign up user has to provide name/e-mail/password at "Sign up" page.
* To log in user has to provide e-mail/password at "Log in" page.
* Main page contains general info about project & techs applied.

## Stack & Tools
* Node.js, Express, React.js, HTML, CSS, REST API, JWT. 

## My goal
* improve skills in web app development and deployment, including frontend and backend development with React and Express, handling REST APIs, JWT, and working with Mongoose and MongoDB.
* enhance application debugging.
* improve skills in launching virtual machines (VMs) and server configuring incl. NGINX setup, domains attachment, SSL certificates issuance.

## To run
* download repository and install dependencies
* to launch on local machine: 
  * please reassgin PORT on backend to 3001 and turn off the CORS (see app.js)
  * please reassign BASE_URL (auth.js) & apiUrl (api.js) on frontend as `http://127.0.0.1:3000`
* to launch on a server, please use your own values for these variables
* use `NPM START` to run frontend part
* use `NPM START` to run backend part
* please SIGN UP to explore the app. You can use fictional email & password to authorize.

## Frontend
* https://movie.nomoredomainsicu.ru/
## Backend
* https://api.movie.nomoredomainsicu.ru/

### Stanislav Zaitsev х Yandex Practicum 


# ПРОЕКТ MOVIES EXPLORER

## Описание и функциональность
* Приложение Movies Explorer представляет сервис по поиску фильмов и добавлению понравившихся фильмов в избранное. Пользовательская часть написана на React.js, серверная на Express.js.
* Поиск фильмов происходит на странице "Фильмы" и может быть осуществлен на двух языках (английском и русском), так же к найденным фильмам можно применить фильтр "короткометражки".
* Избранные фильмы находятся на странице "Сохраненные фильмы". Также доступен поиск и фильтр "короткометражки".
* Пользователь может обновить свои данные (имя и email) на странице "Аккаунт".
* Для регистрации нового пользователя необходимо ввести Имя, Электронную почту, Пароль на странице Регистрации.
* Для авторизации пользователя необходимо ввести Электронную почту и Пароль на странице Авторизации.
* Главная страница содержит основную информацию о проекте и примененных технологиях.

## Стек и инструменты
* Node.js, Express, React.js, HTML, CSS, REST API, JWT. 

## Цель
* прокачать навыки по разработки фронт- и бэкенда web приложения с использованием React.js и Express.
* прокачать навыки в настройке ВМ и деплое проекта
* прокачать навыки в настройке сервера и отлаживания работы приложения на сервере, в том числе настройке nginx-сервера, привязке доменов и выдаче SSL-сертификатов

## Планы по доработке:  
* добавить пагинацию

## Для запуска
* скачайте репозиторий и установите зависимости
* для запуска локально 
  * назначьте на бэкенде PORT=3001 и отключите CORS (app.js)
  * назначьте на фронте переменным BASE_URL (auth.js) и apiUrl (api.js) значение `http://127.0.0.1:3000`
* для запуска на сервере используйте свои значения.
* наберите `NPM START` для запуска фронтенда
* наберите `NPM START` для запуска бэкенда
* Пожалуйста, зарегистрируйтесь, чтобы использовать приложение. Для регистрации можно использовать вымышленные почту и пароль.

## Фронт
* https://movie.nomoredomainsicu.ru/
## Бэк
* https://api.movie.nomoredomainsicu.ru/

### Станислав Зайцев х Yandex Practicum