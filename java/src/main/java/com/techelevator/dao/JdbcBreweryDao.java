package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBreweryDao implements BreweryDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Brewery> getAllBreweries(){
        List<Brewery> allBreweries = new ArrayList<>();
        String sqlGetAllBreweries = "SELECT * FROM breweries";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBreweries);

        while(results.next()) {
            Brewery aBrewery = mapRowToBrewery(results);
            allBreweries.add(aBrewery);
        }
        return allBreweries;
    }


    private Brewery mapRowToBrewery(SqlRowSet row) {
        Brewery newBrewery = new Brewery();
        newBrewery.setBreweryId(row.getInt("brewery_id"));
        newBrewery.setName(row.getString("name"));
        newBrewery.setAddress(row.getString("address"));
        newBrewery.setCity(row.getString("city"));
        newBrewery.setZipcode(row.getString("zipcode"));
        newBrewery.setPhoneNumber(row.getString("phone_number"));
        newBrewery.setDescription(row.getString("description"));
        newBrewery.setBreweryLogoUrl(row.getString("brewery_logo_url"));
        newBrewery.setWebsiteUrl(row.getString("website_url"));
        newBrewery.setUserId(row.getInt("user_id"));
        return newBrewery;
    }
}
