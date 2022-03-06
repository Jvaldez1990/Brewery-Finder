package com.techelevator.dao;

import java.util.List;
import com.techelevator.model.Beer;

public interface BeerDao {

    List<Beer> getAllBeer();

    Beer saveBeer(Beer newBeer);

    void deleteBeer(Long beerId);

    Beer getBeerByID(Long beerId);

    List <Beer> getBeerByBreweryID(Long breweryId);

    Beer updateBeer(Beer aBeer);

}