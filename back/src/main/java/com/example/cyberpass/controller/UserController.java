package com.example.cyberpass.Controller;

import com.example.cyberpass.Modal.User;
import com.example.cyberpass.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        try {
            User user = userService.getUser(id);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            User createdUser = userService.createUser(user);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        try {
            User existingUser = userService.getUser(id);
            if (existingUser != null) {
                existingUser.setCpf(updatedUser.getCpf());
                existingUser.setName(updatedUser.getName());
                existingUser.setLastname(updatedUser.getLastname());
                existingUser.setPassword(updatedUser.getPassword());
                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setBirthday(updatedUser.getBirthday());
                existingUser.setGender(updatedUser.getGender());
                existingUser.setCep(updatedUser.getCep());
                existingUser.setTel(updatedUser.getTel());
                existingUser.setUf(updatedUser.getUf());
                existingUser.setComplement(updatedUser.getComplement());
                existingUser.setRefpoint(updatedUser.getRefpoint());
                existingUser.setCountry(updatedUser.getCountry());
                existingUser.setNeighbourhood(updatedUser.getNeighbourhood());
                existingUser.setAddress(updatedUser.getAddress());
                existingUser.setCity(updatedUser.getCity());
                existingUser.setIsLogged(updatedUser.getIsLogged());

                User savedUser = userService.saveUser(existingUser);
                return ResponseEntity.ok(savedUser);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> removeUser(@PathVariable Long id) {
        try {
            String result = userService.removeUser(id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
