{
    // type alias

    type Student = {
        id: number;
        name: string;
        contactNo?: number;
        gender: string;
    }

    const student1: Student = {
        id: 4,
        name: 'tuhin',
        contactNo: 526968966,
        gender: 'male'
    }


    type UserName = string;
    type IsAdmin = boolean;
    const newUser: UserName = 'tuihn';
    const admin: IsAdmin = true;


    type AddNumber = (num1: number, num2: number) => number;

    const newAdd: AddNumber = (num1, num2) => num1 + num2;




}