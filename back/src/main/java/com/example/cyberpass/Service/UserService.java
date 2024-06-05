package com.example.cyberpass.Service;

import com.example.cyberpass.Modal.User;
import com.example.cyberpass.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public User getUser(Long id)
    {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public User createUser(User user)
    {
        userRepository.save(user);
        return userRepository.findById(user.getId()).orElse(null);
    }

    public String removeUser(Long id)
    {
        userRepository.deleteById(id);
        return "Successfully removed the user with id : " + id;
    }
}