const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPerfect(num) {
    if (num <= 1) {
        return false;
    }

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum = sum + i;

            if (i != num / i) {
                sum = sum + num / i;
            }
        }
    }

    return sum == num;
}

rl.question("Enter a number: ", function(input) {

    let num = parseInt(input);

    if (isPerfect(num)) {

        console.log(num + " is a Perfect number.");

    } else {

        let nearest = num - 1;

        while (nearest > 0 && !isPerfect(nearest)) {
            nearest--;
        }

        console.log(num + " is not a Perfect number.");

        if (nearest > 0) {

            console.log(
                "Nearest Perfect number less than " +
                num + " is " + nearest
            );

        } else {

            console.log(
                "There is no Perfect number less than " + num
            );
        }
    }

    rl.close();
});