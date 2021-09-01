import { getRandomPokemon, updateSeenCounts } from "./utils.js";
import pokemonArray from "./pokemon.js";



let pokeLineUp = getRandomPokemon();

function renderPoke(poke) {
  const pokeContainer = document.getElementById('poke-container');
  const pokeLabel = document.createElement('label');
  const pokeImg = document.createElement('img');
  const pokeInput = document.createElement('input');

  pokeLabel.classList.add('pokemon');
  pokeImg.src = poke.url_image;
  pokeInput.value = poke.id;
  console.log(poke.id);
  pokeInput.type = 'radio';
  pokeInput.setAttribute('name', 'pokemon');

  pokeContainer.append(pokeLabel);
  pokeLabel.append(pokeInput, pokeImg);

  pokeLabel.addEventListener('click', () => {
    console.log(`you caught ${poke.pokemon}!`);
  })

};

for(let poke of pokeLineUp) {
  renderPoke(poke);
  updateSeenCounts(poke);
};