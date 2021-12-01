const checkNumber = function (number) {
    if (number > 100) {
        return true;
    }
    else if (number <= 100) {
        return false;
    }
}

const functionPrinter = function (amountOfPrinting, functionName, makeRandomNumber) {
    for (let i = 0; i < amountOfPrinting; i++) {
        if (makeRandomNumber == true) {
            let randomNumber = Math.random() * 200;
            let result = functionName(randomNumber);
            console.log(result, randomNumber)
        } else {
            let result = functionName([Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200]);
            roundResultNumber = Math.round(result)
            console.log(roundResultNumber)
        }
    }

}
functionPrinter(50, checkNumber, true)

const AIBouncer = function (max, cur, age) {
    if (age < 18) {
        return "this is a club for adults";
    }
    else if (cur < max) {
        return "come in";
    }
    else if (cur >= max) {
        return "it's too busy now, come back later";
    }
}

let brendaResponse = AIBouncer(5, 2, 17)
console.log(brendaResponse)

let checkAverage = function (fiveNumbers) {
    if (fiveNumbers.length != 5) {
        console.log("wrong input")
    } else {
        let numberCounter = 0;
        fiveNumbers.forEach((e) => {
            numberCounter = numberCounter + e;
        });
        return numberCounter / fiveNumbers.length;
    }
}

functionPrinter(50, checkAverage, false)
