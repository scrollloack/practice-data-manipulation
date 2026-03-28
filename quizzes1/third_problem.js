const n = Number(process.argv[3]) || 2;

const products = [
  { name: "Apples", quantity_sold: 120 },
  { name: "Oranges", quantity_sold: 75 },
  { name: "Bananas", quantity_sold: 200 },
];

const findTopSoldProductsWithSort = (products) => {
  const topSoldProducts = products
    .toSorted((a, b) => b.quantity_sold - a.quantity_sold)
    .slice(0, n);

  return topSoldProducts;
};

const findTopSoldProductsWithLoop = (products) => {
  const topSoldProducts = [];

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];

    if (topSoldProducts.length < n) {
      topSoldProducts.push(currentProduct);
      topSoldProducts.sort((a, b) => b.quantity_sold - a.quantity_sold);
    } else if (
      currentProduct.quantity_sold > topSoldProducts[n - 1].quantity_sold
    ) {
      topSoldProducts[n - 1] = currentProduct;
      topSoldProducts.sort((a, b) => b.quantity_sold - a.quantity_sold);
    }
  }

  return topSoldProducts;
};

console.log(
  JSON.stringify({ data: findTopSoldProductsWithSort(products) }, null, 2),
);
console.log(
  JSON.stringify({ data: findTopSoldProductsWithLoop(products) }, null, 2),
);
