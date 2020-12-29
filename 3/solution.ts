import * as fs from 'fs';

class Third {
    constructor() {
        fs.readFile('input', 'utf8', (err, data) => {
            if (err) throw err;

            const lines: string[] = [];

            for (let line of data.split('\r\n')) {
                lines.push(line);
            }

            console.log('PART 1: ', this.partOne(lines));
            console.log('PART 2: ', this.partTwo(lines));
        });
    }

    private partOne(lines: string[]): number {
        return this.getTrees(lines, 3, 1);
    }

    private partTwo(lines: string[]): number {
        return this.getTrees(lines, 1, 1) * this.partOne(lines) * this.getTrees(lines, 5, 1) * this.getTrees(lines, 7, 1 ) * this.getTrees(lines, 1, 2);
    }

    private getTrees(lines: string[], stepRight: number, stepDown: number): number {
        let trees = 0;
        let right = 0;

        for (let down = 0; down < lines.length; down += stepDown) {
            if (lines[down].charAt(right) === '#') {
                trees++;
            }
            right = (right + stepRight) % lines[0].length;
        }
        return trees;
    }
} 

new Third();