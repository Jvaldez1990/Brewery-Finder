package com.techelevator.dao;

import java.util.List;
import com.techelevator.model.Beer;

public interface BeerDao {

    List<Beer> getAllBeer();

    void saveBeer(Beer newBeer);

    void deleteBeer(Long beerId);

    Beer getBeerByID(Long beerId);

    List <Beer> getBeerByBreweryID(Long breweryId);

    void updateBeer(Beer aBeer);

}