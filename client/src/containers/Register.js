import React, { Component } from "react";

import UserRegisterComp from "../components/user/UserRegisterComp";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.userRegister(this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <UserRegisterComp
          onChange={e => this.handleChange(e)}
          userRegister={this.onSubmit}
        />
      </div>
    );
  }
}

export default Register;
