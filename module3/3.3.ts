{
    //

    // type AlphaNumeric = string | number;

    // const add = (param1: AlphaNumeric, param2: AlphaNumeric) => {
    //     if (typeof param1 === 'number' && typeof param2 === 'number') {
    //         return param1 + param2
    //     } else {
    //         return param1.toString() + param2.toString()
    //     }
    // }

    // const result1 = add(2, '3')
    // console.log(result1);


    const add = (param1: string | number, param2: string | number) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString()
        }

    }


    // ---------- in guard ----------

    // type NormalUser = {
    //     name: string;

    // }

    // type AdminUser = {
    //     name: string;
    //     role: 'admin';
    // }

    // const getUser = (user: NormalUser | AdminUser) => {

    //     if ('role' in user) {

    //         console.log(`my name is ${user.name} nad my role is ${user.role}`);
    //     } else {
    //         console.log(`my name is ${user.name}`);
    //     }
    // };
    // const normalUser: NormalUser = {
    //     name: 'Mr normal user'
    // }

    // const adminUser: AdminUser = {
    //     name: 'Mr admin user',
    //     role: 'admin'
    // }
    // getUser(adminUser)



    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} role ${user.role}`);
        } else {
            console.log(`my name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'Mr normal user'
    }

    const adminUser: AdminUser = {
        name: 'Mr Admin User',
        role: 'admin'
    }

    getUser(normalUser)











    //
}