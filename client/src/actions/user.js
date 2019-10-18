import axios from "axios";

export const userRegister = user => dispatch =>
  new Promise((resolve, reject) =>
    axios
      .post("http://localhost:5000/auth/sign-up", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        // eslint-disable-next-line no-use-before-define
        dispatch(userSignIn(res.data.user));
        return resolve(res.data.user);
      })
      // eslint-disable-next-line consistent-return
      .catch(err => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err.message);
          return reject(err);
        }
      })
  ); // eslint-disable-next-line consistent-return
export const getProfile = () => async dispatch => {
  const { token } = window.localStorage;
  if (token) {
    try {
      const res = await axios.get("http://localhost:5000/profile", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      });
      // eslint-disable-next-line no-use-before-define
      return dispatch(userSignIn(res.data.user));
    } catch (err) {
      if (err) {
        // An error will occur if the token is invalid.
        // If this happens, you may want to remove the invalid token.        window.localStorage.removeItem('token');
      }
    }
  }
};
export const userLogin = user => dispatch =>
  axios
    .post("http://localhost:5000/auth/sign-in", user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => {
      window.localStorage.setItem("token", res.data.token);
      // eslint-disable-next-line no-use-before-define
      dispatch(userSignIn(res.data.user));
    })
    .catch(err => {
      if (err.message) {
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
        console.log(err.message);
      }
    });

const userSignIn = user => ({
  type: "USER_LOGIN",
  payload: user
});

export const userLogout = () => ({
  type: "USER_LOGOUT"
});
