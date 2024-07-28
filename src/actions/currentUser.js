const ADD_CURRENT_USER = "ADD_CURRENT_USER";
const DELETE_CURRENT_USER = "DELETE_CURRENT_USER";

function addCurrentUser(username) {
  return {
    type: ADD_CURRENT_USER,
    payload: {
      username,
    },
  };
}

function deleteCurrentUser() {
  return {
    type: DELETE_CURRENT_USER,
  };
}

export {
  ADD_CURRENT_USER,
  DELETE_CURRENT_USER,
  addCurrentUser,
  deleteCurrentUser,
};
