package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserDao userDao;

    public UserController(UserDao userDao){
        this.userDao = userDao;
    }

    @RequestMapping(path="/users/{userName}", method = RequestMethod.GET)
    public User getUserByUsername(@PathVariable String userName) throws NotFoundException {
        return userDao.findByUsername(userName);
    }
}
