import { BEATFILM_URL } from "./constants";
import { BASE_USER_URL } from "./constants";

function getRes (res) {
  return (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
}

function request (url, options) {
  return fetch(url, options).then(getRes)
}

export function getMovies () {
  return request(BEATFILM_URL, {method: 'GET'})
}

export function getSavedMovies () {
  return request(BASE_USER_URL + "/movies", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
}

export function saveMovie (movie) {
  return request(BASE_USER_URL + "/movies", {
    method: 'POST',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(movie),
  })

}

export function removeMovie (movieId) {
  return request(BASE_USER_URL + "/movies/" + movieId, {
    method: 'DELETE',
    credentials: 'include',
  })
}