export const productsInitialState = {
  data: [],
  error: null,
  loading: false,
};

export default (state = productsInitialState, {type, payload}) => {
  console.warn('type', type);
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return {...state, loading: true};

    case 'LOAD_PRODUCTS_SUCCESS':
      return {...state, loading: false, data: payload};

    case 'LOAD_PRODUCTS_FAIL':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};
