// Task 1:
function task1() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let input = parseInt(prompt("Enter an integer for index [" + i + "]:"));
        if (!isNaN(input))
            numbers.push(input);
    }
    console.log("Numbers: ", numbers);

    let searchNum = parseInt(prompt("Enter a number to search:"));
    if (!isNaN(searchNum)) {
        let count = 0;
        numbers.forEach(num => {
            if (num === searchNum)
                count++;
        });
        console.log("Number of occurrences of " + searchNum + ": " + count);
    } else {
        console.log("Invalid input for search number.");
    }
}

// Task 2:
function task2() {
    let numbers = [1, 2, 3, 4, 5, 6];
    console.log("Original Array: ", numbers);

    let insertNum = parseInt(prompt("Enter a number to insert:"));
    let index = parseInt(prompt("Enter the index to insert the number:"));
    if (!isNaN(insertNum) && !isNaN(index) && index >= 0 && index <= numbers.length) {
        numbers.splice(index, 0, insertNum);
        console.log("Modified Array: ", numbers)
    }
    else 
        console.log("Invalid input for insertion.");
}

// Task 3:
function task3() {
    let numbers = [1, 2, 3, 4, 5, 6];
    console.log("Original Array: ", numbers);

    let reversedNumbers = numbers.slice().reverse();
    console.log("Reversed Array: ", reversedNumbers);
}

// Task 4:
function task4() {
    function fillArrayWithRandomNumbers(length, min, max) {
        let array = [];
        for (let i = 0; i < length; i++)
            array.push(Math.floor(Math.random() * (max - min + 1)) + min);
        return array;
    }

    let randomNumbers = fillArrayWithRandomNumbers(10, 1, 100);
    let resultDiv = document.getElementById("task_4_result");
    resultDiv.innerText = "Random Numbers: " + randomNumbers.join(", ");
    console.log("Random Numbers: ", randomNumbers);
}

// Task 5:
function task5() {
    let numbers = [1, 2, 3, 4, 5, 6];
    console.log("Original Array: ", numbers);

    // a
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    console.log("Sum of values: ", sum);

    // b
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Even numbers: ", evenNumbers);

    // c
    numbers = numbers.map(num => num * 3);
    console.log("Multiplied numbers: ", numbers);

    // d
    let studentAlbumNumber = 69953; 
    numbers.push(studentAlbumNumber);
    let albumIndex = numbers.indexOf(studentAlbumNumber);
    console.log("Album index: ", albumIndex);

    // e
    sum = numbers.reduce((acc, val) => acc + val, 0)
    let average = sum / numbers.length;
    console.log("Arithmetic mean: ", average);

    // f
    let maxNumber = Math.max(...numbers);
    console.log("Maximum number: ", maxNumber);

    // g
    let selectedValue = parseInt(prompt("Enter a value to count its occurrences:"));
    (!isNaN(selectedValue)) 
        ? console.log("Occurrences of " + selectedValue + ": ",  occurrences = numbers.filter(num => num === selectedValue).length) 
        : console.log("Invalid input for selected value.");

}

// Task 6:
function task6() {
    function generateFibonacciSequence(length) {
        let sequence = [0, 1];
        for (let i = 2; i < length; i++) {
            let next = sequence[i - 1] + sequence[i - 2];
            sequence.push(next);
        }
        return sequence;
    }

    let fibonacciSequence = generateFibonacciSequence(100);
    console.log("Fibonacci Sequence: ", fibonacciSequence);
}

// Task 7:
function task7() {
    function sumOfTwoLargestNumbers(array) {
        let sortedArray = array.sort((a, b) => b - a);
        return sortedArray[0] + sortedArray[1];
    }

    let numbers = [1, 3, 2, 8, 10, 4, 7];
    console.log("Sum of two largest numbers: ", sumOfTwoLargestNumbers(numbers));
}

// Task 8:
function task8() {
    function removeDuplicates(array) {
        return [...new Set(array)];
    }

    let numbers = [1, 2, 2, 3, 5, 3, 4, 9, 0];
    console.log("Array with duplicates: ", numbers);
    console.log("Array without duplicates: ", removeDuplicates(numbers));
}

// Task 9:
function task9() {
    let number = parseInt(prompt("Enter a number to check if it's prime:"));
    (!isNaN(number)) 
        ? (isPrime(number)) 
            ? console.log(number + " is prime.") 
            : console.log(number + " is not prime.") 
        : console.log("Invalid input for number.")
}

function isPrime(number) {
    if (number < 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Task 10:
function task10() {
    let sentence = prompt("Enter a sentence to reverse:");
    console.log("Reversed Sentence:", reverseSentence(sentence));
}

function reverseSentence(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// Task 11:
function task11() {
    let length = parseInt(prompt("Enter the length of the random password:"));
    (!isNaN(length) && length > 0) 
        ? console.log("Random Password:", generateRandomPassword(length))
        : console.log("Invalid input for password length.");
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:;!#-+";
    let password = "";
    for (let i = 0; i < length; i++)
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    return password;
}



