import React, { Component } from "react";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { baseUrl } from "../Shared/baseUrl";

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
      <div>
        {/* <h1> {brewery.breweryId}</h1> */}
        <img width={500} src={brewery.breweryLogoUrl} alt="" />
        <h1>{brewery.name}</h1>
        <h1>{brewery.description}</h1>
        <h1>{brewery.address}</h1>
        <h1>{brewery.city}</h1>
        <h1>{brewery.zipcode}</h1>
        <h1>{brewery.hours}</h1>
        <h1>{brewery.phoneNumber}</h1>
        <h1>{brewery.websiteUrl}</h1>
        <br />
        <Row gutter={[16, 16]} className="brewery-card-container">
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
                <Card title={`${beer.name}`} extra={<img width={100} className="brewery-image" src={beer.imgUrl} />} hoverable></Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Brewery;
