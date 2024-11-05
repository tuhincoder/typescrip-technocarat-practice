{
    //
    const arrayOfNumbers: number[] = [1, 2, 3, 4]

    const arrayOfString: string[] = arrayOfNumbers.map((number) => number.toString())
    console.log(arrayOfString);

    // look up type 

    type AreaNumber2 = {
        height: number;
        width: number;
    }

    type AreaNumber3 = AreaNumber['height']
    type AreaNumber4 = AreaNumber['width']


    // map type 

    type AreaNumber = {
        height: number;
        width: number;
    }

    type AreaBoolean = {
        [key in keyof AreaNumber]: boolean;
    }


    type AriaString<T> = {
        [key in keyof T]: T[key]
    }


    const area1: AriaString<{ height: string; width: number }> = {
        height: '100',
        width: 50,
    }






    //
}