import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';
// import MetaHead from '../utils/helmet';

const Home = () => {

  return (
    <>
      {/* <MetaHead
        title="Productos"
        description="Encuentra todos tus productos favoritos"
        image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
        url="https://mocafood.xyz/"
      /> */}

      <Products products={initialState.products} />
    </>
  );
}

export default Home;