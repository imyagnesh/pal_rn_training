const cartInitialState = {
  items: [],
  totalPrice: 0,
  totalTax: 0,
  loading: false,
  error: null,
};

const calculateTotalPrice = item => {
  return item.reduce((p, c) => p + c.price, 0);
};
const calculateTotalTax = item => {
  return item.reduce((p, c) => p + c.tax, 0);
};

export default (state = cartInitialState, {type, payload}) => {
  switch (type) {
    case 'ADD_ITEM_REQUEST':
      return {...state, loading: true};
    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
        items: payload,
        totalPrice: calculateTotalPrice(payload),
        totalTax: calculateTotalTax(payload),
      };

    case 'ADD_ITEM_FAIL':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case 'REMOVE_ITEM_REQUEST':
      return {...state, loading: true};

    case 'REMOVE_ITEM_SUCCESS': {
      // const index = state.item.findIndex(x => x.id === payload.id);
      const updatedList = state.item.filter(x => x.id !== payload.id);
      return {
        ...state,
        loading: false,
        items: updatedList,
        totalPrice: calculateTotalPrice(updatedList),
        totalTax: calculateTotalTax(updatedList),
      };
    }

    case 'REMOVE_ITEM_FAIL':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
