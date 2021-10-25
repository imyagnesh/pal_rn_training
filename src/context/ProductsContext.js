import React, {createContext, useReducer} from 'react';
import productsReducer, {
  productsInitialState,
} from '../reducers/productsReducer';

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  const loadProducts = async () => {
    try {
      dispatch({type: 'LOAD_PRODUCTS_REQUEST'});
      //API
      dispatch({type: 'LOAD_PRODUCTS_SUCCESS', payload: []});
    } catch (error) {
      dispatch({type: 'LOAD_PRODUCTS_FAIL', payload: error});
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productsState: state,
        loadProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
