export const storeActions = {
  setStore: "SET_STORE",
};

export const setStoreCreator = (store) => ({
  type: storeActions.setStore,
  payload: store,
});
