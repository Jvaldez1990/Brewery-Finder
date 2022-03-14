import React, { Component } from "react";
import { DeleteOutlined, SmileOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Button } from "antd";
import { Link, Redirect, Switch, Route, withRouter } from "react-router-dom";
import { BreweriesComponent } from "./BreweriesComponent";

import { baseUrl } from "../Shared/baseUrl";

export class UpdateBreweryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      brewery: this.props.brewery,
      breweryId: this.props.brewery.breweryId,
      name: this.props.brewery.name,
      brewAddress: this.props.brewery.address,
      brewCity: this.props.brewery.city,
      brewZip: this.props.brewery.zipcode,
      brewPhone: this.props.brewery.phoneNumber,
      brewDesc: this.props.brewery.description,
      brewLogo: this.props.brewery.breweryLogoUrl,
      brewSite: this.props.brewery.websiteUrl,
      brewerId: this.props.brewery.userId,
      brewHours: this.props.brewery.hours,
    };
  }

  postNewBrewery = () => {
    const breweryObject = {
      breweryId: this.state.breweryId,
      name: this.state.name,
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
      method: "PUT",
      body: JSON.stringify(breweryObject),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => this.props.liftBrewery(data));

    // this.props.history.push("/breweries");
    // console.log(breweryObject);
    // this.props.liftBrewery(breweryObject);
  };

  handleSubmit = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
    this.postNewBrewery();
    // <Link to="/breweries"></Link>;
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.toggleModal}>
          <EditOutlined /> Change Brewery Details
        </Button>
        <Modal
          title="Update Brewery Info"
          visible={this.state.isModalVisible}
          onOk={this.handleSubmit}
          onCancel={this.toggleModal}
          okText="Submit"
          cancelText="Cancel">
          <div>
            <Form>
              <Form.Item label="Name">
                <Input type="text" id="name" name="name" onChange={(e) => this.setState({ name: e.target.value })} placeholder="Name" />
              </Form.Item>
              <Form.Item label="Type">
                <Input type="text" id="type" name="type" onChange={(e) => this.setState({ type: e.target.value })} placeholder="Type" />
              </Form.Item>
              <Form.Item label="Alcohol by volume">
                <Input type="text" id="abv" name="abv" onChange={(e) => this.setState({ abv: e.target.value })} placeholder="Alcohol by volume" />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  name="description"
                  id="description"
                  cols="50"
                  rows="6"
                  placeholder="Description"
                  onChange={(e) => this.setState({ info: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="Image Url">
                <Input type="text" id="imgUrl" name="imgUrl" onChange={(e) => this.setState({ imgUrl: e.target.value })} placeholder="Image Url" />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default withRouter(UpdateBreweryComponent);
