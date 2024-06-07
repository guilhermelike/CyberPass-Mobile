package com.example.cyberpass.Controller;

import com.example.cyberpass.Modal.Event;
import com.example.cyberpass.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {
    @Autowired
    EventService eventService;

    @CrossOrigin(origins = "exp://192.168.26.208:8081")
    @GetMapping("/events")
    public List<Event> getAllEvents()
    {
        return eventService.getAllEvents();
    }

    @GetMapping("/events/{id}")
    public Event getEvent(@PathVariable Long id)
    {
        return eventService.getEvent(id);
    }

    @PostMapping("/event/")
    public Event createEvent(@RequestBody Event event )
    {
        return eventService.createEvent(event);
    }

    @DeleteMapping("/events/{id}")
    public String removeEvent(@PathVariable Long id)
    {
        return eventService.removeEvent(id);
    }
}