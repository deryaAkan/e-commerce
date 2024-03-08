const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_USER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_USER_ID":
      return {
        ...state,
        role_id: action.payload,
      };
    default:
      return state;
  }
};
