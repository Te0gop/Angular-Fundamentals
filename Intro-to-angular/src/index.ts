import * as _ from 'underscore';

class User {

// name: string;
// age: number;

    constructor(public name: string, public age: number) {
        // this.name = name; this.age = age;
    } 
}

const ivan = new User("Ivan", 30);

console.log(ivan.name);