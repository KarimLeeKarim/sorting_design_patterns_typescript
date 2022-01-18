import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


interface Sortable{
    length: number,
    compare(leftSide:number, rightSide:number):boolean,
    swap(leftSide: number, rightSide: number): void,
}

export class Sorter{
    // collection: number[];

    // constructor(collection: number[]){
    //     this.collection = collection;
    // }

    //constructor(public collection: number[] | string){} it is the same as in above ex.
    
    constructor(public collection: Sortable){} //it is the same as in above ex.

    sort(): void{
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i -1; j++) {              
                    // collection has type of number[]
                    if(this.collection.compare(j, j+1)){
                         this.collection.swap(j, j+1);
                    }
            }
            
        }
    }
}