import React, { Component } from "react";
import axios from "axios";
import UserDetailsDialogComp from "../components/user/UserDetailsDialogComp";

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      firstName: this.props.currentUser.firstName,
      lastName: this.props.currentUser.lastName,
      email: this.props.currentUser.email
    };
  }

  onSubmit = e => {
    const token = window.localStorage.token;
    console.log("token:", token);
    const { id, firstName, lastName, email } = this.state;
    const putData = { id, firstName, lastName, email };
    if (token) {
      return axios
        .put("http://localhost:5000/profile", putData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        })
        .then(res => {
          this.props.getProfile();
          this.setState({
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            email: res.data.user.email
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <UserDetailsDialogComp
          currentUser={this.state}
          userUpdate={this.onSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default EditInfo;
