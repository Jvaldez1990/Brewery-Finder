import React, { Component, useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { baseUrl } from "../Shared/baseUrl";
import { CardBody } from "reactstrap";
import { DeleteOutlined, SmileOutlined, EditOutlined } from "@ant-design/icons";
import { BeerCardComponent } from "./BeerCardComponent";
import AddBeerModal, { addBeerModal } from "./AddBeerModal";
import UpdateBreweryComponent from "./UpdateBreweryComponent";
import { Link, Redirect, Switch, Route, withRouter } from "react-router-dom";

export class Brewery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewery: this.props.location.state,
      user: this.props.location.state,
      beers: [],
      isRoleBrewer: false,
    };
  }

  handleDelete = (id) => {
    id = Number(id);

    fetch(baseUrl + "/reviews/" + id, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => console.log(res));

    this.handleDeleteTwo(id);
  };

  handleDeleteTwo = (id) => {
    fetch(baseUrl + "/beers/" + id, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .then(console.log(id));
    // const newCats = this.state.cats.map((cat) => cat.filter((c) => c.catCardId !== id));
    const newBeerList = this.state.beers.filter((beer) => beer.id !== id);

    this.setState({ beers: newBeerList });
  };

  componentDidMount() {
    const { brewery } = this.state.brewery;
    const { user } = this.state.user;

    if (this.props.location.state.user.authorities[0].name == "ROLE_BREWER") {
      this.setState({ isRoleBrewer: true });
    }

    // console.log(this.props.location.state.user.authorities[0].name);
    fetch(baseUrl + `/breweries/${brewery.breweryId}/beers`)
      .then((response) => response.json())
      .then((response) => this.setState({ beers: response }));
  }

  handleModal = () => {
    <AddBeerModal brewery={this.props.location.brewery} isOpen={true} />;
  };

  updateBeers = (newBeer) => {
    this.setState({ beers: [...this.state.beers, newBeer] });
  };

  helperFuc = () => {
    this.props.history.push("/breweries");
  };

  breweryUpdate = (e) => {
    // this.setState({ brewery: e });
    this.helperFuc();
    // console.log(e);
    // this.props.location.state.liftState(e);
  };

  render() {
    const { brewery } = this.state.brewery;

    return (
      <div class="container col-9 mt-3">
        <div class="row">
          <div class="col">
            <h1>{brewery.name}</h1>
            <h2>{brewery.description}</h2>
            <h3>{brewery.address}</h3>
            <h3>{brewery.city}</h3>
            <h3>{brewery.zipcode}</h3>
            <h3>{brewery.hours}</h3>
            <h3>{brewery.phoneNumber}</h3>
            <h3>{brewery.websiteUrl}</h3>
          </div>
          <div class="col">
            <img width={500} src={brewery.breweryLogoUrl} class="img-fluid" alt="" />
            {/* <h1> {brewery.breweryId}</h1> */}
          </div>
        </div>{" "}
        {this.state.isRoleBrewer ? <AddBeerModal brewery={this.props.location.state.brewery} updateBeers={this.updateBeers} /> : <div></div>}
        {this.state.isRoleBrewer ? <UpdateBreweryComponent brewery={this.props.location.state.brewery} liftBrewery={this.breweryUpdate} /> : <div></div>}
        <Row gutter={[8, 8]} className="brewery-card-container">
          {this.state.beers.map((beer) => (
            <BeerCardComponent beer={beer} handleDelete={this.handleDelete} id={beer.id} user={this.props.location.state.user} />
          ))}
        </Row>
      </div>
    );
  }
}

export default withRouter(Brewery);
