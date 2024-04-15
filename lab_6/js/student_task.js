const student = {
    firstName: "Jan",
    lastName: "Kowalski",
    number: 30,
    marks: {
        math: 5,
        pe: 3,
        physics: 2
    },
    averageMark: function() {
        let avg = 0;
        marksList =  Object.values(this.marks)
        for (let mark of marksList)
            avg += parseFloat(mark);
        avg /= marksList.length;
        return avg;
    }
};

console.log("Task 2");
console.log("Average mark -> " + student.averageMark().toFixed(2));