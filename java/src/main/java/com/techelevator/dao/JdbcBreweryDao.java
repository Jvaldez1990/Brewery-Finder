package com.techelevator.dao;
import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBreweryDao implements BreweryDao {
    private JdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert simpleJdbcInsert;


    public JdbcBreweryDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("breweries").usingGeneratedKeyColumns("brewery_id");
    }

    @Override
    public List<Brewery> getAllBreweries() {
        List<Brewery> allBreweries = new ArrayList<>();
        String sqlGetAllBreweries = "SELECT * FROM breweries";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBreweries);

        while (results.next()) {
            Brewery aBrewery = mapRowToBrewery(results);
            allBreweries.add(aBrewery);
        }
        return allBreweries;
    }

    @Override
    public Brewery getBreweryById(Long breweryId) {
        Brewery aBrewery = new Brewery();
        String sqlGetABrewery = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABrewery, breweryId);

        while (results.next()) {
            aBrewery = mapRowToBrewery(results);
        }

        return aBrewery;
    }

    @Override
    public Brewery addNewBrewery(Brewery aBrewery) {
//        String sqlAddBrewery = "INSERT INTO breweries (name, address, city,"
//                + "zipcode, phone_number, description, brewery_logo_url, website_url,"
//                + "user_id, hours, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?, ?,"
//                + "?, ?, ?, ?)";
//        jdbcTemplate.update(sqlAddBrewery, aBrewery.getName(), aBrewery.getAddress(),
//                aBrewery.getCity(), aBrewery.getZipcode(), aBrewery.getPhoneNumber(),
//                aBrewery.getDescription(), aBrewery.getBreweryLogoUrl(), aBrewery.getWebsiteUrl(),
//                aBrewery.getUserId(), aBrewery.getHours());
        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("name", aBrewery.getName())
                .addValue("address", aBrewery.getAddress())
                .addValue("city", aBrewery.getCity())
                .addValue("zipcode", aBrewery.getZipcode())
                .addValue("phone_number", aBrewery.getPhoneNumber())
                .addValue("description", aBrewery.getDescription())
                .addValue("brewery_logo_url", aBrewery.getBreweryLogoUrl())
                .addValue("website_url", aBrewery.getWebsiteUrl())
                .addValue("user_id", aBrewery.getUserId())
                .addValue("hours", aBrewery.getHours());
        int id = (int) simpleJdbcInsert.executeAndReturnKey(parameters);

        Brewery brewery = null;
        String sqlGetABrewery = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABrewery, id);
        while (results.next()) {
            brewery = mapRowToBrewery(results);
        }
        return brewery;
    }

    @Override
    public Brewery updateBrewery(Brewery aBrewery) {
        String sqlUpdateBrewery = "UPDATE breweries SET name = ?, address = ?,"
                + " city = ?, zipcode = ?, phone_number = ?, description = ?, "
                + "brewery_logo_url = ?, user_id = ?, hours = ?, website_url = ?"
                + "WHERE brewery_id = ?";
        jdbcTemplate.update(sqlUpdateBrewery, aBrewery.getName(), aBrewery.getAddress(),
                aBrewery.getCity(), aBrewery.getZipcode(), aBrewery.getPhoneNumber(),
                aBrewery.getDescription(), aBrewery.getBreweryLogoUrl(), aBrewery.getUserId(),
                aBrewery.getHours(), aBrewery.getWebsiteUrl(), aBrewery.getBreweryId());

        Brewery brewery = null;
        String sqlGetABrewery = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABrewery, aBrewery.getBreweryId());
        while (results.next()) {
            brewery = mapRowToBrewery(results);
        }
        return brewery;
    }

    @Override
    public void deleteBrewery(Long breweryId) {
        String sqlDeleteBrewery = "DELETE FROM breweries WHERE brewery_id = ?";
        jdbcTemplate.update(sqlDeleteBrewery, breweryId);
    }

    @Override
    public List<Brewery> getBreweryByUserID(Long userId) {
        List<Brewery> allBreweriesByUserId = new ArrayList<>();
        String sqlGetAllBreweriesByUserId = "SELECT * FROM breweries WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBreweriesByUserId, userId);

        while (results.next()) {
            Brewery aBrewery = mapRowToBrewery(results);
            allBreweriesByUserId.add(aBrewery);
        }
        return allBreweriesByUserId;
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
