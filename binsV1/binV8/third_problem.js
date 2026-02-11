const n = Number(process.argv[2]) || 2;

products = [
  { name: "Apples", quantity_sold: 120 },
  { name: "Oranges", quantity_sold: 75 },
  { name: "Bananas", quantity_sold: 200 },
];

const sortedProducts = products.sort(
  (a, b) => b.quantity_sold - a.quantity_sold
);

const highestSoldProducts = sortedProducts.slice(0, n);

console.log(JSON.stringify({ data: highestSoldProducts }, null, 2));
