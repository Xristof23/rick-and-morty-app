import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { nextPage } from "./components/NavPagination/NavPagination.js";
import { prevPage } from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const maxPageDisplay = document.querySelector('[data-js="max-page"]');

// States
let maxPage = 42;
let page = 1;
const searchQuery = "";

export async function fetchCharacters(page) {
  cardContainer.innerHTML = "";

  const url = `https://rickandmortyapi.com/api/character?page=${page}`;

  const response = await fetch(url);
  const data = await response.json();

  const characters = data.results;

  let maxPage = data.info.pages;
  maxPageDisplay.textContent = maxPage;
  console.log(data);

  characters.forEach((character) => {
    const card = CharacterCard(character);

    cardContainer.append(card);
  });
}

fetchCharacters();
nextPage();
prevPage();
