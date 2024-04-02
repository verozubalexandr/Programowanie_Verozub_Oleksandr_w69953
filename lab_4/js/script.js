/*********************************task 1************************************/
const timer = ms => new Promise(res => setTimeout(res, ms))
async function task1() {
    //a
    for (let i = 10; i > 0; i--) {
        console.log(i);
        await timer(1000);
    }
    console.log("Happy New Year!");

    // //b
    // let i = 10;
    // while (i > 0) {
    //     console.log(i);
    //     i--;
    //     await timer(1000)
    // }
    // console.log("Happy New Year!");
}


/***********************************task 2**********************************/
function factorial(n) {
    return (n === 0 || n === 1) ?  1 : n * factorial(n - 1)
}

function task2() {
    const factorial_num = parseFloat(prompt("enter n (n!) ->"));
    alert(factorial_num + "! = " + factorial(factorial_num))
}

/***********************************task 3**********************************/
const age = parseFloat(prompt("Your age ->"));
if (age < 18)
    window.location.href = "restricted_version.html"


/***********************************task 4**********************************/
function toggleColor(button) {
    const buttons = document.querySelectorAll('.fourth_task_btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
    });
    button.style.backgroundColor = '#40b9fe5e';
}


/***********************************task 5***********************************/
function toggleTitleVisibility() {
    element = document.getElementById("main_title");
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}


/************************************task 6*********************************/
function task6() {
    let listText = document.getElementById("sixth_task_input").value;
    if (listText) {
        document.getElementById("sixth_task_list").innerHTML += 
            "<li>" +
                listText +
            "</li>"
        document.getElementById("sixth_task_input").value = '';
    }
}


/************************************task 7********************************/
function task7() {
    let cellName = document.getElementById("seventh_task_input_name").value;
    let cellSurname = document.getElementById("seventh_task_input_surname").value;
    if (cellName && cellSurname) {
        document.getElementById("seventh_task_table").innerHTML += 
            "<tr>" +
                "<td>" +
                    cellName +
                "</td>" +
                "<td>" +
                    cellSurname +
                "</td>" +
            "</tr>"
        document.getElementById("seventh_task_input_surname").value = '';
        document.getElementById("seventh_task_input_name").value = '';
    }
}


/*********************************task 8**********************************/
function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius_input').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit_output').textContent = fahrenheit + "°F";
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit_input').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius_output').textContent = celsius + "°C";
}


/**********************************task 9*********************************/
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function calculateGCD() {
    const first_num = parseInt(document.getElementById('ninth_task_num_1').value);
    const second_num = parseInt(document.getElementById('ninth_task_num_2').value);
    document.getElementById('gcd_output').innerHTML = "NWD(" + 
    first_num + "; " + second_num + ") = " + gcd(first_num, second_num);
}


/*********************************task 10*********************************/
function add() {
    const firstNumCalc = parseFloat(document.getElementById('tenth_task_num_1').value);
    const secondNumCalc = parseFloat(document.getElementById('tenth_task_num_2').value);
    document.getElementById('tenth_task_result').textContent = firstNumCalc + "+" + secondNumCalc + "=" + (firstNumCalc + secondNumCalc);
}

function subtract() {
    const firstNumCalc = parseFloat(document.getElementById('tenth_task_num_1').value);
    const secondNumCalc = parseFloat(document.getElementById('tenth_task_num_2').value);
    document.getElementById('tenth_task_result').textContent = firstNumCalc + "-" + secondNumCalc + "=" + (firstNumCalc - secondNumCalc);
}

function multiply() {
    const firstNumCalc = parseFloat(document.getElementById('tenth_task_num_1').value);
    const secondNumCalc = parseFloat(document.getElementById('tenth_task_num_2').value);
    document.getElementById('tenth_task_result').textContent = firstNumCalc + "x" + secondNumCalc + "=" + (firstNumCalc * secondNumCalc);
}

function divide() {
    const firstNumCalc = parseFloat(document.getElementById('tenth_task_num_1').value);
    const secondNumCalc = parseFloat(document.getElementById('tenth_task_num_2').value);
    secondNumCalc === 0 ? document.getElementById('result').textContent = "Cannot divide by zero"
    : document.getElementById('tenth_task_result').textContent = firstNumCalc + "/" + secondNumCalc + "=" + (firstNumCalc / secondNumCalc);
}

function power() {
    const firstNumCalc = parseFloat(document.getElementById('tenth_task_num_1').value);
    const secondNumCalc = parseFloat(document.getElementById('tenth_task_num_2').value);
    document.getElementById('tenth_task_result').textContent = firstNumCalc + "^" + secondNumCalc + "=" + (Math.pow(firstNumCalc, secondNumCalc));
}
