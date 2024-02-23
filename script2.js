﻿const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    product.price = product.price * (1 - (15 / 100)); // Уменьшаем цену на 15%
});

console.log(products);
