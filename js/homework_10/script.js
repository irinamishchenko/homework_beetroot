const API = "http://www.omdbapi.com/?apikey=9b3dc401";

let input = document.querySelector("#input");
let searchButton = document.querySelector("#button");
let pagination = document.querySelector(".pagination-container");
let movieButtons = [];
let query = "";

function getRespond(page = 1) {
  let checkedBtn = filterCheckbox();
  let container = document.createElement("div");
  container.classList.add("movies-container");
  let main = document.querySelector("main");
  checkContainers();
  main.append(container);
  query = input.value;
  fetch(`${API}&s=${query}&type=${checkedBtn}&page=${page}`)
    .then((res) => res.json())
    .then((movies) => movies.Search)
    .then((movies) => {
      movies.forEach((movie) => {
        container.append(postMovie(movie));
      });
      addButtonsEvents();
      pagination.style.display = "flex";
    })
    .catch(() => {
      let errorMessage = document.createElement("h2");
      errorMessage.innerText = "Movie not found!";
      container.append(errorMessage);
    });
}

function checkContainers() {
  let containers = document.querySelectorAll(".movies-container");
  if (containers.length > 0) {
    document.querySelector(".movies-container").remove();
  }
}

function postMovie(movie) {
  let movieItem = document.createElement("div");
  movieItem.classList.add("movie-item");
  movieItem.innerHTML = `<img class="movie-poster" src="${movie.Poster}"><h2 class="movie-title">${movie.Title}</h2><button id="${movie.imdbID}" class="movie-button">Details</button>`;
  return movieItem;
}

searchButton.addEventListener("click", () => getRespond());
document.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    getRespond();
  }
});

function addButtonsEvents() {
  let movieButtons = document.querySelectorAll(".movie-button");
  movieButtons.forEach((button) => {
    button.addEventListener("click", getMovieById);
  });
}

function getMovieById(event) {
  let movieID = event.target.id;
  fetch(`${API}&i=${movieID}`)
    .then((res) => res.json())
    .then((movie) => showMovieDetails(movie));
}

function showMovieDetails(movie) {
  let main = document.querySelector("main");
  let container = document.createElement("div");
  container.classList.add("movie-details-container");
  container.innerHTML = `<h2 class="movie-details-title">${movie.Title}</h2><img src="${movie.Poster}"><p class="movie-details-country">${movie.Country}, ${movie.Year}</p><p class="movie-details-plot">Plot: ${movie.Plot}</p><p class="movie-details-runtime">Runtime: ${movie.Runtime}</p><p class="movie-details-awards">Awards: ${movie.Awards}</p>`;
  main.append(container);
  scrollTo(container);
}

function scrollTo(container) {
  container.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

function filterCheckbox() {
  let radioButtons = document.querySelectorAll(".radio-btn");
  let checked = "";
  radioButtons.forEach((button) => {
    if (button.checked === true) {
      checked = button.id;
    }
  });
  return checked;
}

pagination.addEventListener("click", changePage);

function changePage(event) {
  let newPage;
  if (event.target !== event.currentTarget) {
    newPage = event.target.innerHTML;
  } else {
    return;
  }
  getRespond(newPage);
}
