/*****************************Task 10******************************/
class Product {
    constructor(name, price, availablePieces) {
        this.name = name;
        this.price = price;
        this.availablePieces = availablePieces;
    }
}

class ProductManagement {
    constructor() {
        this.productList = [];
    }

    addProduct(name, price, availablePieces) {
        const newProduct = new Product(name, price, availablePieces);
        this.productList.push(newProduct);
    }

    removeProduct(name) {
        this.productList = this.productList.filter(product => {
            return product.name !== name;
        });
    }

    changePrice(name, newPrice) {
        const product = this.productList.find(product => {
            return product.name === name;
        });
        if (product) {
            product.price = newPrice;
        } else {
            console.log("Product not found.");
        }
    }

    saveToJSON() {
        const jsonData = JSON.stringify(this.productList, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    loadFromJSON(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = e.target.result;
            this.productList = JSON.parse(jsonData);
            console.log("Products loaded from JSON file.");
        };
        reader.readAsText(file);
    }
}



/************************OUTPUTS************************/
console.log("Task 10")
const prodManagement = new ProductManagement();
prodManagement.addProduct("Product A", 150, 1);
prodManagement.addProduct("Product B", 20, 5);
console.log("List ->\n", prodManagement.productList);
prodManagement.removeProduct("Product A");
//prodManagement.changePrice("Product B", 250);
console.log("List(changed + //commented) ->\n", prodManagement.productList);
prodManagement.saveToJSON();
