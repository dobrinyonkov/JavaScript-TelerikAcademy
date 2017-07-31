function solve(args) {
    var rowsCols = args[0].split(' '),
        bounds = {
            rows: +rowsCols[0],
            cols: +rowsCols[1]
        },
        matrix = args.slice(1)
            .map(function (line) {
                return line.split(' ');

            }),
        row = 0,
        col = 0,
        sum = 0,
        dir,
        deltas = {
            u: -1,
            d: +1,
            l: -1,
            r: +1
        },
        upDown,
        leftRight;

    while (true) {

        if (!matrix[row][col]) {
            return 'successed with ' + sum;
        }
        if (matrix[row][col] === 'used') {
            return 'failed at (' + row + ', ' + col + ')';
        }

        //update sum
        sum += Math.pow(2, row) + col;
        dir = matrix[row][col];
        matrix[row][col] = 'used';
        upDown = dir[0];
        leftRight = dir[1];
        //update row
        row += deltas[upDown];

        //update col
        col += deltas[leftRight];
    }

}