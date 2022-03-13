import React, { Component, useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { baseUrl } from "../Shared/baseUrl";
import { CardBody } from "reactstrap";
import { DeleteOutlined, SmileOutlined } from "@ant-design/icons";
import { BeerCardComponent } from "./BeerCardComponent";

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
            <BeerCardComponent beer={beer} handleDelete={this.handleDelete} id={beer.id} user={this.props.location.state.user} />
          ))}
        </Row>
        {/* <Row gutter={[8, 8]} className="brewery-card-container">
          {this.state.beers.map((beer) => (
            <Col xs={24} sm={12} lg={6} className="brewery-card" key={beer.id}>
              <Card
                title={`${beer.name}`}
                extra={
                  this.state.isRoleBrewer ? (
                    <Button onClick={this.handleDelete(beer)}>
                      <DeleteOutlined />
                    </Button>
                  ) : (
                    <></>
                  )
                }
                hoverable>
                <CardBody>
                  <Link
                    to={{
                      pathname: `/beer/${beer.id}`,
                      state: {
                        beer: beer,
                        user: this.props.location.state,
                      },
                    }}>
                    {<img width={200} height={100} className="" src={beer.imgUrl} />}
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    );
  }
}

export default Brewery;
