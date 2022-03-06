package com.techelevator.dao;

import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {
    List<Brewery> getAllBreweries();

    Brewery addNewBrewery(Brewery aBrewery);

    Brewery getBreweryById(Long breweryId);

    Brewery updateBrewery(Brewery aBrewery);

    void deleteBrewery(Long breweryId);

    List<Brewery> getBreweryByUserID(Long userId);
}
