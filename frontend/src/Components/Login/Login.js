import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./Login.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToken, addUser } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(addToken(token)),
  addUser: (user) => dispatch(addUser(user)),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin = async (event) => {
    event.preventDefault();
    const data = { username: this.state.username, password: this.state.password };
    try {
      const response = await axios.post(baseUrl + "/login", data);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      this.props.addToken(token);
      this.props.addUser(user);
      this.props.history.push("/breweries");
    } catch (error) {
      this.setState({ error: "Invalid username or password" });
    }
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Please Sign In</h1>
          <form onSubmit={this.handleLogin}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" onChange={this.handleInputChange} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleInputChange} required />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <Link to="/register">Need an account?</Link>
            </div>
            {this.state.error && (
              <div className="alert alert-danger mt-3" role="alert">
                {this.state.error}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
