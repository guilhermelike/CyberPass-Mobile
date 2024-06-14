package com.example.cyberpass.Service;

import com.example.cyberpass.Modal.Request;
import com.example.cyberpass.Repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestService {
    @Autowired
    private RequestRepository repository;

    public List<Request> findAll() {
        return repository.findAll();
    }

    public Optional<Request> findById(Long id) {
        return repository.findById(id);
    }

    public Request save(Request request) {
        return repository.save(request);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}