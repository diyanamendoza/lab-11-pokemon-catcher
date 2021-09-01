import { getRandomPokemon, updateSeenCounts, renderPoke, startPlayCounter, resetCounts, renderPlayCount } from "./utils.js";
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

const roundCount = document.getElementById('round-count');
renderPlayCount();
roundCount.style.visibility = "hidden";

// play button
playButton.addEventListener('click', () => {
// hide button
  playButton.style.visibility = "hidden";
// display poke - each catch updates play counter by 1
  pokeContainer.style.visibility = "visible";
// show round
  const instructions = document.getElementById('instructions');
  instructions.style.visibility = "hidden";
  const click = document.getElementById('click');
  click.textContent = ('Click to catch!');

  startPlayCounter();
  roundCount.style.visibility = "visible";

});


