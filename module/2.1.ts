let anything: any;
anything = 'web developer';

anything = 20;

(anything as number)


const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
        const converted = parseFloat(value) * 1000;
        return `The converted value is: ${converted}`
    }

    if (typeof value === 'number') {
        return value * 1000;
    }
}

const result1 = kgToGram(1000) as number;
const result2 = kgToGram("1000")


type CustomError = {
    message: string;
}

try {

} catch (error) {
    console.log((error as CustomError).message);
}

