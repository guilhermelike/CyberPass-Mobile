package com.example.cyberpass.controller;

import com.example.cyberpass.Modal.Event;
import com.example.cyberpass.Modal.Request;
import com.example.cyberpass.Modal.Ticket;
import com.example.cyberpass.Modal.User;
import com.example.cyberpass.Service.EventService;
import com.example.cyberpass.Service.RequestService;
import com.example.cyberpass.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class RequestController {
    @Autowired
    private RequestService service;

    @Autowired
    private UserService userService;

    @Autowired
    private EventService eventService;

    @GetMapping("/requests")
    public List<Request> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Request> getById(@PathVariable Long id) {
        Optional<Request> request = service.findById(id);
        if (request.isPresent()) {
            return ResponseEntity.ok(request.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/requests/")
    public ResponseEntity<?> create(@RequestBody List<Request> requests) {
        try {
            for (Request request : requests) {
                // Carregar User e Event do banco de dados
                Optional<User> userOptional = Optional.ofNullable(userService.getUser(request.getUser().getId()));
                Optional<Event> eventOptional = eventService.findById(request.getEvent().getId());

                if (!userOptional.isPresent() || !eventOptional.isPresent()) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User ou Event não encontrado.");
                }

                request.setUser(userOptional.get());
                request.setEvent(eventOptional.get());

                service.save(request);
            }

            return ResponseEntity.ok(requests);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar a requisição: " + e.getMessage());
        }
    }


    @PutMapping("/requests/{id}")
    public ResponseEntity<Request> update(@PathVariable Long id, @RequestBody Request request) {
        if (service.findById(id).isPresent()) {
            request.setId(id);
            return ResponseEntity.ok(service.save(request));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/requests/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
