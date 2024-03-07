const initialState = {
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STORE":
      return {
        ...state,
        store: action.payload,
      };
    default:
      return state;
  }
};
