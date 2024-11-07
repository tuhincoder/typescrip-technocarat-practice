{
    //
    // polymorphism
    // class Person {
    //     getSleep() {
    //         console.log('im sleeping  for 8 hour per day');
    //     }
    // }

    // class Student extends Person {
    //     getSleep() {
    //         console.log(`i am sleeping for 7 hours per day`)
    //     }
    // }

    // class Developer extends Person {
    //     getSleep() {
    //         console.log(`i am sleeping for 5 hours per day`);
    //     }
    // }

    // // const getSleepingInHours = (param: Person) => {
    // //     param.getSleep()
    // // }
    // const getSleepingInHours= (param: Person)=>{
    //     param.getSleep()
    // }

    // const person1 = new Person()
    // const person2 = new Student()
    // const person3 = new Developer()

    // getSleepingInHours(person1)


    class Person {
        getSleep() {
            console.log(`i am sleeping for 5 hours per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`i am sleeping for 8 hours per day`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`i am sleeping for 4 horse`);
        }
    }

    const getSleepingInHours = (param: Person) => {
        param.getSleep()
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingInHours(person3)


    // difference
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // pi * r * r

    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super()
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super()
            this.height = height;
            this.width = height;
        }

        getArea(): number {
            return this.height * this.width
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }


    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape = new Rectangle(5, 5)
    getShapeArea(shape1)

    //

}