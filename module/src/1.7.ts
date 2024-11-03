{
    //


    // spread operator
    // rest operator
    // destructuring


    const friends1: string[] = ['tuhin', 'mahmud', 'parvej', 'hasib']
    const friends2: string[] = ['hasan', 'tuhin', 'hasib']

    friends1.push(...friends2)



    const mentor = {
        typeScript: 'mezba',
        redux: 'mir'
    }
    const mentor2 = {
        mongoDB: "tuhin",
        js: 'jhankar'
    }

    const mentorList = {
        ...mentor,
        ...mentor2
    }


    // const greedFriends = (...friends: string[]) => {

    //     const totalFriends = friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    // }

    // greedFriends('tuhin', 'hasan', 'mahmud', 'tawsif')


    const greedFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hello ${friend}`))
    }

    greedFriends('tuhinl', 'parvej', 'hasan', 'mahmud')


    const myFriends = ['tuhin', 'parvej', 'mahmud', 'hasan', 'tushar']

    const [a, b, bestFriend, ...rest] = myFriends;
















    //
}