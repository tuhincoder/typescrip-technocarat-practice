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


// generic with tuple 
const createWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
}

const res5 = createWithGenericTuple<string, number>('bangladesh', 123)
const res6 = createWithGenericTuple<string, { name: string }>('bangladesh', { name: 'asia' })



const addCourseStudent = <T>(student: T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
}

const student1 = addCourseStudent({ name: 'tuhin', email: 'tuhin@gmali.com', id: 2894 })
const student2 = addCourseStudent({ name: 'mahmudul', email: 'tuhin@gmali.com', id: 2894, watch: 'apple' })

