// IMPORT MODULES under test here:
import { getRandomPokemon, resetCounts, updateCaughtCounts, updateSeenCounts, renderPoke, updatePlayCounter } from '../utils.js';
import pokemonArray from '../pokemon.js';

const test = QUnit.test;

test('should return an array three pokemon that are unique', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomPokemon();

    // there are three things in this array and they are pokemon (do they have a .pokemon property)    
    expect.equal(actual.length, 3, 'there should be 3');
    
    // check that all three have a truthy value for .pokemon
    expect.equal(!!actual[0].pokemon, true, 'the first item should be a pokemon');
    expect.equal(!!actual[1].pokemon, true, 'the second item should be a pokemon');
    expect.equal(!!actual[2].pokemon, true, 'the third item should be a pokemon');

    // check that the ids are not the same
    expect.equal(actual[0].id !== actual[1].id, true, 'the first and second should have different ids');
    expect.equal(actual[0].id !== actual[2].id, true, 'the first and third should have different ids');
    expect.equal(actual[1].id !== actual[2].id, true, 'the third and second should have different ids');
});

test('resetCounts should take in pokemonArray and set local storage counts to zero for each pokemon', (expect) => {
    const countsBefore = [ {name: 'pokemon', 'seen': 3, 'caught': 1} ];
    const countsAfter = 
    [{name: "bulbasaur", seen: 0, caught: 0},
    {name: "ivysaur", seen: 0, caught: 0},
    {name: "charmander", seen: 0, caught: 0},
    {name: "charmeleon", seen: 0, caught: 0},
    {name: "charizard", seen: 0, caught: 0},
    {name: "squirtle", seen: 0, caught: 0},
    {name: "wartortle", seen: 0, caught: 0},
    {name: "blastoise", seen: 0, caught: 0},
    {name: "caterpie", seen: 0, caught: 0},
    {name: "metapod", seen: 0, caught: 0},
    {name: "beedrill", seen: 0, caught: 0},
    {name: "weedle", seen: 0, caught: 0},
    {name: "kakuna", seen: 0, caught: 0},
    {name: "pidgey", seen: 0, caught: 0}];
    
    const stringBefore = JSON.stringify(countsBefore);
    localStorage.setItem('COUNTS', stringBefore);

    resetCounts(pokemonArray);
    const stringAfter = localStorage.getItem('COUNTS');
    const actual = JSON.parse(stringAfter);

    expect.deepEqual(actual, countsAfter);

});

test('updateSeenCounts should take in a poke and update the seen count in local storage', (expect) => {
    const countsBefore = [{name: "bulbasaur", seen: 0, caught: 0},
    {name: "ivysaur", seen: 0, caught: 0},
    {name: "charmander", seen: 0, caught: 0},
    {name: "charmeleon", seen: 0, caught: 0},
    {name: "charizard", seen: 0, caught: 0},
    {name: "squirtle", seen: 0, caught: 0},
    {name: "wartortle", seen: 0, caught: 0},
    {name: "blastoise", seen: 0, caught: 0},
    {name: "caterpie", seen: 0, caught: 0},
    {name: "metapod", seen: 0, caught: 0},
    {name: "beedrill", seen: 0, caught: 0},
    {name: "weedle", seen: 0, caught: 0},
    {name: "kakuna", seen: 0, caught: 0},
    {name: "pidgey", seen: 0, caught: 0}];

    const stringBefore = JSON.stringify(countsBefore);
    localStorage.setItem('COUNTS', stringBefore);

    const poke = {pokemon: "bulbasaur"};
    console.log(poke.pokemon);
    const countsAfter = 
    [{name: "bulbasaur", seen: 1, caught: 0},
    {name: "ivysaur", seen: 0, caught: 0},
    {name: "charmander", seen: 0, caught: 0},
    {name: "charmeleon", seen: 0, caught: 0},
    {name: "charizard", seen: 0, caught: 0},
    {name: "squirtle", seen: 0, caught: 0},
    {name: "wartortle", seen: 0, caught: 0},
    {name: "blastoise", seen: 0, caught: 0},
    {name: "caterpie", seen: 0, caught: 0},
    {name: "metapod", seen: 0, caught: 0},
    {name: "beedrill", seen: 0, caught: 0},
    {name: "weedle", seen: 0, caught: 0},
    {name: "kakuna", seen: 0, caught: 0},
    {name: "pidgey", seen: 0, caught: 0}];
    
    updateSeenCounts(poke);
    const stringAfter = localStorage.getItem('COUNTS');
    const actual = JSON.parse(stringAfter);

    expect.deepEqual(actual, countsAfter);

});

test('updateCaughtCounts should take in a poke and update the caught count in local storage', (expect) => {
    const countsBefore = [{name: "bulbasaur", seen: 0, caught: 0},
    {name: "ivysaur", seen: 0, caught: 0},
    {name: "charmander", seen: 0, caught: 0},
    {name: "charmeleon", seen: 0, caught: 0},
    {name: "charizard", seen: 0, caught: 0},
    {name: "squirtle", seen: 0, caught: 0},
    {name: "wartortle", seen: 0, caught: 0},
    {name: "blastoise", seen: 0, caught: 0},
    {name: "caterpie", seen: 0, caught: 0},
    {name: "metapod", seen: 0, caught: 0},
    {name: "beedrill", seen: 0, caught: 0},
    {name: "weedle", seen: 0, caught: 0},
    {name: "kakuna", seen: 0, caught: 0},
    {name: "pidgey", seen: 0, caught: 0}];

    const stringBefore = JSON.stringify(countsBefore);
    localStorage.setItem('COUNTS', stringBefore);

    const poke = {pokemon: "bulbasaur"};
    const countsAfter = 
    [{name: "bulbasaur", seen: 0, caught: 1},
    {name: "ivysaur", seen: 0, caught: 0},
    {name: "charmander", seen: 0, caught: 0},
    {name: "charmeleon", seen: 0, caught: 0},
    {name: "charizard", seen: 0, caught: 0},
    {name: "squirtle", seen: 0, caught: 0},
    {name: "wartortle", seen: 0, caught: 0},
    {name: "blastoise", seen: 0, caught: 0},
    {name: "caterpie", seen: 0, caught: 0},
    {name: "metapod", seen: 0, caught: 0},
    {name: "beedrill", seen: 0, caught: 0},
    {name: "weedle", seen: 0, caught: 0},
    {name: "kakuna", seen: 0, caught: 0},
    {name: "pidgey", seen: 0, caught: 0}];
    
    updateCaughtCounts(poke);
    const stringAfter = localStorage.getItem('COUNTS');
    const actual = JSON.parse(stringAfter);

    expect.deepEqual(actual, countsAfter);

});

// test('updatePlayCounter should set a counter equal to one in local storage', (expect) => {
//     const playCountBefore = JSON.stringify(10);
//     localStorage.setItem('PLAYCOUNTER', playCountBefore);
//     const playCountAfter = 1

//     updatePlayCounter();
//     const stringAfter = localStorage.getItem('PLAYCOUNTER');
//     const actual = JSON.parse(stringAfter);

//     expect.deepEqual(actual, playCountAfter);

// });


// test('renderPoke should take in a poke and render its image and stats', (expect) => {

//     const pokecontainer = document.createElement
//     const expected = '<label class="pokemon"><input type="radio" value="11" name="pokemon"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"><p>wartortle | seen: 0 | caught: 0</p></label>'
//     const poke = pokemonArray[11];
    
//     const actual = renderPoke(poke);

//     expect.deepEqual(actual, expected);

// });
