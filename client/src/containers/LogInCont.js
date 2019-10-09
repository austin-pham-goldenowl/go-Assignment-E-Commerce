import React from "react";
import UserAuthComp from "../components/user/UserAuthComp";

class LogInCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.userLogin(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <UserAuthComp handleChange={this.handleChange} onSubmit={this.onSubmit} />
    );
  }
}

export default LogInCont;
