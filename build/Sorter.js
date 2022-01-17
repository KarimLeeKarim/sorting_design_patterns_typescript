"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable{
//     length: number,
//     compare(leftSide:number, rightSide:number):boolean,
//     swap(leftSide: number, rightSide: number): void,
// }
class Sorter {
    // collection: number[];
    // constructor(collection: number[]){
    //     this.collection = collection;
    // }
    //constructor(public collection: number[] | string){} it is the same as in above ex.
    constructor(collection) {
        this.collection = collection;
    } //it is the same as in above ex.
    sort() {
        const { length } = this.collection;
        console.log(length);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // collection has type of number[]
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
