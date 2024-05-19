package com.example.CyberPassMobile.controller;

import com.example.CyberPassMobile.ticket.Ticket;
import com.example.CyberPassMobile.ticket.TicketRepository;
import com.example.CyberPassMobile.ticket.TicketResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("ticket")

public class TicketController {

    @Autowired
    private TicketRepository repository;

    @GetMapping
    public List<TicketResponseDTO> getAll(){

        List<TicketResponseDTO> ticketList = repository.findAll().stream().map(TicketResponseDTO::new).toList();
        return ticketList;
    }
}
