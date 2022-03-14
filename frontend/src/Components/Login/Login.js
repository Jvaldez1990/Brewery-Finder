import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToken, addUser } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";
import Card from "../../Shared/Card";

const mapDispatchToProps = (dispatch) => ({
  addToken: () => dispatch(addToken()),
  addUser: () => dispatch(addUser()),
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

  handleLogin = async () => {
    const data = { username: this.state.username, password: this.state.password };

    const userWithToken = await axios.post(baseUrl + "/login", data);

    await this.props.dispatch(addToken(userWithToken.data.token));
    await this.props.dispatch(addUser(userWithToken.data.user));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <Card>
            <h1>Please Sign In</h1>
            <form>
              <div class="row mb-3">
                <label class="sr-only col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                    v-model="user.username"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label class="sr-only col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <Link to="/register">Need an account?</Link>
              <br />
              <Link to="/breweries">
                <button type="submit" class="btn btn-primary" onClick={this.handleLogin}>
                  Sign in
                </button>
              </Link>
            </form>
          </Card>
          <div class="col"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(Login));
