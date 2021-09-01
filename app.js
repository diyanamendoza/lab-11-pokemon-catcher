import { getRandomPokemon, updateCaughtCounts, updateSeenCounts, renderPoke } from "./utils.js";



let pokeLineUp = getRandomPokemon();


for(let poke of pokeLineUp) {
  renderPoke(poke);
  updateSeenCounts(poke);
};

// let b = localStorage.getItem('COUNTS');
// console.log(b);