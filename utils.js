//imports
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
export function getSeenCounts(pokemonArray) {
    // pull from local storage
    let seenCounts = localStorage.getItem('SEEN');
    // if nothing in there yet, create area of poke objects
    if (!seenCounts) {
      seenCounts = pokemonArray.map(entry => {
        let properties = {
          'name': entry.pokemon,
          'seen': 0
        }
        return properties;
      });
      console.log(seenCounts);
      let stringSeenCounts = JSON.stringify(seenCounts);
      localStorage.setItem('SEEN', stringSeenCounts);
    }
    // if something in there, 
    const parsedSEEN = JSON.parse(seenCounts);
    return parsedSEEN;
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
    localStorage.setItem('SEEN', stringUpdate);
  };
  