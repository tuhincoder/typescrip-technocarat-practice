// {
//     //
//     class Counter {
//         static count: number = 0;
//         static increment() {
//             return (Counter.count = Counter.count + 1);
//         }

//         static decrement() {
//             return (Counter.count = Counter.count - 1)
//         }
//     }


//     // const Counter = new Counter()
//     console.log(Counter.increment());
//     // console.log(Counter.increment());
//     // console.log(Counter.increment());

//     // const instance2 = new Counter()
//     // console.log(Counter.increment());
//     // console.log(instance2.increment());
{

    // class Counter {
    //     count: number = 0;
    //     increment() {
    //         return (this.count = this.count + 1)
    //     }
    //     decrement() {
    //         return (this.count = this.count - 1)
    //     }
    // }

    // const increment1 = new Counter()
    // console.log(increment1.increment());
    // console.log(increment1.increment());

    // const increment2 = new Counter()
    // console.log(increment2.increment());
    // console.log(increment2.increment());


    class Counter {
        static count: number = 0;
        static increment() {
            return Counter.count = Counter.count + 1;
        }
        static decrement() {
            return (Counter.count = Counter.count - 1)
        }
    }


    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());












    //
}