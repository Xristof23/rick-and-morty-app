import { fetchCharacters } from "../../index.js";

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

let page = 1;

export function nextPage() {
  nextButton.addEventListener("click", () => {
    if (page > 0 && page < 42) {
      page += 1;
      fetchCharacters(page);
    }
  });
}

export function prevPage() {
  prevButton.addEventListener("click", () => {
    if (page > 1 && page < 42) {
      page -= 1;
      fetchCharacters(page);
    }
  });
}
