import axios from "axios";
import { fetchStates } from "../reducers/productReducer";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const getProducts = () => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  instance
    .get("/products")
    .then((res) => {
      dispatch(pageCountSetter(res.data));
      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
    })
    .catch((err) => {
      dispatch({
        type: "product/fetchProductList/rejected",
        payload: err.message,
      });
      console.error("Error fetching product list:", err);
    });
};

export const getProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  instance
    .get(`/products?category=${categoryId}`)
    .then((res) => {
      dispatch(pageCountSetter(res.data));
      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      console.log("categıry ile gelen", res.data);
    })
    .catch((err) => {
      dispatch({
        type: "product/fetchProductList/rejected",
        payload: err.message,
      });
      console.error("Error fetching product list:", err);
    });
};

export const getProductsByFilter = (filterParams) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  instance
    .get(`/products?filter=${filterParams}`)
    .then((res) => {
      dispatch(pageCountSetter(res.data));
      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      console.log("filter ile gelen", res.data);
    })
    .catch((err) => {
      dispatch({
        type: "product/fetchProductList/rejected",
        payload: err.message,
      });
      console.error("Error fetching product list:", err);
    });
};

export const getSortedProducts = (sortParams) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  instance
    .get(`/products?sort=${sortParams}`)
    .then((res) => {
      dispatch(pageCountSetter(res.data));
      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      console.log("sort ile gelen", res.data);
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
