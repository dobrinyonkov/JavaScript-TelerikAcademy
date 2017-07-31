function solve(args) {
    let heights = args[0].split(' ').map(Number);

    let result = 0;

    for (var i = 2; i < heights.length - 2; i += 1) {
        if (heights[i - 1] > heights[i - 2] &&
            heights[i - 1] > heights[i] &&
            heights[i + 1] > heights[i] &&
            heights[i + 1] > heights[i + 2]) {

            result += heights[i];

        }
    }

    console.log(result);
}