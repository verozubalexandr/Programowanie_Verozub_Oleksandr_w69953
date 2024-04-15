/*********************************TASK 3********************************/
class Triangle{
    constructor(side, height, name) {
    this.side   = side;
    this.height = height;
    this.name   = name;
    }
    
    getArea () {
        return (0.5)*(parseFloat(this.side) * parseFloat(this.height))
    }

    info() {
        return "name ->   "   +  this.name    + "\n" +
               "height -> "   +  this.height  + "\n" +
               "side ->   "   +  this.side    + "\n" +
               "area ->   "   +  this.getArea()
    }

    static compareArea(triangle1, triangle2) {
        const area1 = triangle1.getArea();
        const area2 = triangle2.getArea();
        return area1 > area2 ? triangle1 : triangle2;
    }
}

const tr1 = new Triangle(22, 26, 'tr_1');
const tr2 = new Triangle(15, 19, 'tr_2');
const tr3 = new Triangle(8, 13, 'tr_3');



/*********************************TASK 4********************************/
class Trapezoid {
    constructor(height, base1, base2, name) {
        this.height = height;
        this.base1  = base1;
        this.base2  = base2;
        this.name   = name;
    }

    getArea() {
        return 0.5 * (this.base1 + this.base2) * this.height;
    }

    info() {
        return "name ->   "   +  this.name    + "\n" +
               "height -> "   +  this.height  + "\n" +
               "base 1 -> "   +  this.base1   + "\n" +
               "base 2 -> "   +  this.base2   + "\n" +
               "area ->   "   +  this.getArea()
    }

    changeName(newName) {
        this.name = newName;
    }
}

const trz1 = new Trapezoid(5, 4, 6, "trz1");
const trz2 = new Trapezoid(6, 3, 7, "trz2");
const trz3 = new Trapezoid(7, 5, 8, "trz3");



/*********************************TASK 5********************************/
function compareTriangleAndTrapezoid(triangle, trapezoid) {
    console.log(triangle.getArea() > trapezoid.getArea()
        ? "name -> " + triangle.name + "\n" + "area -> " + triangle.getArea()
        : "name -> " + trapezoid.name + "\n" + "area -> " + trapezoid.getArea());
}



/*********************************TASK 6********************************/
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    isSquare() {
        return this.length === this.width;
    }
}

function createRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    const rectangle = new Rectangle(length, width);
    displayRectangleInfo(rectangle);
}

function displayRectangleInfo(rectangle) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Length: ${rectangle.length}</p>
        <p>Width: ${rectangle.width}</p>
        <p>Area: ${rectangle.getArea()}</p>
        <p>Perimeter: ${rectangle.getPerimeter()}</p>
        <p>${rectangle.isSquare() ? 'This is a square.' : 'This is not a square.'}</p>
    `;
}



/******************************OUTPUTS*****************************/
console.log("Task 3");
console.log(tr1.info());
console.log(tr2.info());
console.log(tr3.info());
console.log("result of comparison tr1 and tr2 -> " + 
                Triangle.compareArea(tr1, tr2).name);
console.log("Task 4");
console.log(trz1.info());
console.log(trz2.info());
console.log(trz3.info());
trz1.changeName("trz1_v1");
console.log("trz1 (name changed) -> \n" + trz1.info())
console.log("Task 5");
console.log("result of comparison tr2 and trz2:");
compareTriangleAndTrapezoid(tr2, trz2)



