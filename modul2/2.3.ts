{
    //

    // generic type

    // // const rollNumber: number[] = [1, 2, 3, 4]
    // const rollNumber: Array<number> = [1, 2, 3, 4]


    // // const mentors: string[] = ['Mr. x', 'Mr. y']
    // const mentors: Array<String> = ['Mr. x', 'Mr. y']

    // // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<Boolean> = [true, false, true]



    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [1,2,3]
    const rollNumber: GenericArray<number> = [1, 2, 3]

    // const mentor: string[] = ['Mr. tuhin', 'Mr.parvej']
    const mentor: GenericArray<string> = ['Mr. tuhin', 'Mr. parvej']

    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: 'tuhin',
            age: 1000,
        },
        {
            name: 'Mezba',
            age: 300
        }
    ]

    type GenericTuple<x, y> = [x, y]
    const man: GenericTuple<string, string> = ['Mr. x', 'Mr. Y']

    // const userTuple: GenericTuple<number, {name: string, email: string}> = [ 123, { name: 'tuhin', email: 'tuhin@gmail.com' }]

    const userTuple: GenericTuple<number, { name: string, email: string }> = [2938, { name: 'tuhin', email: 't@gmail.com' }]












    //
}