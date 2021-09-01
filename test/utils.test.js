// IMPORT MODULES under test here:
import { getRandomPokemon } from '../utils.js';

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

// test('findById should take in an id and return the correct product object data from the specified array of objects', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = {

//     };
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = ;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });
