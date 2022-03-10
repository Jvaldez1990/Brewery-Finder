import React, { Component } from "react";

export class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.location.state,
    };
  }
  render() {
    const { beer } = this.state.beer;
    console.log(beer);
    return (
      <div>
        <img width={500} src={beer.imgUrl} alt="" />
        <h1>{beer.name}</h1>
        <h1>{beer.info}</h1>
        <h1>{beer.type}</h1>
        <h1>{beer.abv}</h1>
        <h1>{beer.rating}</h1>
      </div>
    );
  }
}

export default Beer;
