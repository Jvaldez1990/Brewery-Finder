package com.techelevator.dao;
import java.util.ArrayList;
import java.util.List;
import javax.sql.DataSource;
import javax.validation.Valid;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import com.techelevator.model.Review;

@Component
public class JdbcReviewDao implements ReviewDao {

    private JdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert simpleJdbcInsert;

    public JdbcReviewDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("reviews").usingGeneratedKeyColumns("reviews_id");
    }

    /* Return Review List  */

    @Override
    public List<Review> getReviews(Long beerId){
        List<Review> reviews = new ArrayList<>();
        String sqlGetReviewByBeerId = "SELECT * FROM reviews WHERE beer_id = ? ORDER BY create_date";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByBeerId, beerId);

        while(results.next()) {
            Review aReview = mapRowToReview(results);
            reviews.add(aReview);
        }
        return reviews;
    }

    /* Create and return Review object  */
    @Override
    public Review addReview(Review aReview) {
//        String sqlAddReview = "INSERT INTO reviews (description, rating, beer_id, user_id, name) VALUES (?,?,?,?,?)";
//        jdbcTemplate.update(sqlAddReview, aReview.getDescription(), aReview.getRating(), aReview.getBeerId(),aReview.getUserId(), aReview.getName());

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("name", aReview.getName())
                .addValue("description", aReview.getDescription())
                .addValue("user_id", aReview.getUserId())
                .addValue("beer_id", aReview.getBeerId())
                .addValue("rating", aReview.getRating())
                .addValue("create_date", aReview.getCreateTime());

        int id = (int) simpleJdbcInsert.executeAndReturnKey(parameters);

        Review review = null;
        String sqlGetReviewByBeerId = "SELECT * FROM reviews WHERE reviews_id = ? ";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByBeerId, id);

        while(results.next()) {
            review = mapRowToReview(results);
        }
        return review;
    }

    public void deleteAllReviews(Long beerId){
        String sql = "DELETE FROM reviews WHERE beer_id = ?";
        jdbcTemplate.update(sql, beerId);
    }

//    @Override
//    public void saveReview(@Valid Review review) {
//        String sqlSaveReview = "INSERT INTO reviews(description, rating, create_date, beer_id) VALUES(?,?,?,?)";
//        jdbcTemplate.update(sqlSaveReview, review.getDescription(), review.getRating(),
//                review.getCreateTime(), review.getBeerId());
//    }

//    @Override
//    public List<Review> searchReviewsByBeerId(long beerId) {
//        List<Review> reviewList = new ArrayList<>();
//        String sqlSearchReviewByBeerId = "SELECT * FROM reviews WHERE beer_id = ? ORDER BY create_date";
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlSearchReviewByBeerId, beerId);
//
//        while(results.next()){
//            reviewList.add(mapRowToReview(results));
//        }
//        return reviewList;
//    }

    private Review mapRowToReview(SqlRowSet row) {
        Review review = new Review();
        review.setId(row.getLong("reviews_id"));
        review.setName(row.getString("name"));
        review.setDescription(row.getString("description"));
        review.setRating(row.getInt("rating"));
        review.setBeerId(row.getLong("beer_id"));
        review.setUserId(row.getLong("user_id"));
        return review;
    }

}