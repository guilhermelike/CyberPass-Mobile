package com.example.cyberpass.Service;

import com.example.cyberpass.Modal.Event;
import com.example.cyberpass.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
        @Autowired
        private EventRepository repository;

        public List<Event> findAll() {
            return repository.findAll();
        }

        public Optional<Event> findById(Long id) {
            return repository.findById(id);
        }

        public Event save(Event event) {
            return repository.save(event);
        }

        public void deleteById(Long id) {
            repository.deleteById(id);
        }
    }