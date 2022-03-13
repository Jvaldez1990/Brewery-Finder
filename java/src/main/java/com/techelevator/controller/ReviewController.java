package com.techelevator.controller;

import java.time.LocalDateTime;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.techelevator.dao.BeerDao;
import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;

@CrossOrigin
@RestController
public class ReviewController {
    @Autowired
    ReviewDao reviewDAO;
    @Autowired
    BeerDao beerDAO;

    public ReviewController(ReviewDao reviewDAO) {
        this.reviewDAO = reviewDAO;
    }

    @RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.GET)
    public List<Review> getReviews(@PathVariable Long beerId) throws NotFoundException {
        return reviewDAO.getReviews(beerId);
    }

    @RequestMapping(path = "/reviews", method = RequestMethod.POST)
    public Review addReviews(@RequestBody Review aReview) throws NotAllowedException {
        return reviewDAO.addReview(aReview);
    }

    @RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.DELETE)
    public void deleteABeer(@PathVariable Long beerId) throws NotAllowedException {
        reviewDAO.deleteAllReviews(beerId);
    }

//    @RequestMapping(path="/beerDetails/{id}/review", method=RequestMethod.POST)
//    public String createNewMessage(@PathVariable("id") long beerId, @Valid @ModelAttribute("newReview") Review review, BindingResult result, RedirectAttributes flash) throws NotFoundException {
//        flash.addFlashAttribute("newReview", review);
//
//        if (beerDAO.getBeerByID(beerId) == null) {
//            throw new NotFoundException();
//        }
//
//        if(result.hasErrors()) {
//            flash.addFlashAttribute(BindingResult.MODEL_KEY_PREFIX + "newReview", result);
//            return "redirect://beerDetails/{id}/review";
//        }
//        review.setCreateTime(LocalDateTime.now());
//
//        reviewDAO.saveReview(review);
//
//        return "redirect:/beerDetails/"+ beerId;
//    }
}