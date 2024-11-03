{
    //
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }


    type Watch = {
        brand: string;
        model: string;
        display: string;
        heardTrack: string;
        timeTrack: boolean;

    }


    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const poorDeveloper: Developer<Watch, YamahaBike> = {
        name: 'tuhin',
        computer: {
            brand: 'asus',
            model: '24-del',
            releaseYear: 2016

        },
        smartWatch: {
            brand: 'edil',
            model: 'zeed',
            display: 'thirty',
            heardTrack: 'true',
            timeTrack: false

        },
        bike: {
            model: 'yamaha',
            engineCapacity: '100cc'
        }
    }



    interface AppleWatch {
        brand: string;
        model: string;
        version: number
    }



    const richDeveloper: Developer<AppleWatch> = {
        name: 'tuhin',
        computer: {
            brand: 'asus',
            model: '24-del',
            releaseYear: 2016

        },
        smartWatch: {
            brand: 'apple',
            model: 'zeed',
            version: 10.94
        }
    }



    //
}