{

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;

        }
        getSleep(numbOfHours: number) {
            console.log(`${this.name} will sleep ${numbOfHours}`);
        }
    }

    //

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)

        }

    }
    const student1 = new Student('tuhin', 23, 'borishal')

    // ---------
    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numbOfClass: number) {
            console.log(`${this.name} will take ${numbOfClass}`);
        }

    }

    const teacher = new Teacher('ab malek', 33, 'dhaka', 'professor')
















    //
}