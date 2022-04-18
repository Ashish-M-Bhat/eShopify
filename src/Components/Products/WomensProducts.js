import React from 'react'
import { useSelector } from 'react-redux';
import DisplayProducts from './DisplayProducts';

// List all the products with category women's clothing

export default function WomensProducts() {
  const allProducts = useSelector(state => state.products.allProductsArray);
  const womensProducts = allProducts.filter(e => e.category === "women's clothing");

  return (
    <DisplayProducts productsToDisplay={womensProducts} />
  );
  }
