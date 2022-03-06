package com.techelevator.dao;

import java.util.ArrayList;
import java.util.List;

import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import com.techelevator.model.Beer;

@Component
public class JdbcBeerDao implements BeerDao {
    private JdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert simpleJdbcInsert;

    @Autowired
    public JdbcBeerDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("beers").usingGeneratedKeyColumns("beer_id");
    }

    @Override
    public List<Beer> getAllBeer() {
        List<Beer> allBeers = new ArrayList<>();
        String sqlSelectAllBeers = "SELECT * FROM beers";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlSelectAllBeers);

        while(results.next()) {
            Beer aBeer = mapRowToBeer(results);
            allBeers.add(aBeer);
        }
        return allBeers;
    }

    @Override
    public Beer getBeerByID(Long beerId) {
        Beer aBeer = new Beer();
        String sqlGetABeer = "SELECT * FROM beers WHERE beer_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABeer, beerId);

        while(results.next()) {
            aBeer = mapRowToBeer(results);
        }
        return aBeer;
    }

    @Override
    public void deleteBeer(Long beerId) {
        String sqlDeleteABeer = "DELETE FROM beers WHERE beer_id = ?";
        jdbcTemplate.update(sqlDeleteABeer, beerId);
    }

    @Override
    public Beer saveBeer(Beer newBeer) {
//        jdbcTemplate.update("INSERT INTO beers(name, abv, ibu, type, info, img_url, brewery_id, is_active) VALUES (?,?,?,?,?,?,?,?)",
//                newBeer.getName(), newBeer.getAbv(), newBeer.getType(), newBeer.getInfo(), newBeer.getImgUrl(), newBeer.getBreweryId(), newBeer.isActive());

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("name", newBeer.getName())
                .addValue("abv", newBeer.getAbv())
                .addValue("type", newBeer.getType())
                .addValue("info", newBeer.getInfo())
                .addValue("img_url", newBeer.getImgUrl())
                .addValue("brewery_id", newBeer.getBreweryId())
                .addValue("is_active", true);
        int id = (int) simpleJdbcInsert.executeAndReturnKey(parameters);

        Beer aBeer = new Beer();
        String sqlGetABeer = "SELECT * FROM beers WHERE beer_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABeer, id);

        while(results.next()) {
            aBeer = mapRowToBeer(results);
        }
        return aBeer;
    }

    @Override
    public Beer updateBeer(Beer aBeer) {
        String sqlUpdateBeer = "UPDATE beers SET name = ?, abv = ?, ibu = ?, info = ?, img_url = ?, brewery_id = ?, is_active = ?"
                + "WHERE beer_id = ?";
        jdbcTemplate.update(sqlUpdateBeer, aBeer.getName(), aBeer.getAbv(), aBeer.getInfo(), aBeer.getImgUrl(),
                aBeer.getBreweryId(), aBeer.isActive(), aBeer.getId());

        Beer returnBeer = new Beer();
        String sqlGetABeer = "SELECT * FROM beers WHERE beer_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABeer, aBeer.getId());

        while(results.next()) {
            returnBeer = mapRowToBeer(results);
        }
        return returnBeer;
    }

    private Beer mapRowToBeer(SqlRowSet row) {
        Beer newBeer = new Beer();
        newBeer.setId(row.getLong("beer_id"));
        newBeer.setName(row.getString("name").toUpperCase());
        newBeer.setAbv(row.getFloat("abv"));
        newBeer.setType(row.getString("type"));
        newBeer.setInfo(row.getString("info"));
        newBeer.setImgUrl(row.getString("img_url"));
        newBeer.setBreweryId(row.getLong("brewery_id"));
        newBeer.setActive(row.getBoolean("is_active"));

        return newBeer;
    }

    @Override
    public List<Beer> getBeerByBreweryID(Long breweryId) {
        List<Beer> allBeersByBreweryID = new ArrayList<>();
        String sqlGetBeerByBreweryId = "SELECT * FROM beers WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetBeerByBreweryId, breweryId);
        while(results.next()) {
            Beer aBeer = mapRowToBeer(results);
            allBeersByBreweryID.add(aBeer);
        }
        return allBeersByBreweryID;
    }
}