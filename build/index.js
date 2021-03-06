"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 34, 2, 20, -3, -1000]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xsaf");
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.addData(100);
linkedList.addData(2);
linkedList.addData(43);
linkedList.print();
