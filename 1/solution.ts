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

            // part 1
            for (let number of numbers) {
                if (numbers.includes(2020-number)) {
                    console.log(number*(2020-number));
                    break;
                } 
            }

            // part 2
            // sleep - I will get back :-)
            
        });
    }
}

new First();