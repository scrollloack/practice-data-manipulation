export {};

type Product = {
  name: string;
  quantity_sold: number;
};

// @ts-ignore
const n: number = Number(process.argv[3]) || 2;

const products: Product[] = [
  { name: "Apples", quantity_sold: 120 },
  { name: "Oranges", quantity_sold: 75 },
  { name: "Bananas", quantity_sold: 200 },
];

const findTopSoldProductsWithSort = (): Product[] => {
  return products
    .toSorted((a, b) => b.quantity_sold - a.quantity_sold)
    .slice(0, n);
};

const findTopSoldProductsWithLoop = (): Product[] => {
  const topSoldProducts: Product[] = [];

  for (let i = 0; i < products.length; i++) {
    const currentProduct: Product = products[i];

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

console.log(JSON.stringify({ data: findTopSoldProductsWithSort() }, null, 2));
console.log(JSON.stringify({ data: findTopSoldProductsWithLoop() }, null, 2));
