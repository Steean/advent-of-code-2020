import * as fs from 'fs';

class First {
    constructor() {
        fs.readFile('input', 'utf8', (err, data) => {
            if (err) throw err;
            
            let numbers: number[] = [];

            // convert to numbers
            for (let number of data.split('\n')) {
                numbers.push(+number);
            }

            console.log('PART 1: ', this.partOne(numbers, 2020));
            console.log('PART 2: ', this.partTwo(numbers, 2020));
        });
    }

    private partOne(numbers: number[], target: number) {
        for (let number of numbers) {
            const rest = target - number;
            if (numbers.includes(rest)) {
                return number*rest;
            } 
        }

        return 0;
    }

    private partTwo(numbers: number[], target: number) {
        for (let i = 0; i < numbers.length; i++) {
            const rest = target - numbers[i];
            let firstMultiplication = this.partOne(numbers.slice(i+1, numbers.length), rest);

            if (firstMultiplication) {
                return numbers[i] * firstMultiplication;
            }
        }
    }
}

new First();