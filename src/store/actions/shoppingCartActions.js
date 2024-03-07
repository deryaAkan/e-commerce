export const shoppingCartActions = {
  setAddCart: "SET_ADD_CART",
  setAddPayment: "SET_ADD_PAYMENT",
  setAddAddress: "SET_ADD_ADDRESS",
};

export const setAddCart = (cart) => ({
  type: "SET_ADD_CART",
  payload: cart,
});

export const setAddPayment = (payment) => ({
  type: "SET_ADD_PAYMENT",
  payload: payment,
});

export const setAddAddress = (address) => ({
  type: "SET_ADD_ADDRESS",
  payload: address,
});
