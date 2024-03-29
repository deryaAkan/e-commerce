import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";
const instance = axios.create({ baseURL });

export const fetchRoles = () => (dispatch) => {
  dispatch({ type: "global/fetchRoles/pending" });

  instance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      dispatch({ type: "global/fetchRoles/rejected", payload: err.message });
      console.error("Error fetching roles:", err);
    });
};

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const getRoles = () => (dispatch, getState) => {
  instance
    .get("/roles")
    .then((res) => {
      console.log("gelen data", res.data);
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.log("hata", err);
    });
};

export const getCategories = () => (dispatch, getState) => {
  instance
    .get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => {
      console.log("categories hata", err);
    });
};
