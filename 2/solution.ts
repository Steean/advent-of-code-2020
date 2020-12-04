import * as fs from 'fs';

class Second {
    constructor() {
        fs.readFile('input', 'utf8', (err, data) => {
            if (err) throw err;
            
            const lines: string [] = []; 

            for (let line of data.split('\r\n')) {
                lines.push(line);
            }

            let valids: number = 0;

            for (let line of lines) {
                const splitted = line.replace(':', '').split(' ');
                const min: number = +splitted[0].split('-')[0]
                const max: number = +splitted[0].split('-')[1]
                const letter: string = splitted[1];
                const password: string = splitted[2]; 

                const count = password.match(new RegExp(letter, 'g')) ? password.match(new RegExp(letter, 'g')).length : 0; 

                if (count >= min && count <= max ) {
                    valids++;
                }
            }

            console.log(valids);
        });
    }
}

new Second();