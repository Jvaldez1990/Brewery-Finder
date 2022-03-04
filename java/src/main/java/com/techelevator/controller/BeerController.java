package com.techelevator.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Beer> showAllBeers(ModelMap modelHolder) {
        List<Beer> beerList = beerDAO.getAllBeer();
        List<Brewery> breweries = breweryDAO.getAllBreweries();

        modelHolder.put("allBeers", beerList);
        modelHolder.put("allBreweries", breweries);
        return beerList;
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path="/beers/{beerId}", method = RequestMethod.GET)
    public Beer getBeerByID(@PathVariable Long beerId) throws NotFoundException {
        return beerDAO.getBeerByID(beerId);
    }

    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path="/addBeer", method=RequestMethod.GET)
    public String showAddBeer() throws NotAllowedException {
        return "addBeer";
    }

    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path = "/beers/{beerId}", method = RequestMethod.DELETE)
    public void deleteABeer(@PathVariable Long beerId) throws NotAllowedException {
        beerDAO.deleteBeer(beerId);
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path="/breweries/{breweryId}/beers", method = RequestMethod.GET)
    public List<Beer> getBeerByBreweryID(@PathVariable Long breweryId) throws NotFoundException {
        return beerDAO.getBeerByBreweryID(breweryId);
    }

    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path= "/beers", method = RequestMethod.PUT)
    public void updateBeer(@RequestBody Beer aBeer) throws NotAllowedException {
        beerDAO.updateBeer(aBeer);
    }


}