export const fetchStates = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialState = {
  product: {
    productList: {},
    totalProductCount: 0,
    pageCount: 1,
    activePage: 1,
    fetchState: fetchStates.NOT_FETCHED,
  },
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
      };
    case "SET_PRODUCT_COUNT":
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case "SET_PAGE_COUNT":
      return {
        ...state,
        pageCount: action.payload,
      };
    case "SET_ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
      };
    case "SET_FETCH_STATE":
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};
