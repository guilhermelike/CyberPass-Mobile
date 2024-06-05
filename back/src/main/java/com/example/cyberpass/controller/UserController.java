package com.example.cyberpass.Controller;

import com.example.cyberpass.Modal.User;
import com.example.cyberpass.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id)
    {
        return userService.getUser(id);
    }

    @PostMapping("/user/")
    public User createUser(@RequestBody User user )
    {
        return userService.createUser(user);
    }

    @DeleteMapping("/users/{id}")
    public String removeUser(@PathVariable Long id)
    {
        return userService.removeUser(id);
    }
}