const initialState = {
  cart: [
    {
      count: 0,

      product: {
        id: null,
      },
    },
  ],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADD_CART":
      const isAddedCart = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (isAddedCart !== -1) {
        const newCart = [...state.cart];
        newCart[isAddedCart] = {
          ...newCart[isAddedCart],
          count: newCart[isAddedCart].count + 1,
        };
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: 1, product: action.payload }],
        };
      }
    case "SET_ADD_PAYMENT":
      return {
        ...state,
        payment: action.payload,
      };
    case "SET_ADD_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
