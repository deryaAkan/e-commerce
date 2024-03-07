export const userActions = {
  setUserName: "SET_USER_NAME",
  setUserEmail: "SET_USER_EMAIL",
  setUserId: "SET_USER_ID",
};

export const updateUserName = (name) => ({
  type: "SET_USER_NAME",
  payload: name,
});

export const updateUserEmail = (email) => ({
  type: "SET_USER_EMAIL",
  payload: email,
});

export const setUserId = (role_id) => ({
  type: "SET_USER_ID",
  payload: role_id,
});
