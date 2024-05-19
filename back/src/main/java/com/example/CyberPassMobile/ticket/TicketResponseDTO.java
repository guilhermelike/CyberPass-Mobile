package com.example.CyberPassMobile.ticket;

public record TicketResponseDTO(Long id, String title, String image, Integer price) {
    public TicketResponseDTO(Ticket ticket){
        this(ticket.getId(), ticket.getTitle(), ticket.getImage(), ticket.getPrice());
    }
}
