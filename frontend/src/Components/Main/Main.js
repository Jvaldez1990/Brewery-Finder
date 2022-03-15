import { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import { addToken, deleteUser } from "../../Redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "../Home/Navbar";
import BreweriesComponent from "../BreweriesComponent";
import Brewery from "../Brewery";
import Beer from "../Beer";
import BreweryPage from "../add/update/BreweryPage"; 
import Footer from "./Footer";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    this.props.addToken("");
    this.props.deleteUser();
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/login">
              Brews Clues
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                {this.props.token.token !== undefined ? (
                  <div>
                    <Link to="/breweries">Breweries</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/login" onClick={this.handleLogout}>
                      Logout
                    </Link>
                    {/* <Redirect to="/breweries" /> */}
                  </div>
                ) : (
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <Link to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/register">Register</Link>
                    </li>
                    <li class="nav-item">
                      <Redirect to="/login" />
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/breweries/:id" component={Brewery} />
          <Route exact path="/beer/:id" component={Beer} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route path="/breweries" component={() => <BreweriesComponent user={this.props.user} />} />
          {/* <Route path="/BreweryPage" component={() => <BreweryPage />} /> */}
          <Route path="/home" component={this.props.token.token !== undefined ? () => <Home /> : null} />
          <Redirect to="/breweries" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
