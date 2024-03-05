const productReducer = (
  state = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: "NOT_FETCHED",
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
