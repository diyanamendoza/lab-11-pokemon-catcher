import { getRandomPokemon, updateSeenCounts, renderPoke, startPlayCounter, resetCounts } from "./utils.js";
import pokemonArray from "./pokemon.js";

const playButton = document.getElementById('play');
const pokeContainer = document.getElementById('poke-container');

// start round count
// let roundCount = 1; 

// zero out local storage
resetCounts(pokemonArray);

// load poke trio but do not show until play button is clicked
pokeContainer.style.visibility = "hidden";
  let pokeLineUp = getRandomPokemon();

  for(let poke of pokeLineUp) {
    renderPoke(poke);
    updateSeenCounts(poke);
  };

// play button
playButton.addEventListener('click', () => {
// start play counter at 1
  startPlayCounter();
// hide button
  playButton.style.visibility = "hidden";
// display poke - each catch updates play counter by 1
  pokeContainer.style.visibility = "visible";
// show round
  const roundText = document.getElementById('round-count');
  // roundText.style.visibility ="hidden";
  roundText.textContent = ('Click to catch!');
});



