import { Component } from "react";

class FormCC extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    description: "",
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onInputChange = (e) => {
    const { holder, value } = e.target;
    console.log("OnInputChange", { name, value });

    this.setState({
      [holder]: value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onInputChange}
          />
        </div>
        <p>{this.state.name}</p>
      </div>


    );
  }
}

export default FormCC;
