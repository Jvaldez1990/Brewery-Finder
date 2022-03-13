import React, { Component, useState } from "react";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { baseUrl } from "../Shared/baseUrl";
import AddBeer from "./add/update/AddBeer";
import { CardBody } from "reactstrap";

export class Brewery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewery: this.props.location.state,
      user: this.props.location.state,
      beers: [],
    };
  }

  componentDidMount() {
    const { brewery } = this.state.brewery;
    const { user } = this.state.user;
    console.log(this.props.location.state.user);
    console.log(this.props.location.state.brewery);
    fetch(baseUrl + `/breweries/${brewery.breweryId}/beers`)
      .then((response) => response.json())
      .then((response) => this.setState({ beers: response }));
  }

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
        </div>
        <Row gutter={[8, 8]} className="brewery-card-container">
          {this.state.beers.map((beer) => (
            <Col xs={24} sm={12} lg={6} className="brewery-card" key={beer.id}>
              <Link
                to={{
                  pathname: `/beer/${beer.id}`,
                  state: {
                    beer: beer,
                    user: this.props.location.state,
                  },
                }}
              >
                <Card title={`${beer.name}`} hoverable>
                  {" "}
                  <CardBody>{<img width={200} height={100} className="" src={beer.imgUrl} />}</CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Brewery;
