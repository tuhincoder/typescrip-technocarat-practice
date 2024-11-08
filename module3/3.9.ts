{
    //
    interface vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements vehicle1 {
        startEngine(): void {
            console.log('i am start engine in car');
        }
        stopEngine(): void {
            console.log(' im stop this engine');
        }
        move(): void {
            console.log('i ma move tha engine');
        }
        test() {
            console.log('i am testing');
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine()


    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log('i am testing');
        };
    }


    const toyotaCar2 = new Car2()

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('i am start engine');
        }
        stopEngine(): void {
            console.log('i stop engine');
        }

        move(): void {
            console.log(' i move engine');
        }
    }







    //

}