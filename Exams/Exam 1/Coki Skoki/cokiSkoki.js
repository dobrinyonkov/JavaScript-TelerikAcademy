    function solve(args) {
        let numbersLength = +args[0];

        var numbers = new Array(numbersLength)
        for (var i = 0; i < numbersLength; i++) {
            numbers[i] = +args[i+1];
        }
        
        let result = 1;

        for (var i = 0; i <= numbers.length - 1; i += 1) {

            if (i === 0 && numbers[i] % 2 === 0) {
                result = 0;
            }

            if (numbers[i] % 2 === 0) {
                result += numbers[i];
                result %= 1024;
                i += 1;
            }
            else {
                result *= numbers[i];
                result %= 1024;
            }
        }
        console.log(result);
    }
