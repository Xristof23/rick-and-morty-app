import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
// const maxPageDisplay = document.querySelector('[data-js="max-page"]');

// States
let maxPage;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";

  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;

  const response = await fetch(url);
  const data = await response.json();

  const characters = data.results;

  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  console.log(data);

  characters.forEach((character) => {
    const card = CharacterCard(character);

    cardContainer.append(card);
  });

  return maxPage;
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page > 0 && page < maxPage) {
    page += 1;
    pagination.textContent = `${page} / ${maxPage}`;
    fetchCharacters();
    console.log(maxPage);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1 && page <= maxPage) {
    page -= 1;
    pagination.textContent = `${page} / ${maxPage}`;
    fetchCharacters();
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  if (page != 1) {
    page = 1;
  }

  searchQuery = event.target.query.value;
  fetchCharacters();
  searchBar.reset();
});
