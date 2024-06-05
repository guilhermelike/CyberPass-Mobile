package com.example.cyberpass.Service;

import com.example.cyberpass.Modal.Ticket;
import com.example.cyberpass.Repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepository ticketRepository;

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Ticket getTicket(Long id) {
        Optional<Ticket> ticket = ticketRepository.findById(id);
        return ticket.orElse(null);
    }

    public Ticket createTicket(Ticket ticket) {
        ticketRepository.save(ticket);
        return ticketRepository.findById(ticket.getId()).orElse(null);
    }

    public String removeTicket(Long id) {
        ticketRepository.deleteById(id);
        return "Successfully removed the ticket with id : " + id;
    }
}