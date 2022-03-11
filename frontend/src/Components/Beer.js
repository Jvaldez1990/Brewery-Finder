import React, { Component } from "react";
import { baseUrl } from "../Shared/baseUrl";
import { Card, Row, Col, Button, Modal } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CardBody } from "reactstrap";
import { Form } from "react-bootstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

export class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.location.state,
      reviews: [],
      isModalVisible: false,
      name: "",
      description: "",
      rating: "",
    };
  }

  postComment() {
    const reviewObject = {
      description: this.state.description,
      userId: 1,
      beerId: this.state.beer.beer.id,
      rating: Number(this.state.rating),
      createTime: null,
      name: this.state.name,
    };
    fetch(baseUrl + "/reviews", {
      method: "POST",
      body: JSON.stringify(reviewObject),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: [...this.state.reviews, data] }));
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
    console.log(this.state.title);
    this.postComment();
  };

  componentDidMount() {
    fetch(baseUrl + "/reviews/" + this.state.beer.beer.id)
      .then((response) => response.json())
      .then((response) => this.setState({ reviews: response }));
  }
  render() {
    const { beer } = this.state.beer;
    return (
      <>
        <div>
          <img width={500} src={beer.imgUrl} alt="" />
          <h1>{beer.name}</h1>
          <h1>{beer.info}</h1>
          <h1>{beer.type}</h1>
          <h1>{beer.abv}</h1>
          <h1>{beer.rating}</h1>
        </div>
        <div>
          <Button onClick={this.toggleModal}>
            <EditOutlined />
            add review
          </Button>
          <Modal title="Add Review" visible={this.state.isModalVisible} onCancel={this.toggleModal} onOk={this.handleSubmit}>
            <Form>
              <label>Title</label>
              <br />
              <input type="text" id="title" name="title" onChange={(e) => this.setState({ name: e.target.value })} required />
              <br />
              <label>Description</label>
              <br />
              <textarea
                name="description"
                id="description"
                cols="50"
                rows="6"
                onChange={(e) => this.setState({ description: e.target.value })}
              ></textarea>
              <br />
              <label>Rating</label>
              <br />
              <input type="number" id="rating" name="rating" onChange={(e) => this.setState({ rating: e.target.value })} />
            </Form>
          </Modal>
          <Row gutter={[16, 16]} className="brewery-card-container">
            {this.state.reviews.map((review) => (
              <Col xs={24} sm={12} lg={6} className="brewery-card" key={review.id}>
                {/* <Link
                  to={{
                    pathname: `/breweries/${location.breweryId}`,
                    state: {
                      brewery: location,
                    },
                  }}
                > */}
                <Card
                  className="bg-info"
                  title={`${review.name}`}
                  //   extra={<img width={100} className="brewery-image" src={review.breweryLogoUrl} />}
                  hoverable
                >
                  <CardBody>{review.description}</CardBody>
                </Card>
                {/* </Link> */}
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}

export default Beer;