import { BASE_USER_URL } from "./constants";

function getRes (res) {
  return (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
}

function request (url, options) {
  return fetch(BASE_USER_URL + url, options).then(getRes)
}
// функция регистрации пользователя
export function register (name, email, password) {
  return request(`/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  })
}
// функция авторизации пользователя
export function authorize (email, password) {
  return request(`/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
}
// функция выхода из аккаунта
export function logout () {
  return request(`/signout`, {
    method: 'DELETE',
    credentials: 'include',
  })
}
// функция получния информации пользователя
export function getUserInfo () {
  return request(`/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
}
// функция апдейта информации пользователя
export function setUserInfo (userData) {
  return request(`/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: userData.name,
      email: userData.email
    })
  })
}
// функция проверки валидности токена
export function checkToken () {
  return request(`/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
}

