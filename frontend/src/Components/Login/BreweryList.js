const BreweryList = ({ breweries, title }) => {
  return (
    <div className="brewery-list">
      <h2> {title} </h2>
      {breweries.map((brewery) => (
        <div className="brewery-preview" key={brewery.id}>
          <h2>{brewery.title}</h2>
          <p>Written by {brewery.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BreweryList;
