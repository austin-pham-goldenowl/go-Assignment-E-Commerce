const initialState = {
  currentUser: null
};

export default function logIn(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("r u",action.payload);
      return { ...state, currentUser: action.payload };
    case "USER_LOGOUT":
      window.localStorage.removeItem("token")
      return { ...state, currentUser: null };
    default:
      return state;
  }
}
