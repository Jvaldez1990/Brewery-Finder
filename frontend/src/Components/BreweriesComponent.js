import React, { Component } from "react";
import { baseUrl } from "../Shared/baseUrl";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

export class BreweriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    fetch(baseUrl + "/breweries")
      .then((response) => response.json())
      .then((response) => this.setState({ breweries: response }));
  }

  render() {
    // const { breweries } = this.state;

    return (
      <Row gutter={[16, 16]} className="brewery-card-container">
        {this.state.breweries.map((location) => (
          <Col xs={24} sm={12} lg={6} className="brewery-card" key={location.id}>
            <Link
              to={{
                pathname: `/breweries/${location.breweryId}`,
                state: {
                  brewery: location,
                  user: this.props.user,
                },
              }}
            >
              <Card
                title={`${location.name}`}
                extra={<img width={100} className="brewery-image" src={location.breweryLogoUrl} />}
                hoverable
              ></Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default BreweriesComponent;
