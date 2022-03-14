import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";
import { Link, Redirect, Switch, Route, withRouter } from "react-router-dom";
import { baseUrl } from "../Shared/baseUrl";
import { CardBody } from "reactstrap";
import { DeleteOutlined, SmileOutlined } from "@ant-design/icons";

export class BeerCardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoleBrewer: false,
    };
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  componentDidMount() {
    if (this.props.user.authorities[0].name == "ROLE_BREWER") {
      this.setState({ isRoleBrewer: true });
    }
  }

  render() {
    // const { beer } = this.props.beer;
    return (
      <Col xs={24} sm={12} lg={6} className="brewery-card" key={this.props.beer.id}>
        <Card
          bodyStyle={{ backgroundColor: "#A76B09" }}
          title={`${this.props.beer.name}`}
          extra={
            this.state.isRoleBrewer ? (
              <Button onClick={this.handleDelete}>
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
                pathname: `/beer/${this.props.beer.id}`,
                state: {
                  beer: this.props.beer,
                  user: this.props.user,
                },
              }}>
              {<img width={200} height={100} className="" src={this.props.beer.imgUrl} />}
            </Link>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withRouter(BeerCardComponent);
