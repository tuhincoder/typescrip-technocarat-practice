const createArray = (param: string): string[] => {
    return [param]
}
const res1 = createArray('web developer')

// const createArrayWithGeneric = <T>(param: T): T[] => {
//     return [param]
// }

// const res2 = createArrayWithGeneric<boolean>(true)

// const createArrayWithGeneric = <T>(param: T): T[] => {
//     return [param]
// }

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
}

const res2 = createArrayWithGeneric<string>('bangladesh')


//with object

const createArrayWithGenericObj = <T>(param: T): T[] => {
    return [];
}

type User = { id: number; name: string }
const res4 = createArrayWithGenericObj<User>({ id: 123, name: 'tuhin' })


