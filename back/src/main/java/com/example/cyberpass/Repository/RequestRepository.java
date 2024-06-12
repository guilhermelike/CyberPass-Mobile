package com.example.cyberpass.Repository;

import com.example.cyberpass.Modal.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {
}
