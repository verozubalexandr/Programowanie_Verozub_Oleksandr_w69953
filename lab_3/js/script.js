// Task 2
function task2() {
    alert("Hello World!");
}

// Task 3
function task3() {
    let a = 10;
    let b = 20;
    let c = 23.2;

    // a.
    alert("a + b = " + (a + b));
    alert("a - b = " + (a - b));
    alert("a * b = " + (a * b));
    alert("a / b = " + (a / b));

    // b.
    console.log("a + b = " + (a + b));
    console.log("a - b = " + (a - b));
    console.log("a * b = " + (a * b));
    console.log("a / b = " + (a / b));

    // c.
    document.getElementById("result").innerHTML = `
        <p>a + b = ${a + b}</p>
        <p>a - b = ${a - b}</p>
        <p>a * b = ${a * b}</p>
        <p>a / b = ${a / b}</p>
    `;
}

// Task 4
function task4() {
    console.log("liczby parzyste od 0 do 100")
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// Task 5
function task5() {
    function calculateTriangleArea(side1, side2, side3) {
        if (side1 + side2 > side3) {
            const semiPerimeter = (side1 + side2 + side3) / 2;
            const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
            return area;
        } else {
            return "Not a triangle"
        }
    }

    const triangleArea = calculateTriangleArea(3, 4, 5);
    console.log("Task 5: Triangle Area: " + triangleArea)
    document.getElementById("result").innerHTML = "Task 5: Triangle Area: " + triangleArea;
}

// Task 6
function task6() {
    const userName = prompt("Please enter your name:");
    alert("Hello, " + userName + "!");
}

// Task 7
function task7() {
    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));
    const sum = num1 + num2;
    document.getElementById("result").innerHTML = "Sum of the two numbers: " + sum;
}

// Task 8
function task8() {
    const x = parseFloat(prompt("Enter the first number:"));
    const y = parseFloat(prompt("Enter the second number:"));
    const z = parseFloat(prompt("Enter the third number:"));
    const maxNumber = Math.max(x, y, z);
    console.log("Task 8: The maximum number is: " + maxNumber)
    document.getElementById("result").innerHTML = "Task 8: The maximum number is: " + maxNumber;
}

// Task 9
function task9() {
    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    const numA = parseInt(prompt("Enter the first integer:"));
    const numB = parseInt(prompt("Enter the second integer:"));
    const greatestCommonDivisor = gcd(numA, numB);
    alert("The greatest common divisor is: " + greatestCommonDivisor);
}

// Task 11
function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 101);
    let attempts = 0;

    return function() {
        const userGuess = parseInt(document.getElementById("guess_input").value);
        attempts++;
        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            location.reload(); // Reload the page for a new game
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
}

const guessNumberFunc = guessNumber();

function task11() {
    document.getElementById("result").innerHTML = `
        <p>Task 11: Try to guess a number between 0 and 100:</p>
        <input type="number" id="guess_input">
        <button onclick="guessNumberFunc()">Check</button>
    `;
}


// Task 10
function displayCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("result_time").innerHTML = `<p>Current time: ${time}</p>`;
}

setInterval(displayCurrentTime, 1000); // Automatically displaying current time
