package com.example.cyberpass.Controller;

import com.example.cyberpass.Modal.Ticket;
import com.example.cyberpass.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {
    @Autowired
    TicketService ticketService;

    @GetMapping("/tickets")
    public List<Ticket> getAllTickets()
    {
        return ticketService.getAllTickets();
    }

    @GetMapping("/tickets/{id}")
    public Ticket getTicket(@PathVariable Long id)
    {
        return ticketService.getTicket(id);
    }

    @PostMapping("/ticket/")
    public Ticket createTicket(@RequestBody Ticket ticket )
    {
        return ticketService.createTicket(ticket);
    }

    @DeleteMapping("/tickets/{id}")
    public String removeTicket(@PathVariable Long id)
    {
        return ticketService.removeTicket(id);
    }
}