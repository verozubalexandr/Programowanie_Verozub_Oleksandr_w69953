const $secondTaskInput  = document.querySelector("#task_2_input")
const $secondTaskAnswer = document.querySelector("#task_2_answer")

let ans = 1;

function recurrention(y) {
    if (y != 1) {
        ans *= y;
        y -= 1;
        recurrention(y)
     } else {
        $secondTaskAnswer.innerHTML = ans;
        return
     }
}

$secondTaskInput.addEventListener("input", function(event) {
    $secondTaskAnswer.innerHTML = "";
    ans = 1;
    recurrention(recurrention(parseFloat($secondTaskInput.value)))
});

