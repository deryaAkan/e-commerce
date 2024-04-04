export const productActions = {
  setProductList: "SET_PRODUCT_LIST",
  setProductCount: "SET_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  setFetchState: "SET_FETCH_STATE",
};

export const setProductList = (products) => ({
  type: productActions.setProductList,
  payload: products,
});

export const setFetchState = (fetchState) => ({
  type: productActions.setFetchState,
  payload: fetchState,
});

export const setProductCount = (productCount) => ({
  type: productActions.setProductCount,
  payload: productCount,
});

export const setPageCount = (pageCount) => ({
  type: productActions.setPageCount,
  payload: pageCount,
});

export const setActivePage = (activePage) => ({
  type: productActions.setActivePage,
  payload: activePage,
});
