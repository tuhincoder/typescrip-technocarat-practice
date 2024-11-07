{
    //
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('i am making sound');
        }

    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBak() {
            console.log(' dog is make bark');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMew() {
            console.log('cat sound mew mew');
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBak()
        } else if (isCat(animal)) {
            animal.makeMew()
        } else {
            animal.makeSound()
        }


    }


    const dog = new Dog('russian Dog', 'gew gew')
    const cat = new Cat('bangladeshi cat', 'mew mew')
    getAnimal(cat)

















    //
}