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

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public String removeUser(Long id)
    {
        userRepository.deleteById(id);
        return "Successfully removed the user with id : " + id;
    }

    public User updateUser(Long id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setLastname(updatedUser.getLastname());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setCpf(updatedUser.getCpf());
            existingUser.setBirthday(updatedUser.getBirthday());
            existingUser.setTel(updatedUser.getTel());
            existingUser.setCity(updatedUser.getCity());
            existingUser.setNeighbourhood(updatedUser.getNeighbourhood());
            existingUser.setComplement(updatedUser.getComplement());
            existingUser.setRefpoint(updatedUser.getRefpoint());
            existingUser.setUf(updatedUser.getUf());
            existingUser.setCountry(updatedUser.getCountry());
            existingUser.setAddress(updatedUser.getAddress());

            return userRepository.save(existingUser);
        } else {
            return null; // ou lançar exceção, dependendo do caso
        }
    }
}