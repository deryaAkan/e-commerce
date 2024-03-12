export const userActions = {
  setUserName: "SET_USER_NAME",
  setUserEmail: "SET_USER_EMAIL",
  setUserId: "SET_USER_ID",
};

export const setUserName = (name) => ({
  type: "SET_USER_NAME",
  payload: name,
});

export const setUserEmail = (email) => ({
  type: "SET_USER_EMAIL",
  payload: email,
});

export const setUserRoleId = (role_id) => ({
  type: "SET_USER_ID",
  payload: role_id,
});
