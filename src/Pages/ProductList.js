import React from 'react';
import ProductCard from '../Components/ProductCard';

const ProductList = () => {

  const products = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    name: `Ürün ${index + 1}`,
    category: 'Graphic Design',
    department: 'English Department',
    price: Math.floor(Math.random() * 100) + 10, 
    color: ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="CommonThings flex flex-wrap gap-10">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          department={product.department}
          price={product.price}
          color={product.color}
        />
      ))}
    </div>
  );
};

export default ProductList;
