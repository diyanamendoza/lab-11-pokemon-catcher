//imports
import pokemon from "./pokemon.js";
import pokemonArray from "./pokemon.js";

//export functions

function getRandomIndex() {
    return Math.floor(Math.random() * pokemonArray.length);
}

export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2 
        || randomIndex2 === randomIndex3 
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemonArray[randomIndex1], 
        pokemonArray[randomIndex2], 
        pokemonArray[randomIndex3]
    ];
}

export function resetCounts(pokemonArray) {
  let seenCounts = pokemonArray.map(entry => {
    let properties = {
      'name': entry.pokemon,
      'seen': 0,
      'caught': 0
    }
    return properties;
  });
  let stringSeenCounts = JSON.stringify(seenCounts);
  localStorage.setItem('COUNTS', stringSeenCounts);
}

export function getSeenCounts(pokemonArray) {
    // pull from local storage
    let seenCounts = localStorage.getItem('COUNTS');
    // if nothing in there yet, create area of poke objects
    if (seenCounts === null) {
      resetCounts(pokemonArray);}
      else {    // if something in there, 
        const parsedSEEN = JSON.parse(seenCounts);
        return parsedSEEN;}
  };

export function updateSeenCounts(poke) {
    let currentCounts = getSeenCounts(pokemonArray);
    let pokeName = poke.pokemon;
  
    let update = currentCounts.map(entry => {
      if(entry.name === pokeName) {
        entry.seen += 1;
        return entry;
      } else {
        return entry;
      }
    })
  
    let stringUpdate = JSON.stringify(update);
    localStorage.setItem('COUNTS', stringUpdate);
  };

  export function updateCaughtCounts(poke) {
    let pokeName = poke.pokemon
    let currentCounts = JSON.parse(localStorage.getItem('COUNTS'));
    let caughtUpdate = currentCounts.map(entry => {
        if(entry.name === pokeName) {
            entry.caught++;
            return entry;
        } else {
            return entry;
        }
    })
    let stringCaughtUpdate = JSON.stringify(caughtUpdate);
    localStorage.setItem('COUNTS', stringCaughtUpdate);
  };
  
export function renderPoke(poke) {
    const pokeContainer = document.getElementById('poke-container');
    const pokeLabel = document.createElement('label');
    const pokeImg = document.createElement('img');
    const pokeInput = document.createElement('input');
    const pokeStats = document.createElement('p');
  
    pokeLabel.classList.add('pokemon');
    pokeImg.src = poke.url_image;
    pokeInput.value = poke.id;
    pokeInput.type = 'radio';
    pokeInput.setAttribute('name', 'pokemon');
  
    pokeContainer.append(pokeLabel);
    pokeLabel.append(pokeInput, pokeImg, pokeStats);

    //pokeStats stuff
    let pokeStatsArray = getSeenCounts();
    let thisPoke = pokeStatsArray.find(entry => entry.name === poke.pokemon);
    pokeStats.textContent = `${poke.pokemon} | seen: ${thisPoke.seen} | caught: ${thisPoke.caught}`;

    //eventlistener
    pokeInput.addEventListener('click', () => {
      // console.log(`you caught ${poke.pokemon}!`);
      updateCaughtCounts(poke);
      updatePlayCounter();
      clearPokeLineUp();

      let pokeLineUp = getRandomPokemon();

      for(let poke of pokeLineUp) {
        renderPoke(poke);
        updateSeenCounts(poke);
    }
  })};

export function startPlayCounter() {
      // when user clicks play, a trioCounter starts in local storage.
      let playCounter = 1;
      let string = JSON.stringify(playCounter);
      localStorage.setItem('PLAYCOUNTER', string);
  };

export function updatePlayCounter() {
  let playCounter = localStorage.getItem('PLAYCOUNTER');
  const roundText = document.getElementById('round-count');
  roundText.textContent = `You've caught ${playCounter}!`;

  let parsed = JSON.parse(playCounter);
  if(parsed < 10) {
    parsed++
    let string = JSON.stringify(parsed);
    localStorage.setItem('PLAYCOUNTER', string);
  } else { 
    clearPokeLineUp();
    window.location = './results/results.html';

  };
};

  function clearPokeLineUp() {
    const pokeContainer = document.getElementById('poke-container');
    let toClear = pokeContainer.getElementsByClassName('pokemon');
    for (let i = toClear.length-1; i>=0; i--) {
      let childNode = toClear[i];
      childNode.parentNode.removeChild(childNode);
    }};