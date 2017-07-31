function soleve(args) {
    var s = +args[0],
        i,
        j,
        k,
        count = 0;

    for (var i = 0; i <= s / 10; i++) {
        for (var k = 0; k <= s / 4; k++) {
            for (var j = 0; j <= s / 3; j++) {
                if ((i * 10 + k * 4 + j * 3) === s) {
                    count += 1;
                }
            }
        }
    }
    return count;
}