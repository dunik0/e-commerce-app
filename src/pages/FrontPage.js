import React, { PropTypes, useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import ProductList from '../components/ProductList/ProductList';
import DefaultLayout from '../layouts/DefaultLayout';

const FrontPage = (props) => {
  const { products, categories } = useContext(ProductsContext);
  console.log(products);
  return (
    <DefaultLayout>
      <ProductList products={products} />
    </DefaultLayout>
  );
};

FrontPage.propTypes = {};

export default FrontPage;
