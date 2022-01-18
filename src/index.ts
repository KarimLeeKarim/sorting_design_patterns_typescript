import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([-1, 34, 2, 20, -3, -1000]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xsaf");

charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.addData(100);
linkedList.addData(2);
linkedList.addData(43);
linkedList.print();

