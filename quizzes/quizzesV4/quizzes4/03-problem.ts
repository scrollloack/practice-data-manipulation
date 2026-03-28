export {};

// @ts-ignore
const n: number = Number(process.argv[3]) || 2;

type Product = {
    name: string;
    quantity_sold: number;
};

const products: Product[] = [
    { name: 'Apples', quantity_sold: 120 },
    { name: 'Oranges', quantity_sold: 75 },
    { name: 'Bananas', quantity_sold: 200 },
];

const findTopSoldProductsWithSort = (): Product[] => {
    return products
        .toSorted((a, b) => b.quantity_sold - a.quantity_sold)
        .slice(0, n);
};

const findTopSoldProductsWithLoop = (): Product[] => {
    const topSoldProducts: Product[] = [];

    for (const product of products) {
        if (topSoldProducts.length < n) {
            topSoldProducts.push(product);
            topSoldProducts.sort((a, b) => b.quantity_sold - a.quantity_sold);
        } else if (
            product.quantity_sold > topSoldProducts[n - 1].quantity_sold
        ) {
            topSoldProducts[n - 1] = product;
            topSoldProducts.sort((a, b) => b.quantity_sold - a.quantity_sold);
        }
    }

    return topSoldProducts;
};

console.log(JSON.stringify({ data: findTopSoldProductsWithSort() }, null, 2));
console.log(JSON.stringify({ data: findTopSoldProductsWithLoop() }, null, 2));
