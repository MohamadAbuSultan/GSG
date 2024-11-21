/*
  first of all you have to install TypeScript
  easy way to do that:
  open terminal "write cmd in the windows search bar"
  write this command: npm install -g typescript
  then you have to verify that the installation succeed
  write this command for that: tsc --version
  then go to line 10 :) subscribe my channel hahaa
*/
// Compile the file using the command: tsc productCalculation.js
// Then run the compiled JavaScript file: node productCalculation.js

interface Product {
  name: string;
  price: number;
}

const rectangle: Product = {
  name: "Sample Product",
  price: 0,
};

console.log(rectangle);

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];

const totalPrice = calculateTotalPrice(products);
console.log(`\nTotal Price: ${totalPrice}`);

console.log("\nProducts Array:", products);
