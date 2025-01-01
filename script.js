class Animal {
    constructor(species) {
        this._species = species; // Use a private property with underscore
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log("This animal makes a sound.");
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    bark() {
        console.log("woof");
    }
}

// Example usage
const myCat = new Cat("Feline");
console.log(myCat.species); // Output: Feline
myCat.makeSound(); // Output: This animal makes a sound.
myCat.purr(); // Output: purr

const myDog = new Dog("Canine");
console.log(myDog.species); // Output: Canine
myDog.makeSound(); // Output: This animal makes a sound.
myDog.bark(); // Output: woof
