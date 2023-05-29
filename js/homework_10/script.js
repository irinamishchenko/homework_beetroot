const API = "http://www.omdbapi.com/?apikey=9b3dc401";

// fetch(`${API}&s=batman`).then((response) =>
//   response.json().then((response) => console.log(response))
// );

let input = document.querySelector("#input");
let button = document.querySelector("#button");
let query = "";

function getRespond() {
  // let container = document.querySelector(".movies-container");
  let container = document.createElement("div");
  container.classList.add("movies-container");
  let main = document.querySelector("main");
  main.append(container);
  query = input.value;
  fetch(`${API}&s=${query}`)
    .then((res) => res.json())
    .then((movies) => movies.Search)
    .then((movies) => {
      movies.forEach((movie) => {
        container.append(postMovie(movie));
      });
    });
}

function postMovie(movie) {
  let movieItem = document.createElement("div");
  movieItem.classList.add("movie-item");

  movieItem.innerHTML = `<img class="movie-poster" src="${movie.Poster}"><h2 class="movie-title">${movie.Title}</h2>`;
  return movieItem;
}

button.addEventListener("click", getRespond);
// document.addEventListener("click", show);
