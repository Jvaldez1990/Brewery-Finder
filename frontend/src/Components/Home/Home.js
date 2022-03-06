import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBreweries } from "../../Redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBreweries: () => {
    dispatch(fetchBreweries());
  },
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    const menu = this.props.breweries.map((brewery) => {
      return <div>{brewery}</div>;
    });
    return <div>{menu}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
