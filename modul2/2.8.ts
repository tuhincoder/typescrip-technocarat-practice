{
    //
    // promise
    // const createPromise = () => {
    //     return new Promise((resolve, reject) => {
    //         const data: string = "something"
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject('failed to load data')
    //         }

    //     })
    // }


    type ToDo = {
        id: number;
        uerId: number;
        title: string;
        complete: boolean;
    }

    const getToDo = async (): Promise<ToDo> => {
        const resPonse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await resPonse.json()
        console.log('data is show', data);
        return data
    }

    getToDo();

    type Something = { something: string }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' }
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }

        })

    }


    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data = await createPromise();
        // console.log(data);
        return data;
    }

    showData();

    //
}