package com.techelevator.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.techelevator.dao.BeerDao;
import com.techelevator.dao.BreweryDao;
import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Beer;
import com.techelevator.model.Brewery;

@RestController
@CrossOrigin
public class BeerController {
    @Autowired
    private BeerDao beerDAO;

    @Autowired
    private BreweryDao breweryDAO;

    @Autowired
    private ReviewDao reviewDAO;

    public BeerController(BeerDao beerDAO) {
        this.beerDAO = beerDAO;
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path="/beers", method=RequestMethod.GET)
    public List<Beer> showAllBeers() {
        return beerDAO.getAllBeer();
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path="/beers/{beerId}", method = RequestMethod.GET)
    public Beer getBeerByID(@PathVariable Long beerId) throws NotFoundException {
        return beerDAO.getBeerByID(beerId);
    }


    @RequestMapping(path="/addBeer", method=RequestMethod.POST)
    public ResponseEntity<Beer> showAddBeer(@RequestBody Beer aBeer) throws NotAllowedException {
        Beer beer = beerDAO.saveBeer(aBeer);
        return new ResponseEntity<>(beer, HttpStatus.CREATED);
    }


    @RequestMapping(path = "/beers/{beerId}", method = RequestMethod.DELETE)
    public void deleteABeer(@PathVariable Long beerId) throws NotAllowedException {
        beerDAO.deleteBeer(beerId);
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path="/breweries/{breweryId}/beers", method = RequestMethod.GET)
    public List<Beer> getBeerByBreweryID(@PathVariable Long breweryId) throws NotFoundException {
        return beerDAO.getBeerByBreweryID(breweryId);
    }

    @RequestMapping(path= "/beers", method = RequestMethod.PUT)
    public Beer updateBeer(@RequestBody Beer aBeer) throws NotAllowedException {
        return beerDAO.updateBeer(aBeer);
    }


}