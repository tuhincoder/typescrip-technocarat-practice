{
    //
    // oop  object oriented programming

    // class Animal {

    //     constructor(public name: string, public species: string, public sound: string) {
    //     }
    //     makSound() {
    //         console.log(`The ${this.name}  says ${this.sound}`);
    //     }
    // }
    // const dog = new Animal('garman shepay', 'dog', 'ghew ghew')
    // const cat = new Animal('bangaldeshi cat', 'cat', 'mew mew')
    // cat.makSound()



    class Animal {

        constructor(public name: string, public species: string, public sound: string, public height: number) {

        }
        mackSound() {
            console.log(`the ${this.name} says ${this.sound} and height ${this.height}`);
        }
    }


    const cat = new Animal('autralian cute cat', 'cat', 'meaw meaw', 45)
    const dog = new Animal('german animal', 'dog', 'ghew ghew', 1.2)
    cat.mackSound()






    //
}