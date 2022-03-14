import React, { Component } from "react";
import { baseUrl } from "../Shared/baseUrl";
import { Card, Row, Col, Input, Modal } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Form } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Link, Redirect, Switch, Route, withRouter } from "react-router-dom";

export class BreweriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      breweries: [],
      isModalVisible: false,
      isRoleAdmin: false,
      breweryName: "",
      brewAddress: "",
      brewCity: "",
      brewZip: "",
      brewPhone: "",
      brewDesc: "",
      brewLogo: "",
      brewSite: "",
      brewerId: "",
      brewHours: "",
    };
  }

  postBrewery() {
    const breweryObject = {
      name: this.state.breweryName,
      address: this.state.brewAddress,
      city: this.state.brewCity,
      zipcode: this.state.brewZip,
      phoneNumber: this.state.brewPhone,
      description: this.state.brewDesc,
      breweryLogoUrl: this.state.brewLogo,
      userId: this.state.brewerId,
      hours: this.state.brewHours,
      websiteUrl: this.state.brewSite,
    };
    fetch(baseUrl + "/breweries", {
      method: "POST",
      body: JSON.stringify(breweryObject),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => this.setState({ breweries: [...this.state.breweries, data] }));
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  handleSubmit = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
    this.postBrewery();
  };

  componentDidMount() {
    fetch(baseUrl + "/breweries")
      .then((response) => response.json())
      .then((response) => this.setState({ breweries: response }));
    this.checkRole();
  }
  checkRole = () => {
    // console.log(this.props.user.authorities[0]);
    // const role = JSON.stringify(this.props.user.authorities[0]);
    // const checker = ({"name":"ROLE_ADMIN"})
    // console.log(role);
    // console.log("{ name: ROLE_ADMIN }");
    // console.log('{"name":"ROLE_ADMIN"}');

    // if ({"name":"ROLE_ADMIN"} == role) {
    //   this.setState({ isRoleAdmin: true });
    // }

    if (this.props.user.id == 2) {
      this.setState({ isRoleAdmin: true });
    }
  };
  liftBreweryState = (e) => {
    console.log(e);
  };

  render() {
    // const { breweries } = this.state;

    return (
      <div className="container col-10 mt-3">
        {this.state.isRoleAdmin ? (
          <button onClick={this.toggleModal}>
            <EditOutlined />
            add brewery
          </button>
        ) : (
          <div></div>
        )}

        <Modal title="Add Brewery" visible={this.state.isModalVisible} onCancel={this.toggleModal} onOk={this.handleSubmit}>
          <Form>
            <label>Brewery Name</label>
            <br />
            <input type="text" id="name" name="name" onChange={(e) => this.setState({ breweryName: e.target.value })} required />
            {/* <br />
            <label>Description</label>
            <br />
            <textarea
              name="description"
              id="description"
              cols="50"
              rows="6"
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea> */}
            <br />
            <label>Brewer Id</label>
            <br />
            <input type="number" id="brewerId" name="BrewerId" min="3" onChange={(e) => this.setState({ brewerId: e.target.value })} />
          </Form>
        </Modal>
        <Row gutter={[16, 16]} className="">
          {this.state.breweries.map((brewery) => (
            <Col xs={24} sm={12} lg={6} className="brewery-card" key={brewery.id}>
              <Link
                to={{
                  pathname: `/breweries/${brewery.breweryId}`,
                  state: {
                    brewery: brewery,
                    user: this.props.user,
                    // liftState: this.liftBreweryState,
                  },
                }}>
                <Card title={`${brewery.name}`} bodyStyle={{ backgroundColor: "#A76B09" }} hoverable>
                  <CardBody className="ml-4"> {<img width={200} height={150} className="brewery-image" src={brewery.breweryLogoUrl} />}</CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default withRouter(BreweriesComponent);
