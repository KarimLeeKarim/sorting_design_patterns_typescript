import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


const numbersCollection = new NumbersCollection([-1, 34, 2, 20, -3, -1000]);
const sorterNumer = new Sorter(numbersCollection);

// sorterNumer.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xsaf");
const sorterCharacter = new Sorter(charactersCollection);

sorterCharacter.sort();
console.log(charactersCollection.data);

