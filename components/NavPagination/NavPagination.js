import { fetchCharacters } from "../../index.js";

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
let page = 1;
let maxPage = 42;

// pagination.onload = setPaginationAtLoad();

export function nextPage() {
  nextButton.addEventListener("click", () => {
    if (page > 0 && page < 42) {
      page += 1;
      pagination.textContent = `${page} / ${maxPage}`;
      fetchCharacters(page);
    }
  });
}

export function prevPage() {
  prevButton.addEventListener("click", () => {
    if (page > 1 && page < 42) {
      page -= 1;
      pagination.textContent = `${page} / ${maxPage}`;
      fetchCharacters(page);
    }
  });
}
