{
    //
    // utility types 

    // pick tyope
    // type Person = {
    //     name: 'tuhin',
    //     age: number,
    //     email?: string,
    //     contactInfo: string

    // }

    // type name = Pick<Person,"age" | "contactInfo">

    type Person = {
        id: number;
        name: string;
        contactNo: number;
        email?: string;
        isAdmin: boolean;

    }

    type adminEmail = Pick<Person, "isAdmin" | 'email'>

    // omit 
    type contactInfoEmail = Omit<Person, "contactNo" | 'email'>

    // required
    type required = Required<Person>

    // partial //shob gulo propertike optional banay
    type partial = Partial<Person>















    //
}