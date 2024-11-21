// Compile the file using the command: tsc product.ts
// Then run the compiled JavaScript file: node productCalculation.js
var rectangle = {
    name: "Sample Product",
    price: 0,
};
console.log(rectangle);
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
];
var totalPrice = calculateTotalPrice(products);
console.log("\nTotal Price: ".concat(totalPrice));
console.log("\nProducts Array:", products);
