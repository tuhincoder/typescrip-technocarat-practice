{
    // 
    type vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type owner = 'bike' | 'car' | 'ship';

    type owner2 = keyof vehicle;


    // ---------------
    const user = {
        name: 'tuhin',
        age: 23,
        address: 'ctg'
    }
    // user['address']
    //  user['address'] 
    // user['name']
    // user.name
    // user.age


    // const getPropertyValue = <X, Z extends keyof X>(obj: X, key: Z) => {
    //     return obj[key]
    // }

    // const bike1 = {
    //     name: 'Yamah',
    //     bike: '100cc',
    //     number: 24
    // }

    // const user1 = {
    //     name: 'tuhin',
    //     id: 23,
    //     city: "dhaka"
    // }

    // const result1 = getPropertyValue(user1, 'city')

    // const getPropertyValue = <X, Z extends keyof X>(obj: X, key: Z) => {
    //     return obj[key]
    // }

    // const user2 = {
    //     name: 'mahmud',
    //     division: 'borishal'
    // }

    // const result2 = getPropertyValue(user2, 'division')


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]


    }

    const user3 = {
        id: 1234,
        name: 'mahmudul',
        religion: 'muslim'

    }
    const result3 = getPropertyValue(user3, 'religion')






    //
}