import axios from "axios";
import { localStorage } from "local-storage";

export const userRegister = user => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return axios
      .post("http://localhost:5000/auth/sign-up", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        dispatch(userSignIn(res.data.user));
        return resolve(res.data.user);
      })
      .catch(err => {
        if (err) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
          console.log(err.message);
          return reject(err);
        }
      });
    }) 
  };
};

export const getProfile = () => {
  return dispatch => {
    const token = window.localStorage.token;
    if (token) {
      return axios
        .get("http://localhost:5000/profile", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        })
        .then(res => dispatch(userSignIn(res.data.user)))
        .catch(err => {
          if (err) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            window.localStorage.removeItem("token");
          }
        });
    }
  };
};

export const userLogin = user => {
  console.log("userLogin", user);
  return dispatch => {
    return axios
      .post("http://localhost:5000/auth/sign-in", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        // console.log(res);
        window.localStorage.setItem("token", res.data.token);
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
  };
};

const userSignIn = user => ({
  type: "USER_LOGIN",
  payload: user
});

export const userLogout = () => ({
  type: "USER_LOGOUT"
});
