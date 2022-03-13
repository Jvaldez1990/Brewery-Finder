package com.techelevator.dao;

import java.time.LocalDateTime;
import java.util.List;

import javax.validation.Valid;

import com.techelevator.model.Review;

public interface ReviewDao {

    List<Review> getReviews(Long beer_id);

    Review addReview(Review aReview);

    void deleteAllReviews(Long beer_id);

//    void saveReview(@Valid Review review);
//
//    List<Review> searchReviewsByBeerId(long beerId);

}