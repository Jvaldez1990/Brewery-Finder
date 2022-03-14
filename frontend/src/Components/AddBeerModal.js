import React, { Component } from "react";
import { Modal, Form, Input, Buttonl } from "antd";
import { DeleteOutlined, SmileOutlined, EditOutlined } from "@ant-design/icons";
import { baseUrl } from "../Shared/baseUrl";

export class AddBeerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      name: "",
      imgUrl: "",
      info: "",
      abv: "",
      type: "",
      ibu: 4.2,
      active: true,
      userId: 1,
    };
  }
  postNewBeer = () => {
    const BeerObject = {
      info: this.state.info,
      breweryId: this.props.brewery.breweryId,
      imgUrl: this.state.imgUrl,
      abv: Number(this.state.abv),
      type: this.state.type,
      name: this.state.name,
      active: this.state.active,
    };

    fetch(baseUrl + "/addBeer", {
      method: "POST",
      body: JSON.stringify(BeerObject),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => this.props.updateBeers(data));

    // this.props.updateBeers(BeerObject);
    // console.log(BeerObject);
  };

  handleSubmit = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
    this.postNewBeer();
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleModal}>
          <EditOutlined /> Add A New Beer
        </button>
        <Modal
          title="Add A New Beer"
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

export default AddBeerModal;
