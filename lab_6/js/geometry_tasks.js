class Triangle{
    #name = "name";
    constructor(side, height, name) {
    this.side = side;
    this.height = height;
    this.name = name;
    }
    get getArea() {
        return (0.5)*(parseFloat(this.side) * parseFloat(this.height))
    };
    set name(newName) {
        this.#name = newName
    }
   }


const tr1 = new Triangle(22, 26, 'tr_1');

console.log("first triangle:")
console.log(tr1)
console.log("area -> " + tr1.getArea)
tr1.name = 12
console.log("first triangle (name changed):")
console.log(tr1)