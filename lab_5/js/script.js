function randArray(length, min, max) {
    let outputRandArray = [];
    for(let i = 0; i < length; i++) 
        outputRandArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    return outputRandArray;
}

function task1() {
    let listTask1 = [];
    for(let i = 0; i < 10; i++) 
        listTask1.push(prompt("enter list int element at index [" + i + "]"));
    console.log(listTask1);
    let search_num = prompt("enter number to search");
    console.log(
        listTask1.filter(element => search_num === element).length
        + " elements found");
}

function task2() {
    let listTask2 = [1, 2, 3, 4, 5, 6];
    console.log("array -> " + listTask2);
    let newElement = prompt("new element");
    let newElementIndex = prompt("new element index");
    listTask2.splice(newElementIndex, 0, newElement);
    console.log("new array -> " + listTask2);
}

function task3() {
    let listTask3 = [1, 2, 3, 4, 5, 6];
    let newList = [];
    console.log("array -> " + listTask3);
    listTask3.reverse();
    console.log("new array -> " + newList);
    // for(let i = listTask3.length - 1; i >= 0; i--)
    //     newList.push(listTask3[i]);
    // console.log("new array -> " + newList);
}

function task4() {
    console.log(randArray(10, 0, 10))
}

