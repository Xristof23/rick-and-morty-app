import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

// const character = {
//   name: "Rick",
//   image: "Bild von Rick",
//   status: "alive",
//   type: "forever",
//   occurences: 51,
// };

// console.log(CharacterCard(character));

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";

  const url = "https://rickandmortyapi.com/api/character";

  const response = await fetch(url);
  const data = await response.json();

  const characters = data.results;

  console.log(characters);

  // console.log(characters[0].name)

  characters.forEach((character) => {
    const card = CharacterCard(character);

    cardContainer.append(card);
  });
}

fetchCharacters();
