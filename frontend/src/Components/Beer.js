import React, { Component } from "react";
import { baseUrl } from "../Shared/baseUrl";
import { Card, Row, Col, Button, Modal } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { CardBody } from "reactstrap";
import { Form } from "react-bootstrap";
import { Link, Redirect, Switch, Route, withRouter } from "react-router-dom";

export class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.location.state,
      user: this.props.location.state,
      reviews: [],
      isModalVisible: false,
      name: "",
      description: "",
      rating: "",
      isRoleUser: false,
      ratingTotal: 0,
      numberOfReviews: 1,
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
    // console.log(this.state.title);
    this.postComment();
  };

  componentDidMount() {
    console.log(this.props.location.state.beer);
    console.log(this.props.location.state.user);
    // console.log(this.state.user.user.user.authorities[0].name);

    if (this.state.user.user.authorities[0].name == "ROLE_USER") {
      this.setState({ isRoleUser: true });
    }

    fetch(baseUrl + "/reviews/" + this.state.beer.beer.id)
      .then((response) => response.json())
      .then((response) => this.setState({ reviews: response }));
  }
  render() {
    let scoreTotal = 0;
    let scoreNum = 0;

    for (let index = 0; index < this.state.reviews.length; index++) {
      scoreTotal += this.state.reviews[index].rating;
      scoreNum++;
    }

    const { beer } = this.state.beer;
    return (
      <div className="container col-9 mt-3">
        <div>
          <img width={300} src={beer.imgUrl} className="fluid" />
          <h1>{beer.name}</h1>
          <h1>{beer.info}</h1>
          <h1>{beer.type}</h1>
          <h1>{beer.abv}</h1>
        </div>
        <div>
          {this.state.isRoleUser ? (
            <button onClick={this.toggleModal}>
              <EditOutlined />
              add review
            </button>
          ) : (
            <div></div>
          )}
          <Modal title="Add Review" visible={this.state.isModalVisible} onCancel={this.toggleModal} onOk={this.handleSubmit}>
            <Form>
              <label>Title</label>
              <br />
              <input type="text" id="title" name="title" onChange={(e) => this.setState({ name: e.target.value })} required />
              <br />
              <label>Description</label>
              <br />
              <textarea name="description" id="description" cols="50" rows="6" onChange={(e) => this.setState({ description: e.target.value })}></textarea>
              <br />
              <label>Rating</label>
              <br />
              <input type="number" id="rating" name="rating" min="1" max="5" onChange={(e) => this.setState({ rating: e.target.value })} />
            </Form>
          </Modal>
          <Row gutter={[16, 16]} className="brewery-card-container">
            {this.state.reviews.map((review) => (
              <Col xs={24} sm={12} lg={6} className="brewery-card" key={review.id}>
                <Card className="" bodyStyle={{ backgroundColor: "#A76B09" }} title={`${review.name}`} hoverable>
                  <CardBody>
                    {review.description}
                    {/* {(scoreTotal += review.rating)}
                    {scoreNum++} */}
                    {/* {this.setState({ ratingTotal: this.state.ratingTotal + review.rating })}
                    {this.setState({ numberOfReviews: this.state.numberOfReviews + 1 })} */}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* <h1>Average Rating: {this.state.ratingTotal / this.state.numberOfReviews}</h1> */}
        <h1>Average Rating: {scoreTotal / scoreNum}</h1>
      </div>
    );
  }
}

export default withRouter(Beer);
