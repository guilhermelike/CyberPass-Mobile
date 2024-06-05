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
    EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEvent(Long id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.orElse(null);
    }

    public Event createEvent(Event event) {
        eventRepository.save(event);
        return eventRepository.findById(event.getId()).orElse(null);
    }

    public String removeEvent(Long id) {
        eventRepository.deleteById(id);
        return "Successfully removed the event with id : " + id;
    }
}