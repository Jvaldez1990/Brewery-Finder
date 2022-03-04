package com.techelevator.controller;

import com.techelevator.dao.BreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BreweryController {

    @Autowired
    private BreweryDao BreweryDao;

    public BreweryController(BreweryDao BreweryDao) {
        this.BreweryDao = BreweryDao;
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path = "/breweries", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries(){
        return BreweryDao.getAllBreweries();
    }

    // Get Brewery by ID
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/breweries/{breweryId}", method = RequestMethod.GET)
    public Brewery getBreweryByBreweryID(@PathVariable Long breweryId) throws NotFoundException {
        return BreweryDao.getBreweryById(breweryId);
    }

    // Add a new brewery
    // This needs to limited to just "Admin" users
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/breweries", method = RequestMethod.POST)
    public void addNewBrewery(@RequestBody Brewery aBrewery) throws NotAllowedException {
        BreweryDao.addNewBrewery(aBrewery);
    }

    // Update a brewery
    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path = "/breweries", method = RequestMethod.PUT)
    public void updateBrewery(@RequestBody Brewery aBrewery) throws NotAllowedException {
        BreweryDao.updateBrewery(aBrewery);
    }

    // Delete a brewery
    // Should be limited to Admin
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/breweries/{breweryId}", method = RequestMethod.DELETE)
    public void deleteBrewery(@PathVariable Long breweryId) throws NotAllowedException {
        BreweryDao.deleteBrewery(breweryId);
    }

    //Get Brewery by user id
    @RequestMapping(path = "/users/{userId}/breweries", method = RequestMethod.GET)
    public List<Brewery> getBreweriesByUserId(@PathVariable Long userId) throws NotFoundException{
        return BreweryDao.getBreweryByUserID(userId);
    }
}