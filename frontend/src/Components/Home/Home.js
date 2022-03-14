import { Link } from "react-router-dom";
import { useState } from "react";
import BreweryList from "../Login/BreweryList";

const Home = () => {
  const [breweries, setBreweries] = useState([
    { title: "Westlake Brewing Company", body: "lorem ipsum...", breweryReview: "5", beerRating: "5", author: "Eboni", id: 1 },
    { title: "Pegasus City Brewery", body: "lorem ipsum...", breweryReview: "4", beerRating: "2", author: "Jose", id: 2 },
    { title: "Happy Hippie Brewing Co.", body: "lorem ipsum...", breweryReview: "3", beerRating: "3", author: "Gerald", id: 3 },
    { title: "Union Bear Brewing Company", body: "lorem ipsum...", breweryReview: "4", beerRating: "5", author: "Smith", id: 4 },
  ]);
  // let name = 'Eboni';

  const [name, setName] = useState("Eboni");
  const [age, setAge] = useState(24);

  const handleClick = () => {
    setName("Jose");
    setAge(30);
  };

  <BreweryList breweries={breweries.filter((brewery) => brewery.rating === "5")} title="Top Rated Brews" />;

  return (
    <div className="home">
      <BreweryList breweries={breweries} title="All Breweries" />
      <BreweryList breweries={breweries.filter((brewery) => brewery.beerRating === "5")} title="Top Rated Brews" />

      {breweries.map((brewery) => (
        <div className="brewery-preview" key={brewery.id}>
          <h2>{brewery.title}</h2>
          <p>Written by {brewery.author}</p>
        </div>
      ))}
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Home;
