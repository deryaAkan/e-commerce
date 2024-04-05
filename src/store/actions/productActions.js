import axios from "axios";
import { fetchStates } from "../reducers/productReducer";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const getProducts = () => async (dispatch, getState) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  instance
    .get("/products")
    .then((res) => {
      dispatch(pageCountSetter(res.data));
      dispatch(productListSetter(res.data.products));
    })
    .catch((err) => {
      dispatch({
        type: "product/fetchProductList/rejected",
        payload: err.message,
      });
      console.error("Error fetching product list:", err);
    });
};

export const productActions = {
  setProductList: "SET_PRODUCT_LIST",
  setProductCount: "SET_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  setFetchState: "SET_FETCH_STATE",
};

export const productListSetter = (products) => ({
  type: productActions.setProductList,
  payload: products,
});

export const fetchStateSetter = (fetchState) => ({
  type: productActions.setFetchState,
  payload: fetchState,
});

export const productCountSetter = (productCount) => ({
  type: productActions.setProductCount,
  payload: productCount,
});

export const pageCountSetter = (pageCount) => ({
  type: productActions.setPageCount,
  payload: pageCount,
});

export const setActivePage = (activePage) => ({
  type: productActions.setActivePage,
  payload: activePage,
});
