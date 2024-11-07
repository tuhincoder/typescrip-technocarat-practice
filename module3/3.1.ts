{
    //
    // oop  object oriented programming




    class Animal {
        // name: string;
        // species: string;
        // sound: number;


        constructor(public name: string, public species: string, public sound: number) {

            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        mackSound() {
            console.log(`the ${this.name} barishal ${this.species} ${this.sound}`);
        }


    }

    const cat = new Animal('bangladeshi cat', 'cat', 45)
    cat.mackSound()


    // -------------------------------
    class Mobile {
        constructor(public name: string, public brand: string, public publicationDate: number) { }

        mackPhone() {
            console.log(`steeb jobs ${this.name} brnd ${this.brand} publish date ${this.publicationDate}`);
        }

    }

    const iPhon = new Mobile('the phone is iPhone', 'apple', 2020)
    iPhon.mackPhone()


    class Bird {
        constructor(public name: string, public beautiful: string, public weight: number) { }


        birdFly() {
            console.log(`the ${this.name} so ${this.beautiful} w ${this.weight}`);
        }
    }

    const doel = new Bird('doel', 'so beautiful', 1.5)
    doel.birdFly();



    class LapTop {
        constructor(public name: string, public brand: string, public companyLocation: string) {

        }

        acerLaptop() {
            console.log(`the ${this.name} brand ${this.brand} company location ${this.companyLocation}`);
        }

    }

    const acer = new LapTop('acer', 'Aspire', 'taiwan')
    acer.acerLaptop()

















}