const $triangleInputA          = document.querySelector("#a_side_input")
const $triangleInputB          = document.querySelector("#b_side_input")
const $triangleInputC          = document.querySelector("#c_side_input")
const $triangleResultBtn       = document.querySelector("#show_trianle_result")
const $resultTriangleContainer = document.querySelector("#result_triangle")
const $nameInput               = document.querySelector("#name_input")
const $nameTaskBtn             = document.querySelector("#name_task_result")
const $firstNumInput           = document.querySelector("#first_num")
const $secondNumInput          = document.querySelector("#second_num")
const $sumTaskBtn              = document.querySelector("#sum_task_result")
const $resultSumContainer      = document.querySelector("#sum_task_result_container")


$triangleResultBtn.addEventListener("click", function(event) {
    let a = parseFloat($triangleInputA.value);
    let b = parseFloat($triangleInputB.value);
    let c = parseFloat($triangleInputC.value);

    if(a + b > c) {
        let p_result = (a+b+c)/2
        let p = Math.sqrt(p_result*(p_result - a)*(p_result - b)*(p_result - c))
        $resultTriangleContainer.innerHTML = "Result -> " + p
    }
});


$nameTaskBtn.addEventListener("click", function(event) {
    $nameInput.value ? alert("Hello, " + $nameInput.value) : alert("Hello")
});

$sumTaskBtn.addEventListener("click", function(event) {
    let first_num = parseInt($firstNumInput.value);
    let second_num = parseInt($firstNumInput.value);
    $resultSumContainer.innerHTML = first_num + second_num;
});
