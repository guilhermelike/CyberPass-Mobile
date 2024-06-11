package com.example.cyberpass.Modal;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false, length = 255)
    private String location;

    @Column(nullable = false, length = 255)
    private String image;

    @Column(nullable = false, length = 255)
    private String backgroundImage;

    @Column(nullable = false, length = 255)
    private String eventDescription;

    @Column(nullable = false, length = 255)
    private String city;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal priceinteira;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal pricemeia;

    @Column(nullable = false)
    private int quantityInteira;

    @Column(nullable = false)
    private int quantityMeia;

    @Column(nullable = false)
    private boolean available;

    @Column(nullable = false)
    private boolean championship;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBackgroundImage() {
        return backgroundImage;
    }

    public void setBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public BigDecimal getPriceInteira() {
        return priceinteira;
    }

    public void setPriceInteira(BigDecimal priceinteira) {
        this.priceinteira = priceinteira;
    }

    public BigDecimal getPriceMeia() {
        return pricemeia;
    }

    public void setPriceMeia(BigDecimal pricemeia) {
        this.pricemeia = pricemeia;
    }

    public int getQuantityInteira() {
        return quantityInteira;
    }

    public void setQuantityInteira(int quantityInteira) {
        this.quantityInteira = quantityInteira;
    }

    public int getQuantityMeia() {
        return quantityMeia;
    }

    public void setQuantityMeia(int quantityMeia) {
        this.quantityMeia = quantityMeia;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public boolean isChampionship() {
        return championship;
    }

    public void setChampionship(boolean championship) {
        this.championship = championship;
    }
}
