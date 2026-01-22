const n = Number(process.argv[3]) || 2;

const products = [
  { name: "Apples", quantity_sold: 120 },
  { name: "Oranges", quantity_sold: 75 },
  { name: "Bananas", quantity_sold: 200 },
];

const topProducts = products
  .toSorted((a, b) => b.quantity_sold - a.quantity_sold)
  .slice(0, n);

console.log(JSON.stringify({ data: topProducts }, null, 2));
