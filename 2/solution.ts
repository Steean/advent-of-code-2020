import * as fs from 'fs';

interface Line {
    first: number;
    second: number;
    letter: string;
    password: string;
}

class Second {
    constructor() {
        fs.readFile('input', 'utf8', (err, data) => {
            if (err) throw err;
            
            const lines: Line[] = []; 

            for (let line of data.split('\r\n')) {
                const splitted = line.replace(':', '').split(' ');
                lines.push({
                    first: +splitted[0].split('-')[0], 
                    second: +splitted[0].split('-')[1],
                    letter: splitted[1],
                    password: splitted[2]
                });
            }

            console.log('PART 1: ', this.partOne(lines));
            console.log('PART 2: ', this.partTwo(lines));
        });
    }

    private partOne(lines: Line[]): number {
        let valids: number = 0;

        for (let line of lines) {
            const count = line.password.match(new RegExp(line.letter, 'g')) ? line.password.match(new RegExp(line.letter, 'g')).length : 0; 

            if (count >= line.first && count <= line.second ) {
                valids++;
            }
        }        
        return valids;
    }

    private partTwo(lines: Line[]): number {
        let valids: number = 0;

        for (let line of lines) {
            if ((line.password[line.first-1] === line.letter && line.password[line.second-1] !== line.letter) 
                ||
                line.password[line.first-1] !== line.letter && line.password[line.second-1] === line.letter) {
                valids++;
            }
        }
        return valids;
    }
}

new Second();